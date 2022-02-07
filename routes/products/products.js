//Requires
const expres = require('express');
let router = expres.Router();
const productsController = require('../../controllers/products');

//Routers
router.post('/', productsController.addProduct);
router.get('/', productsController.fetchAll);
router.put('/:id', productsController.modifyProductStock);
router.delete('/:id', productsController.delete);

module.exports = router;