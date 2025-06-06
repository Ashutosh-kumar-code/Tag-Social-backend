//express
const express = require("express");
const route = express.Router();

const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const videoController = require("../../controllers/admin/video.controller");

//upload (normal video or short) by the admin
route.post("/uploadVideo",  videoController.uploadVideo);

//update (normal video or short) by the admin
route.patch("/updateVideo",  videoController.updateVideo);

//delete (normal video or short) by admin (multiple or single)
route.delete("/deleteVideo",  videoController.deleteVideo);

//get all normal video or short
route.get("/videosOrShorts",  videoController.videosOrShorts);

module.exports = route;
