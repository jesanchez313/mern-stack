const ProfileModel = require("../models/Profie");

const profileController = {};

profileController.get = async (req, res) => {
  try {
    const response = await ProfileModel.find();

    res.status(200).json(response);
  } catch (error) {
    handleError(res, error.message, "error to get profile");
  }
};

profileController.create = async (req, res) => {
  const { name, description, username } = req.body;
  const filename = req.file ? req.file.filename : req.body.picture;

  const newProfile = new ProfileModel({
    name,
    description,
    picture: filename,
    username: username
  });

  try {
    const response = await newProfile.save();

    res.status(200).json(response);
  } catch (error) {
    handleError(res, error.message, "error to create profile");
  }
};

profileController.update = async (req, res) => {
  const { name, description, username } = req.body;
  const filename = req.file ? req.file.filename : req.body.picture;

  try {
    const response = await ProfileModel.findByIdAndUpdate(req.params.id, {
      name,
      description,
      picture: filename,
      username: username
    });
    res.status(200).json(response);
  } catch (error) {
    handleError(res, error.message, "error to update profile");
  }
};

profileController.remove = async (req, res) => {
  try {
    const response = await ProfileModel.findByIdAndDelete(req.params.id);

    res.status(200).json(response);
  } catch (error) {
    handleError(res, error.message, "error to update profile");
  }
};

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ error: message });
}

module.exports = profileController;
