(function() {
	"use strict";

	class API {
		constructor(options) {
			this.options = extend({
				baseUri: 'https://api.digitalocean.com/v2/',
				token: null,
				domain: null
			}, options || {});

			this.settings = extend(this.options, {
				requests: {
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + this.options.token
					}
				}
			});

			delete this.options;
		}
		makeReq(req) {
			let set = extend({
				fn: rest.get,
				uri: this.settings.baseUri,
				opt: this.settings.requests
			}, req || {});

			return new Promise((resolve, reject) => {
				set.fn(set.uri, set.opt)
					.on('complete', (result) => {
						if (result instanceof Error) {
							reject(result);
						} else {
							resolve(result);
						}
					});
			});
		}
	}

	exports.API = API;
})();
