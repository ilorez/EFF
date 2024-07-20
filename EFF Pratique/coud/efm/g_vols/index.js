const express = require("express");
const { mdb, Vol } = require("./connexiondb");
const app = express();
const jwt = require("jsonwebtoken");
const envoye_notification = require("./send");
const get_notification = require("./receive");

// is authorized
const isAuth = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(404).send({ error: "Unauthorized" });
  }
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, "l3wawa", (error, userInfo) => {
    if (error) {
      return res.stuatus(404).send({ error: "token could not verify" });
    }
    req.user = userInfo;
    next();
  });
};

// for enable json
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ msg: "toto" });
});
// add vol
app.post("/addvol", isAuth, async (req, res) => {
  const { datedepart, datearrive, destination, origin } = req.body;
  const vol = new Vol({ datedepart, datearrive, destination, origin });
  try {
    await vol.save();
    res.status(200).send({ msg: "vol added" });
  } catch (error) {
    res.status(400).send({ error: "vol not added" });
  }
});

// get all vols

app.get("/flights", isAuth, async (req, res) => {
  try {
    const vols = await Vol.find();
    res.status(200).send({ vols });
  } catch (error) {
    res.status(400).send({ error: "vols not found" });
  }
});

// get vol by destination

app.get('/flights/:des',async (req,res)=>{
    const des = req.params.des
    
    try {
        const vols = await  Vol.find({destination:des})
        return res.status(200).send({vols:vols})
    } catch (error) {
        res.status(400).send({ error: `vols with destination ${des} not found` });

    }
})

// udpate vol
app.put('/flights',isAuth, async (req,res)=>{
    const newVolData = req.body
    try {
        const id = newVolData._id
        const vol = await Vol.findByIdAndUpdate(id,newVolData)
        await envoye_notification()
        res.status(200).send("vol data updated")


    } catch (error) {
        res.status(400).send({ error: `could not update vol details` });

    }
})

app.get('/get_noti',async (req,res)=>{
    await get_notification()
    
    res.status(200).send({msg:"notification received"})
})


// example vol in postman
// volobj = {"datedepart":"2021-09-01T00:00:00.000Z","datearrive":"2021-09-01T00:00:00.000Z","destination":"paris","origin":"casablanca"}

const port = 4000;

app.listen(port, () => {
  console.log(`the server listening on port ${port}`);
});
