"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
	"use strict";

	var API = require('./digitalocean.api').API;

	var Actions = function (_API) {
		_inherits(Actions, _API);

		function Actions(options) {
			_classCallCheck(this, Actions);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Actions).call(this, options));

			_this.uri = _this.settings.baseUri + "actions/";
			return _this;
		}

		_createClass(Actions, [{
			key: "listActions",
			value: function listActions(req) {
				req = extend({
					uri: this.uri
				}, req || {});
				return this.makeReq(req);
			}
		}, {
			key: "retrieveAction",
			value: function retrieveAction(id, req) {
				req = extend({
					uri: this.uri + id
				}, req || {});
				return this.makeReq(req);
			}
		}]);

		return Actions;
	}(API);

	module.exports.Actions = Actions;
})();