const { urlencoded } = require('express')
const express = require('express')
const router = express.Router()

const authCntrl = require('../controllers/auth')

router.use(express.urlencoded({extended: true}))


// for signup
router.get('/auth/signup', authCntrl.auth_signup_get)
// router.get('auth/signup', authCntrl.auth_signup_get)
router.post('/auth/signup', authCntrl.auth_signup_post)

// for sign in
router.get('/auth/signin', authCntrl.auth_signin_get)
router.post('/auth/signin',authCntrl.auth_signin_post)

module.exports = router

