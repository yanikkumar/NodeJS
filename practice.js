var express = require('express');

var app = express();
/*  
// intro to app.get and json

app.get('/', function (req, res, next) {    // req = request | res = reponse
    // console.log("Home Page");
    res.json("Home Page");
});

app.get('/about', function (req, res, next) {
    res.json("About Us");
});

app.get('/:placeholder', function (req, res, next) {  // :placeholder is a placeholder where you type in the url same it renders
    res.json(req.params.placeholder);
});
*/


// middleware - which act as to pass data or not act like a police in between two countries borders

/*
// app.use method for middleware
app.use(function (req, res, next) {       
    if (0 < 1) {
        next();     //next is a callback if not mentioned next it will loop forever
    } else {
        res.json("you cannot cross the border!");
    }
});

app.get('/india', function (req, res, next) {
    res.json("We have arrived! yeahh!!");
});
*/

//another method for middleware
function enteringBorder(req, res, next) {
    if (req.params.name === "ok") {
        next();
    } else {
        res.json("No! You're Not");
    }
}

app.get('/india/:name', enteringBorder, function (req, res, next) {
    res.json("We have arrived! yeahh!!");
});

app.listen(5000, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Running on Port 5000");
    }
});
