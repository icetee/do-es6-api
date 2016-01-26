'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
	"use strict";

	var API = function () {
		function API(options) {
			_classCallCheck(this, API);

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

		_createClass(API, [{
			key: 'makeReq',
			value: function makeReq(req) {
				var set = extend({
					fn: rest.get,
					uri: this.settings.baseUri,
					opt: this.settings.requests
				}, req || {});

				return new Promise(function (resolve, reject) {
					set.fn(set.uri, set.opt).on('complete', function (result) {
						if (result instanceof Error) {
							reject(result);
						} else {
							resolve(result);
						}
					});
				});
			}
		}]);

		return API;
	}();

	exports.API = API;
})();