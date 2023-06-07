const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const app = express();
const PORT = 4000;
// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use(express.static(__dirname));

// cookie parser middleware
app.use(cookieParser());

//username and password
const myusername = 'Dev'
const mypassword = '123'

// a variable to save a session
var session;

app.get('/',(req,res) => {
    session=req.session;
    if(session.userid){
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    }else
    res.sendFile('views/index.html',{root:__dirname})
});

app.post('/user',(req,res) => {
    if(req.body.username == myusername && req.body.password == mypassword){
        session=req.session;
        session.userid=req.body.username;
        console.log(req.session)
        res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
    }
    else{
        res.send('Invalid username or password');
    }
})

app.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});

app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));


// Code 2

// const express = require('express');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));

// // In-memory session store
// const sessions = {};

// // Middleware to check if the user is authenticated
// const authenticate = (req, res, next) => {
//   const sessionId = req.cookies.sessionId;
//   if (sessionId && sessions[sessionId]) {
//     // User is authenticated
//     req.user = sessions[sessionId];
//     next();
//   } else {
//     // User is not authenticated
//     res.redirect('/login');
//   }
// };

// // Registration route
// app.post('/register', (req, res) => {
//   // Assuming user data is sent via form fields
//   const { username, password } = req.body;
  
//   // Store user data in the session
//   const sessionId = Math.random().toString(36).substring(2);
//   sessions[sessionId] = { username, password };
  
//   // Set the session ID as a cookie
//   res.cookie('sessionId', sessionId);
  
//   res.redirect('/profile');
// });

// // Login route
// app.post('/login', (req, res) => {
//   // Assuming user data is sent via form fields
//   const { username, password } = req.body;
  
//   // Check if the user exists and the password is correct
//   const session = Object.values(sessions).find(
//     (user) => user.username === username && user.password === password
//   );
  
//   if (session) {
//     // Set the session ID as a cookie
//     res.cookie('sessionId', session.sessionId);
//     res.redirect('/profile');
//   } else {
//     res.redirect('/login');
//   }
// });

// // Logout route
// app.get('/logout', (req, res) => {
//   // Clear the session data and remove the session ID cookie
//   const sessionId = req.cookies.sessionId;
//   delete sessions[sessionId];
//   res.clearCookie('sessionId');
//   res.redirect('/login');
// });

// // Profile route (protected)
// app.get('/profile', authenticate, (req, res) => {
//   res.send(`Welcome, ${req.user.username}! This is your profile.`);
// });

// // Login page route
// app.get('/login', (req, res) => {
//   res.send(`
//     <h1>Login</h1>
//     <form action="/login" method="POST">
//       <input type="text" name="username" placeholder="Username" required /><br />
//       <input type="password" name="password" placeholder="Password" required /><br />
//       <button type="submit">Login</button>
//     </form>
//   `);
// });

// // Registration page route
// app.get('/register', (req, res) => {
//   res.send(`
//     <h1>Registration</h1>
//     <form action="/register" method="POST">
//       <input type="text" name="username" placeholder="Username" required /><br />
//       <input type="password" name="password" placeholder="Password" required /><br />
//       <button type="submit">Register</button>
//     </form>
//   `);
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });