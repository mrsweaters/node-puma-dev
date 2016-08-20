var path = require('path');
var fs = require('fs');

var home = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var pumaDevPath = NodePumaDev.pumaDevPath = path.join(home, '.puma-dev');

function NodePumaDev (name, port) {
  if ('number' === typeof name && 'string' === typeof port) {
    port = [name, name = port][0];
  }

  if ('object' === typeof name) {
    port = name.port;
    name = name.name;
  }

  if ('function' === typeof name) {
    port = name.get('port');
    name = name.get('title');
  }

  if (!fs.statSync(pumaDevPath).isDirectory())  {
    fs.mkdirSync(pumaDevPath);
  }
  fs.writeFileSync(path.join(pumaDevPath, name), port.toString());
}

module.exports = NodePumaDev;

