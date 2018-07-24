exports.title = 'With gift credits';

exports.data = {
	title: 'Share this article (with credit)',
	isFreeArticle: false,
	articleUrl: 'https://www.ft.com/content/blahblah',
	articleTitle: 'Title Title Title Title',
};

exports.knobs = [
	'title',
	'isFreeArticle',
	'articleUrl',
	'articleTitle'
];

// This reference is only required for hot module loading in development
// <https://webpack.js.org/concepts/hot-module-replacement/>
exports.m = module;

exports.fetchMock = fetchMock => {
	fetchMock
		.get(
			'/article-email/credits',
			{ 'credits':
				{
					'allowance': 20,
					'consumedCredits': 19,
					'remainingCredits': 1,
					'renewalDate': '2018-08-01T00:00:00Z'
				}
			},
		);
};
