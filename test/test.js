var fs = require('fs');
var path = require('path');
var expect = require('chai').expect;
var express = require('express');

var nodePumaDev = require('../index');
var powPath = nodePumaDev.powPath;

describe('node-puma-dev', function () {
  var name = 'test-site';
  var port = 3000;
  var portString = port.toString();
  var powLinkPath = path.join(powPath, name);

  var test = function () {
    expect(fs.readFileSync(powLinkPath, 'utf8')).to.equal(portString);
  };

  it('creates a pow with name and port arguments', function () {
    test(nodePumaDev(name, port));
  });

  it('switches the arguments if they are in the wrong order', function () {
    test(nodePumaDev(port, name));
  });

  it('works with options object', function () {
    test(nodePumaDev({port: port, name: name}));
  });

  it('can be passed an express app', function () {
    var app = express();
    app.set('title', name);
    app.set('port', port);
    test(nodePumaDev(app));
  });

});
