const User = require('../models/User')
const passport = require('../lib/passportConfig')
const bcrypt = require('bcrypt')


exports.auth_signup_get = (req, res)=>{
    // console.log('here')
    res.render('auth/signup')
}


exports.auth_signup_post = (req,res)=>{
    let user = new User(req.body)
    // console.log('hi')
    let hash = bcrypt.hashSync(req.body.password, 10)
    // console.log(hash)

    user.password = hash


    user.save()
    .then(() =>{
        res.redirect('/auth/signin')
    })
    .catch(err =>{
        console.log(err)
        res.send('pls check b4 u submit :| ')
    })
}

exports.auth_signin_get = (req, res)=>{
    res.render('auth/signin')
}


exports.auth_signin_post = passport.authenticate('local',{
    successRedirect:'/exercise/index',
    failureRedirect:'/auth/signin'
})

exports.auth_signout_get = (req, res)=>{
    req.logout(function(err){
        if(err){
            return next(err)
        }
        res.redirect('/auth/signin')
    })
} 

// const User = require('../models/User')
// const bcrypt = require('bcrypt')

// exports.auth_signup_get = (req, res) => {
//     res.render('auth/signup')
// }
// exports.auth_signin_get = (req, res) => {
//     res.render('auth/signin')
// }
// exports.auth_signup_post = (req, res) => {
//     let user = new User(req.body)
//     let hash = bcrypt.hashSync(req.body.password, 10)
//     // console.log(hash)
//     user.password = hash
//     user.save()
//     .then(()=>{
//         res.redirect('/auth/signin')
//     })
//     .catch(err=>{
//         console.log(err)
//         res.send('Something went wrong, Please try again later!')
//     })
// }
