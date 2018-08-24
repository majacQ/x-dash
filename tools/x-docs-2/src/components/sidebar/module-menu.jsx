import React from 'react';
import { Link } from 'gatsby';

export default ({ heading, modules }) => (
	<div className="site-sidebar">
		<ul className="site-sidebar__list site-sidebar__list--sticky">
			<li className="site-sidebar__item site-sidebar__item--heading">
				{heading}
			</li>
			{modules.map(({ node }, i) => (
				<li key={`menu-${i}`} className="site-sidebar__item">
					<Link to={node.path} exact activeClassName="is-active">
						{node.context.title}
					</Link>
				</li>
			))}
		</ul>
	</div>
);
