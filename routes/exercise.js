const express = require('express')
const router = express.Router()
// const exerciseCntrl = require('../controllers/exercises')
const isLoggedIn = require('../lib/isLoggedIn')

const exerciseCntrl = require('../controllers/exercises')
router.get('/exercise/index', isLoggedIn,exerciseCntrl.exercise_index_get)





module.exports=router