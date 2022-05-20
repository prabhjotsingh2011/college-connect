const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    uid:{type:String},
    image:{type:String},
    email:{type:String},
    name:{type:String},
    phoneNumber:{type:String},
    
}, {
    timestamps: true,
    // toJSON: { getters: true }
})

module.exports = mongoose.model('User', userSchema, 'users');