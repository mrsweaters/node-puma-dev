# Node Puma Dev

Quick way to add a pow proxy file


## Install
```
npm install --save-dev node-pow
```


## Usage
The follwing examples result in: `cat ~/.puma-dev/site` outputs `3000`.

Pass name and port as arguments
```javascript
require('node-puma-dev')('site', 3000);
```

Or pass an express app with `title` and `port`.
```javascript
var app = require('express')();
app.set('title', 'site');
app.set('port', 3000);
if ('development' === app.get('env')) require('node-puma-dev')(app);
```


### Tests
Warning: Tests currenly run using the actual filesystem.
```
mocha
```


## Todo
- change tests to use a fake filesystem
- aysnc?
