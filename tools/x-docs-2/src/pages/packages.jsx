import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/basic';
import { List, ListItem } from '../components/modules/list';

export const query = graphql`
	query {
		allSitePage(filter: { context: { type: { eq: "npm-package" }, group: { eq: "packages" } } }) {
			edges {
				node {
					path
					context {
						name
					}
				}
			}
		}
	}
`;

export default ({ data }) => (
	<Layout title="Packages">
		<div className="">
			<h1>Packages</h1>
			<List>
				{data.allSitePage.edges.map(({ node }, i) => <ListItem key={`npm-${i}`} node={node} />)}
			</List>
		</div>
	</Layout>
);
