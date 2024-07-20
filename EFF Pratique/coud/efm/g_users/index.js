const express = require("express");
const { mdb, User } = require("./connexiondb");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// is authorized
const isAuth = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(404).send({ error: "Unauthorized" });
  }
  // try {

  //     const taken = req.headers.authorization.split(" ")[1]
  //     const decoded = jwt.verify(token,"l3wawa")
  //     req.user = decoded
  //     next()
  // } catch (errror) {
  //     return res.send({error:"token could not verify"})
  // }

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

// register
app.post("/auth/register", async (req, res) => {
  const data = req.body;
  if (!data.email || !data.password || !data.role) {
    res.status(404).send({ error: "data required !" });
  }

  if (data.role !== "user" && data.role !== "admin") {
    res.status(404).send({ error: "invalid role!" });
  }
  const doc = await User.findOne({ email: data.email });
  if (doc) {
    return res.status(404).send({ error: "email already exists" });
  }

  await bcrypt.hash(data.password, 10, async (error, hashedPassowrd) => {
    if (error) {
      console.log(error);
      return res.status(404).send({ error: "could not hash password!" });
    }
    data.password = hashedPassowrd;
    const user = new User(data);
    user
      .save()
      .then((user) => {
        return res.send(user);
      })
      .catch((error) => {
        return res.send({ error });
      });
  });
});

app.post("/auth/login", async (req, res) => {
  const data = ({ email, password } = req.body);
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({ error: "could not found user this email!" });
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(404).send({ error: "password incorrect!" });
  }

  await jwt.sign(data, "l3wawa", { expiresIn: "24h" }, async (error, token) => {
    if (error) {
      return res.status(404).send({ error: "could not get token" });
    }
    return res.status(200).send({ token });
  });
});

app.delete('/auth/:id',isAuth,async (req,res)=>{
    const id = req.params.id
    try {
        const authUser = req.user
        
        if (authUser.role !== "admin"){
            return res.status(404).send({error:"u are not a admin"})
        }

        await User.findByIdAndDelete(id)   
        return res.status(200).send("user is deleted!") 
    } catch (error) {
        return res.status(404).send({error:"could not deleted"})
    }
})

const port = 3000;

app.listen(port, () => {
  console.log(`the server listening on port ${port}`);
});
