const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    uid:{type:String},
    image:{type:String},
    tags:{type:Array},
    projectName:{type:String},
    description:{type:String},
    owner:{type:String},
}, {
    timestamps: true,
    // toJSON: { getters: true }
})

module.exports = mongoose.model('Project', userSchema, 'projects');
