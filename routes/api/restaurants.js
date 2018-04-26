const express = require("express");
const router = express.Router();
const restaurantsController = require("../../controllers/restaurantsController");

// Matches with "/api/restaurants"
router.route("/")
  .get(restaurantsController.findAll)
  .get(restaurantsController.findFavorites)
  .post(restaurantsController.create);

  router
  .route("/:liked")
  .get(restaurantsController.findFavorites)
  //.put(restaurantsController.update);
  // .get(booksController.findById)
  // .put(booksController.update)
  // .delete(booksController.remove);

  router
  .route("/thumbsup:id")  
  .put(restaurantsController.updateLike);
  //.get(restaurantsController.findById)
  //.delete(restaurantsController.remove);

  router
  .route("/thumbsdown:id")  
  .put(restaurantsController.updateDislike);

  //.get(restaurantsController.findAll)
  // .get(restaurantsController.findById)
  // .put(restaurantsController.update)
  // .delete(restaurantsController.remove);

module.exports = router;
