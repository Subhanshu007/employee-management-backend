const mongoose = require('mongoose');

const { Schema } = mongoose;

const adminSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
    }
);

const admin = mongoose.model('admins', adminSchema);

module.exports = admin;