const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    username: String,
    password: String,
    avatar: { type: String, default: 'https://i.pinimg.com/236x/4f/95/66/4f956662848e750b4689c79ea25e1521.jpg' },
    cart: [],
    currency: { type: Number, default: 1000 }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("user", schema);


/* To have a "user" model available in some other file (part of the app),
   you need to navigate to this file from the place
   where you are currently => const user = require("./models/User.model") */