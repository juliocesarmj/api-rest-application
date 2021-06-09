const routes = require('express').Router();
const ProductController = require('../controllers/products/products')
const UserController = require('../controllers/users/users')

//request products
routes.get('/products/:id?', ProductController.get)
routes.post('/products', ProductController.post)
routes.put('/products/:id', ProductController.put)
routes.delete('/products/:id', ProductController.remove)

//request users
routes.get('/users/:id?', UserController.get)
routes.post('/users', UserController.post)
routes.put('/users/:id', UserController.put)
routes.delete('/users/:id', UserController.remove)


module.exports = routes;
