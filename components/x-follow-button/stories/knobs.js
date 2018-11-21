// To ensure that component stories do not need to depend on Storybook themselves we return a
// function that may be passed the required dependencies.
module.exports = (data, { text, boolean, select }) => {
	const Groups = {
		Text: 'Text',
		Status: 'Status',
		Flags: 'Flags',
		Variant: 'Variant'
	};

	const Text = {
		buttonText () {
			return text('Default text', data.buttonText, Groups.Text);
		},
		altButtonText () {
			return text('Alternate text', data.altButtonText, Groups.Text);
		},
		name () {
			return text('Name of what we add', data.name, Groups.Text);
		}
	};

	const Status = {
		isSelected () {
			return boolean('isSelected', data.isSelected, Groups.Status);
		}
	};

	const Flags = {
		followPlusDigestEmail () {
			return boolean('followPlusDigestEmail', data.followPlusDigestEmail, Groups.Flags);
		}
	};

	const Variant = {
		variant () {
			return select('variant', [ null, 'standard', 'inverse', 'opinion', 'monochrome' ], data.variant, Groups.Variant);
		}
	};

	return Object.assign({}, Text, Status, Flags, Variant);
};
