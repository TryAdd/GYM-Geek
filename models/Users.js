const mongoose = require("mongoose")
// const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    userName: {type:String, required:true},
    email: {type:String, required:true},
    weight: {type:Number, required:true},
    height: {type:Number, required:true}
},
{
    timestamps: true // means createdAt and updatedAt
})

// Model 
const User = mongoose.model('User', userSchema)

// Export 
module.exports = User;