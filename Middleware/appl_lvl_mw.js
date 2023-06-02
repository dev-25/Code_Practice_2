
// Application Level Middleware

const express = require('express');
const app = express()

// Middleware Function
let logOriginalUrl = (req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    next()
}
  
let logMethod = (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
}

const logStuff = [logOriginalUrl, logMethod]

app.get('/user/:id', logStuff, (req, res, next) => {
    res.send('User Info')
    next()
})

app.get('/',(req,res) => {
    res.send('Middleware over')
})

app.listen(3000,() => console.log('App listening on 3000'))