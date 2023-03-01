const express = require('express')
const router = express.Router()

const bodypartCntrl = require('../controllers/bodyparts')
router.get('/bodypart/arms', bodypartCntrl.bodypart_arms_get)
router.get('/bodypart/legs', bodypartCntrl.bodypart_legs_get)
router.get('/bodypart/chest', bodypartCntrl.bodypart_chest_get)
router.get('/bodypart/core', bodypartCntrl.bodypart_core_get)
router.get('/bodypart/back', bodypartCntrl.bodypart_back_get)
router.get('/bodypart/wholebody', bodypartCntrl.bodypart_wholebody_get)

module.exports=router