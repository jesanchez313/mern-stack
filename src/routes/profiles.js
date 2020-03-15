const { Router } = require("express");
const { get, create, update, remove } = require("../controllers/profiles");

const router = Router();

router
  .route("/")
  .get(get)
  .post(create);

router
  .route("/:id")
  .put(update)
  .delete(remove);

module.exports = router;
