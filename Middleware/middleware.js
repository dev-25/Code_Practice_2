
const express = require('express');
const app = express()

let myMiddleware = (req, res, next) => {
    let a = 1;
    if (a > 10) {
      // Throw an error
      const error = new Error('Some error message');
      error.statusCode = 500; // You can set a custom status code if needed
      return next(error);
    }
  
    next();
}
  
app.use(myMiddleware);
  
app.listen(3000,()=>{
    console.log('Server Running');
})