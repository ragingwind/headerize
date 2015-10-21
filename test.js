'use strict';
var assert = require('assert');
var headerize = require('./');

it('should returns expected header', function () {
	assert.strictEqual(headerize('lowerUpper'), 'Lower Upper');
	assert.strictEqual(headerize('lowerUpUp'), 'Lower Up Up');
	assert.strictEqual(headerize('lowerUP'), 'Lower UP');
	assert.strictEqual(headerize('lowerUPDUser'), 'Lower UPD User');
	assert.strictEqual(headerize('lowerUPDUs'), 'Lower UPDUs');
	assert.strictEqual(headerize('lowerlowerUpper'), 'Lowerlower Upper');
	assert.strictEqual(headerize('lower upper'), 'Lower Upper');
});

it('should returns expected header from pre-none-letter string', function () {
	assert.strictEqual(headerize(' lowerUpper', {trim: true}), 'Lower Upper');
	assert.strictEqual(headerize('_lowerUpper', {trim: true}), 'Lower Upper');
	assert.strictEqual(headerize('.lowerUpper', {trim: true}), 'Lower Upper');
	assert.strictEqual(headerize('/lowerUpper', {trim: true}), 'Lower Upper');
	assert.strictEqual(headerize(' /._lowerUpper', {trim: true}), 'Lower Upper');
});

it('should returns expected header from middle-none-letter string', function () {
	assert.strictEqual(headerize('lower-Upper'), 'Lower Upper');
	assert.strictEqual(headerize('lower Upper'), 'Lower Upper');
	assert.strictEqual(headerize('lower.Upper'), 'Lower Upper');
	assert.strictEqual(headerize('lower.Upper'), 'Lower Upper');
});
