(function() {
	"use strict";

	let API = require('./digitalocean.api').API;

	class Actions extends API {
		constructor(options) {
			super(options);
			this.uri = this.settings.baseUri + "actions/";
		}
		listActions(req) {
			req = extend({
				uri: this.uri
			}, req || {});
			return this.makeReq(req);
		}
		retrieveAction(id, req) {
			req = extend({
				uri: this.uri + id
			}, req || {});
			return this.makeReq(req);
		}
	}

	module.exports.Actions = Actions;
})();
