const router = require("express").Router();
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const PhotoController = require("../controller/photoController");
const userController = require("../controller/userController");

//user routers
router.post("/users/register", userController.register);
router.post("/users/login", userController.login);
router.use(authentication);

//photo routers
router.get("/photos", PhotoController.GetAllPhotos);
router.get("/photos/:id", PhotoController.getOnePhotoByID);
router.post("/photos", PhotoController.createPhoto);
router.put("/photos/:id", PhotoController.updatePhotoByID);
//router.use(authorization);
module.exports = router;
