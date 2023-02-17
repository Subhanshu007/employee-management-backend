const httpStatus = require('http-status');
const { admin } = require('../models');
const ApiError = require('../utils/ApiError');
const jwt = require('jsonwebtoken');

async function getSignIn(body) {
    const adminDetails = await admin.findOne();
    if(adminDetails){
        if(adminDetails.name === body.name && adminDetails.password === body.password) {
            //Create token
            
            const token = jwt.sign(
                {
                    name: body.name,
                    password: body.password
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h"
                }
            )
            //save admin token
            return {token, "expiresIn": "2h"};
        } else {
            const err = new ApiError(httpStatus.UNAUTHORIZED, 'Invalid Credentials');
            throw err;
        }
    }
}

async function isAlreadyExist(){
    return admin.findOne();
}

async function signIn(){
    const adminDetails = await isAlreadyExist();
    if(adminDetails){
        console.log("isAlready Exist");
        return;
    }
    const user = {
        name: "admin",
        password: "admin"
    }
    console.log("🚀 ~ file: admin.service.js:36 ~ signIn ~ user created");
    return admin.create(user);
}

module.exports = {
    getSignIn,
    signIn
}