const mongoose = require('mongoose');
const routes = require('./src/routes/routes');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/muber_app', {useNewUrlParser:true});


app.use(bodyParser.json());
routes(app);

app.use((error, req, res, next)=>{
    res.status(422).send({status:"failed", errors: error.message});
});

module.exports = app;


