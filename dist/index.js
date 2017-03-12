#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hack_1 = require("./hack");
var argv = require('minimist')(process.argv.slice(2));
var open = require('open');
var fs = require('fs');
var mbtiles = argv._;
var accessToken = argv.MapboxAccessToken ||
    process.env.MAPBOX_ACCESS_TOKEN ||
    process.env.MapboxAccessToken;
if (argv.version || argv.v) {
    console.log(hack_1.utils.version());
    process.exit(0);
}
else if (!mbtiles.length) {
    console.log(hack_1.utils.usage());
    process.exit(1);
}
try {
    mbtiles.forEach(function (f) { fs.statSync(f).isFile(); });
}
catch (e) {
    return console.error(e);
}
argv.basemap = argv.basemap || argv.base || argv.map || 'dark';
var params = {
    center: argv.center || [-122.42, 37.75],
    mbtiles: mbtiles,
    port: argv.port || 3000,
    zoom: 12,
    quiet: argv.q || argv.quiet,
    basemap: argv.basemap,
    accessToken: accessToken || "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejh2N21nMzAxMmQzMnA5emRyN2lucW0ifQ.jSE-g2vsn48Ry928pqylcg",
    prefix: argv.prefix || "",
    url: argv.url || "127.0.0.1"
};
hack_1.Mbview.serve(params, function (err, config) {
    console.log('Listening on http://' + config.url + ':' + config.port);
    if (!argv.n)
        open('http://' + config.url + ':' + config.port);
});
