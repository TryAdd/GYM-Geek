// const Exercise = require('../models/Exercise')

// exports.exercise_creat_get = (req, res)=>{
//     res.render('/exercise')
// }

exports.exercise_index_get = (req, res)=>{
  res.render('exercise')

}

exports.exercise_barbell_get = (req, res)=>{
    res.render('exercise/barbell')
  
}

exports.exercise_hammercurl_get = (req, res)=>{
    res.render('exercise/hammercurl')
  
}

exports.exercise_benchdip_get = (req, res)=>{
    res.render('exercise/benchdip')
  
}

exports.exercise_pushdown_get = (req, res)=>{
    res.render('exercise/pushdown')
  
}

exports.auth_signup_get = (req, res)=>{
    res.render('plan/index')
}