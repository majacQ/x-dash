import React from 'react';
import BuildService from './build-service';
import { storiesOf } from '@storybook/react';
import * as knobsAddon from '@storybook/addon-knobs/react';
import { Helmet } from 'react-helmet';

const defaultKnobs = () => ({});

/**
 * Create Props
 * @param {{ [key: string]: any }} defaultData
 * @param {String[]} allowedKnobs
 * @param {Function} hydrateKnobs
 */
function createProps(defaultData, allowedKnobs = [], hydrateKnobs = defaultKnobs) {
	// Inject knobs add-on into given dependency container
	const knobs = hydrateKnobs(defaultData, knobsAddon);
	// Mix the available knob props into default data
	const mixedProps = { ...defaultData, ...knobs };

	if(allowedKnobs.length === 0) {
		return mixedProps;
	}

	return allowedKnobs.reduce((map, prop) => {
		if (mixedProps.hasOwnProperty(prop)) {
			const value = mixedProps[prop];

			// Knobs are functions which need calling to register them
			if (typeof value === 'function') {
				map[prop] = value();
			} else {
				map[prop] = value;
			}
		}

		return map;
	}, {});
}

/**
 * Build Story
 * @param {String} name
 * @param {{ [key: string]: string }} dependencies
 * @param {Function} Component
 * @param {Function} knobs
 * @param {{ title: String, data: {}, knobs: String[], m: module }} story
 */
function buildStory ({name, dependencies, component: Component, knobs, story, styles}) {
	const storybook = storiesOf(name, story.m);

	storybook.addDecorator(knobsAddon.withKnobs);

	storybook.add(story.title, () => {
		const props = createProps(story.data, story.knobs, knobs);

		return (
			<div className="story-container">
				{dependencies && <BuildService dependencies={dependencies} />}
				{styles && <Helmet>
					{styles.map(
						style => <link key={style} rel='stylesheet' href={style} />
					)}
				</Helmet>}
				<Component {...props} />
			</div>
		);
	});

	return storybook;
}

export default buildStory;
