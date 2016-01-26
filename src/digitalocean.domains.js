(function() {
	"use strict";

	let API = require('./digitalocean.api').API;

	class Domains extends API {
		constructor(options) {
			super(options);
			this.uri = this.settings.baseUri + "domains/";
		}
		listDomains(req) {
			req = extend({
				uri: this.uri
			}, req || {});
			return this.makeReq(req);
		}
		createDomain(data, req) {
			req = extend({
				fn: rest.post,
				uri: this.uri,
				opt: Object.assign(this.settings.requests, {
					data: data
				})
			}, req || {});
			return this.makeReq(req);
		}
		retrieveDomain(name, req) {
			req = extend({
				uri: this.uri + name
			}, req || {});
			return this.makeReq(req);
		}
		deleteDomain(name, req) {
			req = extend({
				fn: rest.del,
				uri: this.uri + name,
				opt: this.settings.requests
			}, req || {});
			return this.makeReq(req);
		}
	}

	module.exports.Domains = Domains;
})();
