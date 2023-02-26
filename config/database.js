const mongoose = require('mongoose')
//use the mongoose object to use a function called connect
//that connects us to the provided database link
// console.log(process.env.DATABASE_URL)
mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE_URL)




// upon connection: 
//console log to show that we are successfully connected
mongoose.connection.on('connected', ()=>{
    console.log('connected to database!')
})