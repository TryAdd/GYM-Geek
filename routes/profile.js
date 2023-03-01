const express  = require('express')
const router = express.Router()

const profileCntrl = require("../controllers/profile")
const isLoggedIn = require('../lib/isLoggedIn')

router.get('/profile/index', isLoggedIn,profileCntrl.profile_get)

module.exports = router