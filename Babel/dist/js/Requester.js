'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Requester = function () {
	function Requester() {
		_classCallCheck(this, Requester);
	}

	_createClass(Requester, [{
		key: 'contructor',
		value: function contructor() {
			this.init = { method: 'GET', mode: 'cors' };
		}
	}, {
		key: 'getResponseFromUrl',
		value: function getResponseFromUrl(sourceUrl) {
			var request = new Request(sourceUrl);
			return fetch(request, this.init).then(function (response) {
				return response.json();
			});
		}
	}]);

	return Requester;
}();