const dbname = "volDB";

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://ilorez:12345678a@ilcluster.q3tfv1h.mongodb.net/?retryWrites=true&w=majority&appName=ilCluster",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("the connection ressue");
  })
  .catch((er) => {
    console.log(er);
  });

const volSchema = new mongoose.Schema(
  {
    datedepart: {
      type: Date,
      required: true,
    },
    datearrive: {
      type: Date,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    origin:{
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const Vol = mongoose.model("Vols", volSchema);

module.exports = { mongoose, Vol };

// const mongoose = require('mongoose');
// mongoose.connect(`mongodb://localhost/${dbname}`, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => console.log(`Connected to ${dbname} database`))
