(function() {
	"use strict";

	let API = require('./digitalocean.api').API;

	class DomainRecords extends API {
		constructor(options) {
			super(options);
			this.uri = this.settings.baseUri + "domains/";
		}
		listDomainRecords(name, req) {
			req = extend({
				uri: this.uri + name + "/records"
			}, req || {});
			return this.makeReq(req);
		}
		createDomainRecord(name, data, req) {
			req = extend({
				fn: rest.post,
				uri: this.uri + name + "/records/",
				opt: Object.assign(this.settings.requests, {
					data: data
				})
			}, req || {});
			return this.makeReq(req);
		}
		retrieveDomainRecord(name, id, req) {
			req = extend({
				uri: this.uri + name + "/records/" + id,
			}, req || {});
			return this.makeReq(req);
		}
		updateDomainRecord(name, id, data, req) {
			req = extend({
				fn: rest.put,
				uri: this.uri + name + "/records/" + id,
				opt: Object.assign(this.settings.requests, {
					data: data
				})
			}, req || {});
			return this.makeReq(req);
		}
		deleteDomainRecord(name, id, req) {
			req = extend({
				fn: rest.del,
				uri: this.uri + name + "/records/" + id,
				opt: this.settings.requests
			}, req || {});
			return this.makeReq(req);
		}
	}

	module.exports.DomainRecords = DomainRecords;
})();
