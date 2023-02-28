const Exercise = require("../models/Exercise")


exports.plan_view_get = (req, res)=>{
    res.render('plan/index')
}