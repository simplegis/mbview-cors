## mbview-cors

Hack [mbview](https://github.com/mapbox/mbview)



###  Install

```
npm install ipv4sec/mbview-cors -g
```

###  Develop

```
git clone https://github.com/ipv4sec/mbview-cors.git
npm install
npm link
```

### Use

```
usage: mbview-cors [options] [files]

 --port sets port to use (default: 3000)
 --quiet or -q supress all logging except the address to visit
 - n don't automatically open the browser on start
 --basemap, --base or --map sets the basemap style (default: dark)
 --version returns module version
 --help prints this message
 --url pbf load url (default: "127.0.0.1")
 --prefix add url prefix
```

### Example

```
mbview-cors q.mbtiles --port 8080 -n --basemap "dark" --url "localhost" --prefix "api"
```

Example URL:
```
http://localhost:8080/api/q.mbtiles/{z}/{x}/{y}.pbf
```

Default URL:
```
http://127.0.0.1:3000//{dataSource}/{z}/{x}/{y}.pbf
```




### LICENSE

[GNU GENERAL PUBLIC LICENSE](./LICENSE)