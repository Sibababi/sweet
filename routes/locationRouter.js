const express = require("express");
const router = express.Router();
const authMiddlewers = require("../middlewares/authMiddlewers");
const locationController = require("../controllers/locationController");
router.use(authMiddlewers.protect);
authMiddlewers.restrictTo("admin"),
  router.route("/region").get(locationController.getAllRegion);
router
  .route("/")
  .get(locationController.getAllLocation)
  .post(locationController.createLocation);
router
  .route("/:id")
  .get(locationController.getLocation)
  .patch(locationController.updateLocation)
  .delete(locationController.deleteLocation);
module.exports = router;
