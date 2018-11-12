const { TopicSearch } = require('../');

exports.component = TopicSearch;

exports.package = require('../package.json');

// Set up basic document styling using the Origami build service
exports.dependencies = {
	'o-normalise': '^1.6.0',
	'o-typography': '^5.5.0',
	'o-colors': "^4.7.7",
	'o-icons': "^5.8.0",
};

exports.stories = [
	require('./topic-search')
];
