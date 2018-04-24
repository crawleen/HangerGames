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
  .put(restaurantsController.update);
  // .get(booksController.findById)
  // .put(booksController.update)
  // .delete(booksController.remove);

  router
  .route("/:id")
  .get(restaurantsController.findById)
  .put(restaurantsController.update);
  //.delete(restaurantsController.remove);

  //.get(restaurantsController.findAll)
router.get('/test', (req, res, next)=>{
  console.log('this route works');
});
  // .get(restaurantsController.findById)
  // .put(restaurantsController.update)
  // .delete(restaurantsController.remove);

module.exports = router;
