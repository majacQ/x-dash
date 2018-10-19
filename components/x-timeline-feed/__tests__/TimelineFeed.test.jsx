const { h } = require('@financial-times/x-engine');
const { mount } = require('@financial-times/x-test-utils/enzyme');
const articles = require('../stories/articles.json');

const { TimelineFeed } = require('../');

describe('x-timeline-feed', () => {
	let component;

	describe('given latestArticlesTime is set', () => {
		beforeEach(() => {
			component = mount(<TimelineFeed
				articles={articles}
				timezoneOffset={-60}
				localTodayDate='2018-10-17'
				latestArticlesTime='2018-10-17T12:10:33.000Z'
			/>);
		});

		it('should have correct number of article groups', () => {
			expect(component.find('section')).toHaveLength(4);
		});

		it('should have correct article group headings and number of articles', () => {
			const sections = component.find('section');

			expect(sections.at(0).find('h2').text()).toEqual('Latest News');
			expect(sections.at(0).find('li')).toHaveLength(2);
			expect(sections.at(1).find('h2').text()).toEqual('Earlier Today');
			expect(sections.at(1).find('li')).toHaveLength(4);
			expect(sections.at(2).find('h2').text()).toEqual('Yesterday');
			expect(sections.at(2).find('li')).toHaveLength(10);
			expect(sections.at(3).find('h2').text()).toEqual('October 15, 2018');
			expect(sections.at(3).find('li')).toHaveLength(11);
		});
	});

	describe('given latestArticlesTime is not set', () => {
		beforeEach(() => {
			component = mount(<TimelineFeed
				articles={articles}
				timezoneOffset={-60}
				localTodayDate='2018-10-17'
			/>);
		});

		it('should have correct number of article groups', () => {
			expect(component.find('section')).toHaveLength(3);
		});

		it('should have correct article group headings and number of articles', () => {
			const sections = component.find('section');

			expect(sections.at(0).find('h2').text()).toEqual('Earlier Today');
			expect(sections.at(0).find('li')).toHaveLength(6);
			expect(sections.at(1).find('h2').text()).toEqual('Yesterday');
			expect(sections.at(1).find('li')).toHaveLength(10);
			expect(sections.at(2).find('h2').text()).toEqual('October 15, 2018');
			expect(sections.at(2).find('li')).toHaveLength(11);
		});
	});

});