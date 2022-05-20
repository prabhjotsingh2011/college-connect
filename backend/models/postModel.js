const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    uid:{type:String},
    name:{type:String},
    profile:{type:String},
    likes:{type:Array},
    email:{type:String},
    image:{type:Object},
    video:{type:String},
    description:{type:String},
    user:{type:Object},
    timestamp:{type:Object},
    
}, {
    timestamps: true,
    // toJSON: { getters: true }
})

module.exports = mongoose.model('Post', userSchema, 'posts');