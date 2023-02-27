// const Exercise = require('../models/Exercise')

const Exercise = require("../models/Exercise")

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

exports.plan_view_get = (req, res)=>{
    Exercise.find()
    .then(exercises =>{
        let formdata = req.body;
         res.render('plan/index', {formdata} ) 
    })
    .catch(err=>{
        console.log(err)
    })
   
}