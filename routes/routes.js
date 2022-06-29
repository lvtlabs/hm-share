const express = require('express')
const sharedRoutes = express.Router();
const sharedController = require("../controller/shared_controller");
sharedRoutes.get('/getalldata',sharedController.getAllData);
sharedRoutes.post('/save-shared-data',sharedController.saveSharedData);
module.exports = sharedRoutes;
