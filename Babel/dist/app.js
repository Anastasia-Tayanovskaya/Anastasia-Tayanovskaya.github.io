'use strict';

(function () {
	'use strict';

	var SOURCE_URL = 'https://newsapi.org/v1/sources';
	var SOURCE_BY_DEFAULT = 'bbc-news';
	var API_KEY = '2fabd738608345058dedf508d3c9b9ab';

	var updateArticleUrl = function updateArticleUrl() {
		return 'https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + API_KEY;
	};

	var newsListElement = document.querySelector('.news-list'),
	    sourceListElement = document.querySelector('.source-list'),
	    source = SOURCE_BY_DEFAULT,
	    articlesUrl = updateArticleUrl(),
	    articleTmplContent = document.querySelector('#SingleArticle').content,
	    navButtonElement = document.querySelector('.nav-button'),
	    requester = new Requester();

	navButtonElement.addEventListener('click', function (event) {
		event.preventDefault();
		sourceListElement.classList.toggle('visible');
	});

	function onSourcesLoaded(response) {
		var documentFragment = document.createDocumentFragment(),
		    sources = response.sources;

		sources.forEach(function (source) {
			var sourceObj = new Source(source);
			sourceObj.createDOMElement();
			documentFragment.appendChild(sourceObj.element);

			if (source.id === SOURCE_BY_DEFAULT) {
				sourceObj.element.classList.add('active');
			}
		});

		sourceListElement.appendChild(documentFragment);
		sourceListElement.addEventListener('click', function (event) {
			var target = event.target;
			if (target.tagName.toLowerCase() === 'li') {
				var activeListElement = sourceListElement.querySelector('li.active');
				activeListElement.classList.remove('active');

				target.classList.add('active');
				source = target.dataset.sourceId;
				articlesUrl = updateArticleUrl();
				requester.getResponseFromUrl(articlesUrl).then(onNewsListLoaded, onError);

				this.classList.remove('visible');
			}
		});
	}

	function onNewsListLoaded(response) {
		var documentFragment = document.createDocumentFragment(),
		    articles = response.articles;

		newsListElement.innerHTML = '';

		articles.forEach(function (article) {
			var newsArticle = new Article(article);
			var articleWithData = newsArticle.insertDataIntoTemplate(articleTmplContent);
			documentFragment.appendChild(articleWithData);
		});

		newsListElement.appendChild(documentFragment);
	}

	function onError(message) {
		console.log(message);
	}

	requester.getResponseFromUrl(SOURCE_URL).then(onSourcesLoaded, onError);
	requester.getResponseFromUrl(articlesUrl).then(onNewsListLoaded, onError);
})();