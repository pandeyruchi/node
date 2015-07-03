/**
 * Express configuration
 */

'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var config = require('./environment');

module.exports = function (app) {
    var env = app.get('env');
    app.set('views', config.root + '/server/views');
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    if ('production' === env) {
        app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
        app.use(express.static(path.join(config.root, 'public')));
        app.set('appPath', config.root + '/public');
    }

    if ('development' === env || 'test' === env) {
        app.use(express.static(path.join(config.root, '.tmp')));
        app.use(express.static(path.join(config.root, 'client')));
        app.set('appPath', 'client');

    }
};