const express = require('express')
const router = express.Router()

// const exerciseCntrl = require('../controllers/exercises')
const isLoggedIn = require('../lib/isLoggedIn')

const exerciseCntrl = require('../controllers/exercises')

// for delete
router.get("/exercise/delete", exerciseCntrl.exercise_delete_get)



//cardio or weight training
router.get('/wtype/index', isLoggedIn,exerciseCntrl.wtype_index_get)
router.get('/cardio/index',exerciseCntrl.cardio_index_get)
router.get('/bodypart/index', exerciseCntrl.exercise_index_get)

//bodypart exercises
router.get('/plan/index',isLoggedIn,exerciseCntrl.plan_view_get)
router.post('/plan/index',exerciseCntrl.barbell_create_post)

// for edit woplan
router.get('/bodypart/update',exerciseCntrl.exercise_edit_get)
router.post('/bodypart/update',exerciseCntrl.exercise_edit_post)

module.exports = router