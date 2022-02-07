// app.js

// Create Express app
require("dotenv").config();
const express = requier('express');
const app = express();
const apiEndpoint = require('./routes/api');

// jwt ve error handler
const jwt = require('./helpers/jwt')
const errorHandler = require('./helpers/error-handler')

// Initializing routes
app.use(express.json())
app.use(jwt())
app.use('/api',endpoint)
app.use(errorHandler)


app.listen(3000, () =>{
    console.log('service is running')
})

