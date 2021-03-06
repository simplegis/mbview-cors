#!/usr/bin/env node

import {utils,Mbview} from "./hack";

let argv = require('minimist')(process.argv.slice(2));
let open = require('open');
let fs   = require('fs');

let mbtiles = argv._;
let accessToken = argv.MapboxAccessToken ||
    process.env.MAPBOX_ACCESS_TOKEN ||
    process.env.MapboxAccessToken;

if (argv.version || argv.v) {
    console.log(utils.version());
    process.exit(0);
} else if (!mbtiles.length) {
    console.log(utils.usage());
    process.exit(1);
}

try {
    mbtiles.forEach(function (f) { fs.statSync(f).isFile(); });
} catch(e) {
    return console.error(e);
}

argv.basemap = argv.basemap || argv.base || argv.map || 'dark';



let params = {
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

Mbview.serve(params, function (err, config) {
    console.log('Listening on http://'+config.url+':' + config.port);
    if (!argv.n) open('http://'+config.url+':' + config.port);
});
