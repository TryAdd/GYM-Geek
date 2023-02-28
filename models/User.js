const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    username: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    // we need here a age 

    weight: {type:Number, required:true},
    height: {type:Number, required:true},
},
{
    timestamps: true // means createdAt and updatedAt
})

userSchema.methods.verifyPassword = function(password){
    // console.log('Verifying', password)
    // console.log(this.password)
    return bcrypt.compareSync(password, this.password)
}

// Model 
const User = mongoose.model('User', userSchema)

// Export 
module.exports = User;