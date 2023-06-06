
const express = require('express')
const app = express()

// Routing
let data = require('./routing.js')
app.use('/data', data)

// Middleware
const logger = (req, res, next) => {
    console.log('This is middleware');
    next(); // Call next() to pass control to the next middleware function
};
app.use(logger);

app.use((req,res,next) => {
    console.log('This is middleware too')
    next()
})

//
app.get('/ab*cd',(req,res) =>{
    res.send('Hello Devesh ')
})

app.get(/.*fly$/, (req, res) => {
    res.send('/.*fly$/')
  })

app.get(/a/, (req, res) => {
    res.send('/a/')
}) /// Every thing which contains A will get printed


// Route handler
app.get('/',(req,res) =>{
    res.send('Hello')
})


// Starting the Server
app.listen(5000,()=>{
    console.log('App listening at port 5000')
})
