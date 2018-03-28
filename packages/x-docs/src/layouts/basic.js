import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../styles/base.scss';

const TemplateWrapper = ({children, ...props}) => (
	<div>
		<Helmet
			title="Gatsby Default Starter"
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' },
			]}
		>
			<link href="https://fonts.googleapis.com/css?family=Lato:300,300i,700,700i|Muli:200" rel="stylesheet" />
		</Helmet>

		{children()}
	</div>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper;
