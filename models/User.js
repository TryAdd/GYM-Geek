const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    username: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
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


// // assume `User` is your Mongoose model for users
// const user = await User.findById(userId) // find the user in the database

// // ask the user for their current password and new password
// const currentPassword = prompt('Enter your current password:')
// const newPassword = prompt('Enter your new password:')

// // verify the current password using the `verifyPassword` method
// if (user.verifyPassword(currentPassword)) {
//   // update the user's password in the database with the new password
//   user.password = newPassword
//   await user.save()
//   console.log('Password updated successfully!')
// } else {
//   console.log('Incorrect current password. Please try again.')
// }


// Model 
const User = mongoose.model('User', userSchema)

// Export 
module.exports = User;