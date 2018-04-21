const express = require("express");
const router = express.Router();
const restaurantsController = require("../../controllers/restaurantsController");

// Matches with "/api/restaurants"
router.route("/")
  .post(restaurantsController.create);
  console.log("IN ROUTES");
  //.get(restaurantsController.findAll)
router.get('/test', (req, res, next)=>{
  console.log('this route works');
});
// Matches with "/api/restaurants/:id"
router
  .route("/:id")
  // .get(restaurantsController.findById)
  // .put(restaurantsController.update)
  // .delete(restaurantsController.remove);

module.exports = router;
