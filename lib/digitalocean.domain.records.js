"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
	"use strict";

	var API = require('./digitalocean.api').API;

	var DomainRecords = function (_API) {
		_inherits(DomainRecords, _API);

		function DomainRecords(options) {
			_classCallCheck(this, DomainRecords);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DomainRecords).call(this, options));

			_this.uri = _this.settings.baseUri + "domains/";
			return _this;
		}

		_createClass(DomainRecords, [{
			key: "listDomainRecords",
			value: function listDomainRecords(name, req) {
				req = extend({
					uri: this.uri + name + "/records"
				}, req || {});
				return this.makeReq(req);
			}
		}, {
			key: "createDomainRecord",
			value: function createDomainRecord(name, data, req) {
				req = extend({
					fn: rest.post,
					uri: this.uri + name + "/records/",
					opt: Object.assign(this.settings.requests, {
						data: data
					})
				}, req || {});
				return this.makeReq(req);
			}
		}, {
			key: "retrieveDomainRecord",
			value: function retrieveDomainRecord(name, id, req) {
				req = extend({
					uri: this.uri + name + "/records/" + id
				}, req || {});
				return this.makeReq(req);
			}
		}, {
			key: "updateDomainRecord",
			value: function updateDomainRecord(name, id, data, req) {
				req = extend({
					fn: rest.put,
					uri: this.uri + name + "/records/" + id,
					opt: Object.assign(this.settings.requests, {
						data: data
					})
				}, req || {});
				return this.makeReq(req);
			}
		}, {
			key: "deleteDomainRecord",
			value: function deleteDomainRecord(name, id, req) {
				req = extend({
					fn: rest.del,
					uri: this.uri + name + "/records/" + id,
					opt: this.settings.requests
				}, req || {});
				return this.makeReq(req);
			}
		}]);

		return DomainRecords;
	}(API);

	module.exports.DomainRecords = DomainRecords;
})();