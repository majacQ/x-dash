exports.title = 'Example';

exports.data = {
	message: 'Hello World!'
};

exports.knobs = ['count'];

// This reference is only required for hot module loading in development
// <https://webpack.js.org/concepts/hot-module-replacement/>
exports.m = module;
