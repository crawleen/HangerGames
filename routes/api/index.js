const router = require("express").Router();
const passportRoute = require("./auth")
const restaurantRoute = require("./restaurants")

// Book routes
router.use("/auth", passportRoute);
router.use("/restaurants", restaurantRoute);
module.exports = router;
