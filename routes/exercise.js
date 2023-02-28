const express = require('express')
const router = express.Router()
// const exerciseCntrl = require('../controllers/exercises')
const isLoggedIn = require('../lib/isLoggedIn')

const exerciseCntrl = require('../controllers/exercises')
router.get('/exercise/index', exerciseCntrl.exercise_index_get)
router.get('/wtype/index', isLoggedIn,exerciseCntrl.wtype_index_get)
router.get('/exercise/barbell',exerciseCntrl.exercise_barbell_get)
router.get('/exercise/hammercurl',exerciseCntrl.exercise_hammercurl_get)
router.get('/exercise/benchdip',exerciseCntrl.exercise_benchdip_get)
router.get('/exercise/pushdown',exerciseCntrl.exercise_pushdown_get)
router.post('/plan/index',isLoggedIn,exerciseCntrl.plan_view_get)
router.get('/cardio/index',exerciseCntrl.cardio_index_get)
// router.post('/plan/index',exerciseCntrl.plan_view_get)





module.exports=router