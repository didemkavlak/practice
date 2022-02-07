// jwt.js
const expressJwt = require('express-jwt')
const secret = "329b93466fc17f6ec8f6068ddd4fd3e4"

// jwt function
function jwt(){
    return expressJwt({secret,algorithms:['HS256']}).unless({
        path : [
            // public routers that don't require authentication
            '/api/user/login' 
        ]
    })
}

module.exports = jwt