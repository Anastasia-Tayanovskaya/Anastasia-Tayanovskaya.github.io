'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Article = function () {
	function Article(articleOptions) {
		_classCallCheck(this, Article);

		Object.assign(this, articleOptions);
	}

	_createClass(Article, [{
		key: 'insertData',
		value: function insertData() {
			var article = document.createElement('article'),
			    articleLink = document.createElement('a'),
			    titleElement = document.createElement('h2'),
			    headerElement = document.createElement('header'),
			    image = document.createElement('img'),
			    articleAuthorWrapper = document.createElement('p'),
			    descriptionElement = document.createElement('p'),
			    publishedDateElement = document.createElement('span'),
			    authorElement = document.createElement('span');

			articleLink.setAttribute('href', this.url);
			articleLink.setAttribute('target', '_blank');
			articleLink.classList.add('class', 'article-link');

			article.classList.add('news');
			article.appendChild(articleLink);

			headerElement.appendChild(titleElement);
			titleElement.classList.add('article-title');
			titleElement.textContent = this.title;

			authorElement.classList.add('article-author');
			authorElement.textContent = this.author || 'Unknown';

			articleAuthorWrapper.innerHTML = 'Written by ';
			articleAuthorWrapper.appendChild(authorElement);

			image.setAttribute('src', this.urlToImage);

			publishedDateElement.classList.add('article-published-date');
			publishedDateElement.textContent = new Date(this.publishedAt);

			descriptionElement.classList.add('article-description');
			descriptionElement.textContent = this.description;

			articleLink.appendChild(headerElement);
			articleLink.appendChild(articleAuthorWrapper);
			articleLink.appendChild(image);
			articleLink.appendChild(publishedDateElement);
			articleLink.appendChild(descriptionElement);

			return article;
		}
	}]);

	return Article;
}();