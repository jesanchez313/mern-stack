const { Schema, model } = require("mongoose");

const profileSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    picture: { type: String }
  },
  {
    timestamps: true
  }
);

module.exports = model("Profile", profileSchema);
