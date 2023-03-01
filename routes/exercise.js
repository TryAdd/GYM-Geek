const express = require('express')
const router = express.Router()

// const exerciseCntrl = require('../controllers/exercises')
const isLoggedIn = require('../lib/isLoggedIn')

const exerciseCntrl = require('../controllers/exercises')

router.get('/bodypart/index', exerciseCntrl.exercise_index_get)
router.get('/wtype/index', isLoggedIn,exerciseCntrl.wtype_index_get)

//arms routes

router.get('/exercise/barbell',exerciseCntrl.exercise_barbell_get)
router.get('/exercise/hammercurl',exerciseCntrl.exercise_hammercurl_get)
router.get('/exercise/benchdip',exerciseCntrl.exercise_benchdip_get)
router.get('/exercise/pushdown',exerciseCntrl.exercise_pushdown_get)

//back routes

router.get('/exercise/bentover',exerciseCntrl.exercise_bentover_get)
router.get('/exercise/latpulldown',exerciseCntrl.exercise_latpulldown_get)
router.get('/exercise/deadlift',exerciseCntrl.exercise_deadlift_get)
router.get('/exercise/tbarrow',exerciseCntrl.exercise_tbarrow_get)

//chest routes

// router.get('/exercise/bentover',exerciseCntrl.exercise_bentover_get)
// router.get('/exercise/latpulldown',exerciseCntrl.exercise_latpulldown_get)
// router.get('/exercise/deadlift',exerciseCntrl.exercise_deadlift_get)
// router.get('/exercise/tbarrow',exerciseCntrl.exercise_tbarrow_get)







// router.post('/plan/index',exerciseCntrl.plan_view_post)
router.get('/plan/index',exerciseCntrl.plan_view_get)

router.get('/cardio/index',exerciseCntrl.cardio_index_get)
// router.post('/plan/index',exerciseCntrl.plan_view_get)

router.post('/plan/index',exerciseCntrl.barbell_create_post)



module.exports=router