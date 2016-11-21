'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Source = function () {
	function Source(sourceOptions) {
		_classCallCheck(this, Source);

		Object.assign(this, sourceOptions);
	}

	_createClass(Source, [{
		key: 'createDOMElement',
		value: function createDOMElement() {
			var sourceId = this.id,
			    sourceName = this.name,
			    sourceImageSmall = this.urlsToLogos.small;


			this.element = document.createElement('li');
			this.element.textContent = sourceName;
			this.element.dataset.sourceId = sourceId;
			this.element.dataset.sourceName = sourceName;
			this.element.dataset.sourceImageSmall = sourceImageSmall;
		}
	}]);

	return Source;
}();