const express = require('express');
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');


// look routes
const LookController = require('./controllers/LookController');
routes.get('/looks', LookController.index);
routes.get('/look/:id', LookController.show);
routes.post('/look', LookController.store);
routes.put('/look/:id', LookController.update);
routes.delete('/look/:id', LookController.destroy);

// look routes
const CategoryController = require('./controllers/CategoryController');
routes.get('/categories', CategoryController.index);
routes.get('/category/:id', CategoryController.show);
routes.put('/category/:id', CategoryController.update);
routes.post('/category', CategoryController.store);
routes.delete('/category/:id', CategoryController.destroy);


// images
const UploadController = require('./controllers/UploadController');
routes.get('/upload', UploadController.index);
routes.post('/upload', multer(multerConfig).single('file'), UploadController.store);



module.exports = routes;