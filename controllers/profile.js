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


// Edit page
// GET
exports.profile_edit_get = (req, res) => {
    User.findByIdAndUpdate(req.query.id)
    .then((profile) =>{
        res.render("Profile/edit", {profile})
    })
    .catch(err=>{
        console.log(err);
    })
}

// POST
exports.profile_edit_post = (req, res) => {
    User.findByIdAndUpdate(req.query.id,
        {
        username: req.body.username,
        weight: req.body.weight,
        height: req.body.height
    })
    .then(() =>{
        res.redirect("/Profile/index")
    })
    .catch(err=>{
        console.log(err);
    })
}

