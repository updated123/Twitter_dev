'use strict';
const app = require('./src/index');
const Serverless=require('serverless');
module.exports.hello =Serverless(app);
