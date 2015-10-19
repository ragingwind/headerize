'use strict';
var assert = require('assert');
var headerize = require('./');

it('should returns expected header', function () {
	assert.strictEqual(headerize('lowerUpper'), 'Lower Upper');
	assert.strictEqual(headerize('lowerlowerUpper'), 'Lowerlower Upper');
	assert.strictEqual(headerize(' lowerUpper', {trim: true}), 'Lower Upper');
	assert.strictEqual(headerize('_lowerUpper', {trim: true}), 'Lower Upper');
	assert.strictEqual(headerize('.lowerUpper', {trim: true}), 'Lower Upper');
	assert.strictEqual(headerize('/lowerUpper', {trim: true}), 'Lower Upper');
	assert.strictEqual(headerize(' /._lowerUpper', {trim: true}), 'Lower Upper');
	assert.strictEqual(headerize('lower-Upper'), 'Lower Upper');
	assert.strictEqual(headerize('lower Upper'), 'Lower Upper');
	assert.strictEqual(headerize('lower.Upper'), 'Lower Upper');
	assert.strictEqual(headerize('lower.Upper'), 'Lower Upper');
	assert.strictEqual(headerize('lower upper'), 'Lower Upper');
});
