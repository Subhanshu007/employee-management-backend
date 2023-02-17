const  { adminService } = require('../services');

async function getSignIn(req, res) {
    try {
        const signInDetails = await adminService.getSignIn(req.body);
        res.status(200).json(signInDetails);
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = {
    getSignIn
}