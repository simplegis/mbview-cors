## mbview-node

Hack [Mbview](https://github.com/mapbox/mbview)


###  Install

```
git clone https://github.com/ipv4sec/mbview.git
npm install
tsc **/*.ts
npm link
```

### Use

```
usage: mbview-node [options] [files]

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
mbview-node q.mbtiles --port 8080 -n --basemap "dark" --url "localhost" --prefix "api"
```



### LICENSE

[GNU GENERAL PUBLIC LICENSE](./LICENSE)