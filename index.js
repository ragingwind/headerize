'use strict';
module.exports = function (h, opts) {
	opts = opts || {
		trim: false
	};

	if (opts.trim) {
		h = h.replace(/^(\W|_|-|\.)*/g, '');
	}

	return h.replace(/(\W|_|-|\.)/g, ' ')
		.replace(/\b[a-z]/g, function (match) {
			return match.toUpperCase();
		}).replace(/([a-z])([A-Z])+/g, function (match, lower, upper) {
			return lower + ' ' + upper;
		});
};
