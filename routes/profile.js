const express  = require('express')
const router = express.Router()

const profileCntrl = require("../controllers/profile")

// Method Override
let methodOverride = require('method-override')
router.use(methodOverride('_method'))

//edit the user deets
router.get('/profile/edit', profileCntrl.profile_edit_get)
router.put('/profile/edit', profileCntrl.profile_edit_post)


router.get('/profile/index', profileCntrl.profile_get)



module.exports = router