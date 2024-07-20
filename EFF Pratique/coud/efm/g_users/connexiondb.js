const dbname = "authDB";

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

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", UserSchema);

module.exports = { mongoose, User };

// const mongoose = require('mongoose');
// mongoose.connect(`mongodb://localhost/${dbname}`, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => console.log(`Connected to ${dbname} database`))
