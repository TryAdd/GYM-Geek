const User = require('../models/User')

exports.profile_get = (req, res) => {
    // console.log('THE USER!!!!!', req.session.passport.user)
    User.findById(req.session.passport.user)
    .then(profiledata => {
        // let profiledata = req.body
        console.log(profiledata)
        res.render("profile/index", {profiledata})
        
    })
    .catch(err=>{
        console.log(err);
    })
} 

