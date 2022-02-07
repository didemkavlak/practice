//recuires
const productsServices = require('../services/products');

//exports
exports.addProduct = async (req,res) => {
    const response = await productsServices.addProduct(req.body);
    res.send(response);
}

exports.fetchAll = async (req,res) => {
    const response = await productsServices.fetchAll();
}

module.exports.fetchSingle = async (req, res) => {
    let response = await productsS.fetchSingle(req.params);
    res.send(response);
  };

exports.modifyProductStock = async (req,res) => {
    const response = await productsServices.modifyProductStock(req.body);
    res.send(response);
}

exports.delete = async (req,res) => {
    const response = await productsServices.delete(req.params);
    res.send(response);
}