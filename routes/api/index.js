const router = require("express").Router();
const bookRoutes = require("./books");
const passportRoute = require("./auth")

// Book routes
router.use("/books", bookRoutes);
router.use("/auth", passportRoute);

module.exports = router;
