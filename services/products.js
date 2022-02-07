const AWS = require("aws-sdk");
const { v4: uuidv4} = require('uuid')

AWS.config.update({
  region: process.env.REGION,
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  endpoint: process.env.ENDPOINT,
  });
  
  let table = "products";
  let docClient = new AWS.DynamoDB.DocumentClient();
  
  module.exports.addProduct = async (item) => {
    let params = {
        TableName:table,
        Item:{
            "productsId": uuidv4(),
            "stock": item.stock,
            "productsName": item.productsName
        },
    },
    try{
      await docClient.put(params).promise();
      return {
          status: true,
          message: "The product added",
        };
      } catch (err) {
        console.log(err);
        return { status: false, message: "The product didn't add" };
      }
  };

  module.exports.fetchAll = async () => {
    let params = {
      TableName: table,
    };
    try{
      let response = await docClient.scan(params).promise();
      return{
        status: true,
        message: "The products have been successfully received.",
        data: response
      };
    }catch (err) {
      console.log(err);
      return { status: false, message: "The products could not be received."}
    }
  }
    
  module.exports.fecthSingle = async (query) => {
    let params = {
      TableName: table,
      Key: {
        productsId: query.productsId,
      },
    };
    try {
      let response = await docClient.get(params).promise();
      return { status: true, message:"The products have been successfully received."}
    }catch (err) {
      console.log(err);
      return { status: false, message:"The products could not be received."}
    }
  }

  module.exports.modifyProductStock = async (item) => {
    let params = {
      TableName: table,
      Key: {
        productId: item.productId,
      },
      UpdateExpression: "set stock = :r",
      ExpressionAttributeValues: {
        ":r": item.stock,
      },
      ReturnValues: "UPDATED_NEW",
    };
    try {
      await docClient.update(params).promise();
      return { status: true, message: "The product inventory value has been successfully updated." };
    } catch (err) {
      console.log(err);
      return { status: false, message: "The product value could not be updated." };
    }
  };
  
  module.exports.delete = async (item) => {
    let params = {
      TableName: table,
      Key: {
        productId: item.productId,
      },
    };
    try {
      await docClient.update(params).promise();
      return { status: true, message: "The product has been deleted." };
    } catch (err) {
      console.log(err);
      return { status: false, message: "The product could not be deleted." };
    }
  };
  

      