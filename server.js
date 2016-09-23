/**
 * Created by MaC on 2016-09-23.
 */

// link to connect package
var connect = require('connect');

//link thr url module to parse url parameters
var url = require('url');

//installation a new connect object
var app = new connect();

//creating function
var lab3 = function (req, res, next) {
    //get the method x value and y value from the url
    var qs = url.parse(req.url, true).query;
    var method = qs.method;
    var x = qs.x;
    var y = qs.y;

    // creating loop which are selecting which method will perform
    //and print the output after method calculation
    if(method == 'add'){
        var add = parseInt(x) + parseInt(y);
        res.end( x + '+' + y + '=' + add);
    }

    else if(method == 'subtract'){
        var subtract = parseInt(x) - parseInt(y);
        res.end( x + '-' + y + '=' + subtract);
    }

    else if(method == 'multiply'){
        var multiply = parseInt(x) * parseInt(y);
        res.end( x + '*' + y + '=' + multiply);
    }

    else if(method == 'divide'){
        var divide = parseInt(x) / parseInt(y);
        res.end( x + '/' + y + '=' + divide);
    }

    else{
        res.end('Method value is incorrect ' +
        'please check and try again...');
    };


};

// execute lab3 function when requests come in
app.use('/lab3', lab3);

//starting server on port 3000
app.listen(3000);