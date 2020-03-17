const { Schema, model } = require("mongoose");

const profileSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    picture: { type: String, require: true },
    username: { type: String, require: true }
  },
  {
    timestamps: true
  }
);

module.exports = model("Profile", profileSchema);
