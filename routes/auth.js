const express = require('express')
const router = express.Router()

const authCntrl = require('../controllers/auth')

router.get('auth/signup', authCntrl.auth_signup_get)
router.post('auth/signup', authCntrl.auth_signup_post)


module.exports = router

