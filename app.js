var express = require('express');
const nodemailer = require('nodemailer');
//const SMTP_CONFIG =require('./config/smtp');
var app = express();


app.set('view engine','ejs');
app.set ('views','./views');


var rotaHome = require('./routes/home');
rotaHome(app);
var rotaEmail = require('./routes/enviar');
rotaEmail(app);

app.listen(21004, function(){
    console.log("servidor rodando");
});