(function() {
	"use strict";

	global.extend = require('extend');
	global.rest = require('restler');

	module.exports = extend(
		require('./src/digitalocean.account'),
		require('./src/digitalocean.actions'),
		require('./src/digitalocean.domains'),
		require('./src/digitalocean.domain.records')
	);
})();
