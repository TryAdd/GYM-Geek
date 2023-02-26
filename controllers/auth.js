const User = require('../models/Users')

exports.auth_signup_get = (req, res)=>{
    console.log('here')
    //res.render('auth/signup')
}


exports.auth_signup_post = (req,res)=>{
    let user = new User(req.body)

    let hash = bcrypt.hashSync(req.body.password, 10)
    console.log(hash)

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