//api.js
const expres = require('express');
let router = expres.Router();

//End points
const productsEndpoint = require('./products');
const userEndPoint = require('./user/user')

// Initializing routes
router.use('/user',userEndPoint)
rooutes.use('/products', productsEndpoint);

module.exports = rooutes;
