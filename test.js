'use strict';

import test from 'ava';
import headerize from './';

test('should returns expected header', t => {
	t.is(headerize('lowerUpper'), 'Lower Upper');
	t.is(headerize('lowerUpUp'), 'Lower Up Up');
	t.is(headerize('lowerUP'), 'Lower UP');
	t.is(headerize('lowerUPDUser'), 'Lower UPD User');
	t.is(headerize('lowerUPDUs'), 'Lower UPDUs');
	t.is(headerize('lowerlowerUpper'), 'Lowerlower Upper');
	t.is(headerize('lower upper'), 'Lower Upper');
});

test('should returns expected header from pre-none-letter string', t => {
	t.is(headerize(' lowerUpper', {trim: true}), 'Lower Upper');
	t.is(headerize('_lowerUpper', {trim: true}), 'Lower Upper');
	t.is(headerize('.lowerUpper', {trim: true}), 'Lower Upper');
	t.is(headerize('/lowerUpper', {trim: true}), 'Lower Upper');
	t.is(headerize(' /._lowerUpper', {trim: true}), 'Lower Upper');
});

test('should returns expected header from middle-none-letter string', t => {
	t.is(headerize('lower-Upper'), 'Lower Upper');
	t.is(headerize('lower Upper'), 'Lower Upper');
	t.is(headerize('lower.Upper'), 'Lower Upper');
	t.is(headerize('lower.Upper'), 'Lower Upper');
});
