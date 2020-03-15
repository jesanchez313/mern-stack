const ProfileModel = require("../models/Profie");

const profileController = {};

profileController.get = async (req, res) => {
  const response = await ProfileModel.find();

  res.json(response);
};

profileController.create = async (req, res) => {
  const { name, description, picture } = req.body;

  const newProfile = new ProfileModel({
    name,
    description,
    picture
  });
  const response = await newProfile.save();

  res.json(response);
};

profileController.update = async (req, res) => {
  const response = await ProfileModel.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.json(response);
};

profileController.remove = async (req, res) => {
  const response = await ProfileModel.findByIdAndDelete(req.params.id);

  res.json(response);
};

module.exports = profileController;
