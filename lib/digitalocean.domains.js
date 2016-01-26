"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
	"use strict";

	var API = require('./digitalocean.api').API;

	var Domains = function (_API) {
		_inherits(Domains, _API);

		function Domains(options) {
			_classCallCheck(this, Domains);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Domains).call(this, options));

			_this.uri = _this.settings.baseUri + "domains/";
			return _this;
		}

		_createClass(Domains, [{
			key: "listDomains",
			value: function listDomains(req) {
				req = extend({
					uri: this.uri
				}, req || {});
				return this.makeReq(req);
			}
		}, {
			key: "createDomain",
			value: function createDomain(data, req) {
				req = extend({
					fn: rest.post,
					uri: this.uri,
					opt: Object.assign(this.settings.requests, {
						data: data
					})
				}, req || {});
				return this.makeReq(req);
			}
		}, {
			key: "retrieveDomain",
			value: function retrieveDomain(name, req) {
				req = extend({
					uri: this.uri + name
				}, req || {});
				return this.makeReq(req);
			}
		}, {
			key: "deleteDomain",
			value: function deleteDomain(name, req) {
				req = extend({
					fn: rest.del,
					uri: this.uri + name,
					opt: this.settings.requests
				}, req || {});
				return this.makeReq(req);
			}
		}]);

		return Domains;
	}(API);

	module.exports.Domains = Domains;
})();