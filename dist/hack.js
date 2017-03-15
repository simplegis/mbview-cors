"use strict";
var fs = require('fs');
var express = require('express');
var app = express();
var cors = require('cors');
var Mbview = require("../node_modules/mbview/mbview");
exports.Mbview = Mbview;
var utils = require("../node_modules/mbview/utils");
exports.utils = utils;
app.use(cors());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
utils.usage = function () {
    var u = [];
    u.push('');
    u.push('usage: mbview-node [options] [files]');
    u.push('');
    u.push(' --port sets port to use (default: 3000)');
    u.push(' --quiet or -q supress all logging except the address to visit');
    u.push(' - n don\'t automatically open the browser on start');
    u.push(' --basemap, --base or --map sets the basemap style (default: dark)');
    u.push(' --version returns module version');
    u.push(' --help prints this message');
    //
    u.push(' --url pbf load url (default: "127.0.0.1")');
    u.push(' --prefix add url prefix');
    u.push('');
    return u.join('\n');
};
Mbview.listen = function (config, onListen) {
    app.get('/', function (req, res) {
        res.render('map', config);
    });
    app.get('/' + config.prefix + '/:source/:z/:x/:y.pbf', function (req, res) {
        var p = req.params;
        var tiles = config.sources[p.source].tiles;
        tiles.getTile(p.z, p.x, p.y, function (err, tile, headers) {
            if (err) {
                res.end();
            }
            else {
                res.writeHead(200, headers);
                res.end(tile);
            }
        });
    });
    config.server = app.listen(config.port, function () {
        onListen(null, config);
    });
};
