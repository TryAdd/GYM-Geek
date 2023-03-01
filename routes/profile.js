const express  = require('express')
const router = express.Router()

const profileCntrl = require("../controllers/profile")

router.get('/profile/index', profileCntrl.profile_get)

module.exports = router