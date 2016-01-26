(function() {
	"use strict";

	let API = require('./digitalocean.api').API;

	class Account extends API {
		constructor(options) {
			super(options);
			this.uri = this.settings.baseUri + "account";
		}
		getUserInformation(req) {
			req = extend({
				uri: this.uri
			}, req || {});
			return this.makeReq(req);
		}
	}

	module.exports.Account = Account;
})();
