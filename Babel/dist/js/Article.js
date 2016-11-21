'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Article = function () {
	function Article(articleOptions) {
		_classCallCheck(this, Article);

		Object.assign(this, articleOptions);
	}

	_createClass(Article, [{
		key: 'insertDataIntoTemplate',
		value: function insertDataIntoTemplate(tmplContent) {
			var articleLink = tmplContent.querySelector('.article-link'),
			    titleElement = tmplContent.querySelector('h2'),
			    image = tmplContent.querySelector('img'),
			    descriptionElement = tmplContent.querySelector('.article-description'),
			    publishedDateElement = tmplContent.querySelector('.article-published-date'),
			    authorElement = tmplContent.querySelector('.article-author');

			articleLink.setAttribute('href', this.url);
			titleElement.textContent = this.title;

			image.setAttribute('src', this.urlToImage);
			descriptionElement.textContent = this.description;
			publishedDateElement.textContent = new Date(this.publishedAt);

			authorElement.textContent = this.author || 'Unknown';

			return document.importNode(tmplContent, true);
		}
	}]);

	return Article;
}();