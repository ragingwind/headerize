#!/usr/bin/env node
'use strict';
var meow = require('meow');
var headerize = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ headerize [input]',
		'',
		'Options',
		'  --foo  Lorem ipsum. [Default: false]',
		'',
		'Examples',
		'  $ headerize',
		'  unicorns & rainbows',
		'  $ headerize ponies',
		'  ponies & rainbows'
	]
});

console.log(headerize(cli.input[0] || 'unicorns'));
