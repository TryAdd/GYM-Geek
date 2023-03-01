// const Exercise = require('../models/Exercise')

const Exercise = require("../models/Exercise")

// exports.exercise_creat_get = (req, res)=>{
//     res.render('/exercise')
// }

exports.exercise_index_get = (req, res)=>{
  res.render('bodypart/index')

}

exports.cardio_index_get = (req, res)=>{
  res.render('cardio/index')

}
exports.wtype_index_get = (req, res)=>{
  res.render('wtype/index')

}

//arms

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

//back

exports.exercise_bentover_get = (req, res)=>{
    res.render('exercise/bentover')
  
}

exports.exercise_latpulldown_get = (req, res)=>{
    res.render('exercise/latpulldown')
  
}

exports.exercise_deadlift_get = (req, res)=>{
    res.render('exercise/deadlift')
  
}

exports.exercise_tbarrow_get = (req, res)=>{
    res.render('exercise/tbarrow')
  
}

//chest

exports.exercise_dips_get = (req, res)=>{
    res.render('exercise/dips')
  
}

exports.exercise_benchpress_get = (req, res)=>{
    res.render('exercise/benchpress')
  
}

exports.exercise_cablechestpress_get = (req, res)=>{
    res.render('exercise/cablechestpress')
  
}

exports.exercise_cableflies_get = (req, res)=>{
    res.render('exercise/cableflies')
  
}

//core

exports.exercise_kettlebell_get = (req, res)=>{
    res.render('exercise/kettlebell')
  
}

exports.exercise_crunches_get = (req, res)=>{
    res.render('exercise/crunches')
  
}

exports.exercise_situp_get = (req, res)=>{
    res.render('exercise/situp')
  
}

exports.exercise_plank_get = (req, res)=>{
    res.render('exercise/plank')
  
}

//legs

exports.exercise_squat_get = (req, res)=>{
    res.render('exercise/squat')
  
}


exports.exercise_legpress_get = (req, res)=>{
    res.render('exercise/legpress')
  
}

exports.exercise_hamstring_get = (req, res)=>{
    res.render('exercise/hamstring')
  
}

//wholebody

exports.exercise_burpees_get = (req, res)=>{
    res.render('exercise/burpees')
  
}

exports.exercise_romanian_get = (req, res)=>{
    res.render('exercise/romanian')
  
}







// exports.plan_view_get = (req, res)=>{
//     Exercise.findById(1) 
//     .then(exercises =>{
//         // let formdata = req.body;
//         let name = req.body.exercise  
//         console.log(name)
//          res.render('plan/index', {exercises, name} ) 
//     })
//     .catch(err=>{
//         console.log(err)
//     })
   
// }

exports.plan_view_get = (req, res)=>{
    console.log("done")
//HTTP GET - Load Article form
// API => MODULE_FUNCTIONALITY_HTTP METHOD BELOW

    Exercise.find()
    .then((exercises) => {
        console.log(exercises)
        res.render('plan/index', {exercises})
    })
    .catch(err => {  //you don't need to close this bracket because only one error
        console.log(err)
    })  
}

exports.exercise_delete_get =(req, res)=>{
    Exercise.findByIdAndDelete(req.query.id)
}
    

// HTTP POST - To Post the data 
exports.barbell_create_post = (req,res) => {
    console.log(req.body)
    let barbell = new Exercise(req.body) 

    // Save Exercise in the database
    barbell.save() //this is a js promise
    .then(() => {
        console.log("saved")
        res.redirect("/plan/index") //redirects to index page where we list exercise

    }) //then is only executed if exercise.save/js promise executed
    .catch((err) => {
        console.log(err) 
        // res.send('Please try again later!!!')
    }) //if not, then whatever happens is caught by catch
}

// // HTTP POST - To Post the data 
// exports.barbell_create_post = (req,res) => {
//     console.log(req.body)
//     let barbell = new Exercise(req.body) 

//     // Save Exercise in the database
//     barbell.save() //this is a js promise
//     .then(() => {
//         res.redirect("/plan/index") //redirects to index page where we list exercise

//     }) //then is only executed if exercise.save/js promise executed
//     .catch((err) => {
//         console.log(err) 
//         res.send('Please try again later!!!')
//     }) //if not, then whatever happens is caught by catch
// }

// // HTTP POST - To Post the data 
// exports.barbell_create_post = (req,res) => {
//     console.log(req.body)
//     let barbell = new Exercise(req.body) 

//     // Save Exercise in the database
//     barbell.save() //this is a js promise
//     .then(() => {
//         res.redirect("/plan/index") //redirects to index page where we list exercise

//     }) //then is only executed if exercise.save/js promise executed
//     .catch((err) => {
//         console.log(err) 
//         res.send('Please try again later!!!')
//     }) //if not, then whatever happens is caught by catch
// }

// // HTTP POST - To Post the data 
// exports.barbell_create_post = (req,res) => {
//     console.log(req.body)
//     let barbell = new Exercise(req.body) 

//     // Save Exercise in the database
//     barbell.save() //this is a js promise
//     .then(() => {
//         res.redirect("/plan/index") //redirects to index page where we list exercise

//     }) //then is only executed if exercise.save/js promise executed
//     .catch((err) => {
//         console.log(err) 
//         res.send('Please try again later!!!')
//     }) //if not, then whatever happens is caught by catch
// }