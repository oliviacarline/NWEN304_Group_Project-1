var express = require('express');
var router = express.Router();
var database = 'postgres://songshan:Chips@depot:5432/songshan_jdbc';
var pg = require('pg').native;
