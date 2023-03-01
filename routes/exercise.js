const express = require('express')
const router = express.Router()

// const exerciseCntrl = require('../controllers/exercises')
const isLoggedIn = require('../lib/isLoggedIn')

const exerciseCntrl = require('../controllers/exercises')

router.get('/bodypart/index', exerciseCntrl.exercise_index_get)
router.get('/wtype/index', isLoggedIn,exerciseCntrl.wtype_index_get)

// for delete
router.get("/exercise/delete", exerciseCntrl.exercise_delete_get)

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

router.get('/exercise/dips',exerciseCntrl.exercise_dips_get)
router.get('/exercise/benchpress',exerciseCntrl.exercise_benchpress_get)
router.get('/exercise/cablechestpress',exerciseCntrl.exercise_cablechestpress_get)
router.get('/exercise/cableflies',exerciseCntrl.exercise_cableflies_get)

//core routes

router.get('/exercise/kettlebell',exerciseCntrl.exercise_kettlebell_get)
router.get('/exercise/crunches',exerciseCntrl.exercise_crunches_get)
router.get('/exercise/situp',exerciseCntrl.exercise_situp_get)
router.get('/exercise/plank',exerciseCntrl.exercise_plank_get)

//legs routes

router.get('/exercise/squat',exerciseCntrl.exercise_squat_get)
// router.get('/exercise/deadlift',exerciseCntrl.exercise_deadlift_get)
router.get('/exercise/legpress',exerciseCntrl.exercise_legpress_get)
router.get('/exercise/hamstring',exerciseCntrl.exercise_hamstring_get)

//wholebody routes

router.get('/exercise/burpees',exerciseCntrl.exercise_burpees_get)
router.get('/exercise/romanian',exerciseCntrl.exercise_romanian_get)



// router.post('/plan/index',exerciseCntrl.plan_view_post)
router.get('/plan/index',isLoggedIn,exerciseCntrl.plan_view_get)

router.get('/cardio/index',exerciseCntrl.cardio_index_get)
// router.post('/plan/index',exerciseCntrl.plan_view_get)

router.post('/plan/index',exerciseCntrl.barbell_create_post)



module.exports = router