import { StoryContainer } from '../story-container'
import { defaultArgs, defaultArgTypes, getFetchMock } from '../data'

/**
 * @param {import('../../typings/x-privacy-manager').PrivacyManagerProps} args
 */
export const ConsentAccepted = (args) => {
	getFetchMock(200)
	return StoryContainer(args)
}

ConsentAccepted.storyName = 'Consent: accepted'
ConsentAccepted.args = {
	...defaultArgs,
	consent: true
}
ConsentAccepted.argTypes = defaultArgTypes
