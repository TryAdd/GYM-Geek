// const Exercise = require('../models/Exercise')

const Exercise = require("../models/Exercise")

// exports.exercise_creat_get = (req, res)=>{
//     res.render('/exercise')
// }

exports.exercise_index_get = (req, res)=>{
  res.render('exercise')

}

exports.cardio_index_get = (req, res)=>{
  res.render('cardio/index')

}
exports.wtype_index_get = (req, res)=>{
  res.render('wtype/index')

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

exports.plan_view_post = (req, res)=>{
    Exercise.find()
    .then(exercises =>{
        let formdata = req.body;
        let name = req.body.exercise  
        console.log(name)
         res.render('plan/index', {formdata,  name} ) 
    })
    .catch(err=>{
        console.log(err)
    })
   
}

exports.plan_view_get = (req, res)=>{
    

   
}