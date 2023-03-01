const express  = require('express')
const router = express.Router()

const profileCntrl = require("../controllers/profile")
const isLoggedIn = require('../lib/isLoggedIn')

// Method Override
let methodOverride = require('method-override')
router.use(methodOverride('_method'))

//edit the user deets
router.get('/profile/edit', profileCntrl.profile_edit_get)
router.put('/profile/edit', profileCntrl.profile_edit_post)

router.get('/profile/index', isLoggedIn,profileCntrl.profile_get)



//password:
router.get('/profile/changepass', profileCntrl.profile_changpass_get)
router.post('/profile/changepass', profileCntrl.profile_changepass_post)

module.exports = router