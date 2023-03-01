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
    // console.log("done")
//HTTP GET - Load Article form
// API => MODULE_FUNCTIONALITY_HTTP METHOD BELOW

    Exercise.find()
    .then((exercises) => {
        // console.log(exercises)
        res.render('plan/index', {exercises})
    })
    .catch(err => {  //you don't need to close this bracket because only one error
        console.log(err)
    })  
}

exports.exercise_delete_get =(req, res)=>{
    Exercise.findByIdAndDelete(req.query.id)
    .then(()=>{
        res.redirect('/plan/index')
    })
    .catch((err)=>{
        console.log(err)
    })

}
    

// HTTP POST - To Post the data 
exports.barbell_create_post = (req,res) => {
    // console.log(req.body)
    let barbell = new Exercise(req.body) 

    // Save Exercise in the database
    barbell.save() //this is a js promise
    .then(() => {
        // console.log("saved")
        res.redirect("/plan/index") //redirects to index page where we list exercise

    }) //then is only executed if exercise.save/js promise executed
    .catch((err) => {
        console.log(err) 
        // res.send('Please try again later!!!')
    }) //if not, then whatever happens is caught by catch
}
