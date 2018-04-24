'use strict'

var express = require('express');
var bodyParse = require('body-parser');

var app = express();

//cargar rutas
var user_routes = require('./routes/user');

app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());

//configurar cabeceras http

//rutas base
app.use('/api', user_routes);

module.exports = app;