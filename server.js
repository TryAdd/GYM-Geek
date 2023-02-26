const express  = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
require('./config/database')


const port = 4000

const app = express()

// initilize express layouts 
const expressLayouts = require('express-ejs-layouts')

// look into views folder for a file with name layouts.ejs
app.use(expressLayouts)

//import routes 
const indexRoute = require('./routes/index')
// const authRoute = require('./routes/auth')
// const bodypartRoute = require('./routes/bodypart')
// const exerciseRoute = require('./routes/exercise')
// const woplanRoute = require('./routes/woplan')

//mount routes 
app.use('/', indexRoute)
// app.use('/',authRoute)
// app.use('/', bodypartRoute)
// app.use('/', exerciseRoute)
// app.use('/', woplanRoute)





app.listen(port, ()=>{
    console.log(`port ${port}`)
})


// mongoose.set('strictQuery', false)

app.set('view engine','ejs')

//create mongo db connection to atlas
// mongoose.connect(process.env.SECRET,
//             {
//                 useNewUrlParser : true,  //this creates a new parser
//                 useUnifiedTopology : true //this find the server
//             },
//             () => {
//                 console.log('MongoDB Connected')
//             }
// )

