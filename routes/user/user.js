// Require express
const express = require('express')
const router = express.Router()

// Brand router
const userController = require('../../controllers/user')

router.post('/register',userController.register)
router.post('/login',userController.login)

module.exports = router