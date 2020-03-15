const { Router } = require("express");
const router = Router();

const { get, create, update, remove } = require("../controllers/profiles");

router
  .route("/")
  .get(get)
  .post(create);

router
  .route("/:id")
  .put(update)
  .delete(remove);

module.exports = router;
