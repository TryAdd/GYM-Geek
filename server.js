const express = require('express')
const mongoose = require('mongoose')
const session  = require('express-session')
const passport = require('./lib/passportConfig')
require('dotenv').config()
require('./config/database')


const port = 4001

const app = express()

// initilize express layouts 
const expressLayouts = require('express-ejs-layouts')

// look into views folder for a file with name layouts.ejs
app.use(expressLayouts)

//import routes 
const indexRoute = require('./routes/index')
const authRoute = require('./routes/auth')
const exerciseRoute = require('./routes/exercise')
// const bodypartRoute = require('./routes/bodypart')
// const woplanRoute = require('./routes/woplan')


app.use(session({
    secret: 'supersecuresecret',
    saveUninitialized: true,
    resave: false,
    cookie:{maxAge: 604800}
}))
app.use(passport.initialize())
app.use(passport.session())

//mount routes 
app.use('/', indexRoute)
app.use('/', authRoute)
app.use('/', exerciseRoute)
// app.use('/', bodypartRoute)
// app.use('/', woplanRoute)


// css link
app.use(express.static(__dirname + "/public"));


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

