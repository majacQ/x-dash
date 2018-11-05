import { h } from '@financial-times/x-engine';
import { shareType.gift } from './lib/constants';
import styles from './GiftArticle.css';

const urlClassNames = [
	'o-forms__text',
	styles.url
].join(' ');

export default ({ shareType, isGiftUrlCreated, url, urlType }) => {
	return (
		<input
			type="text"
			name={ urlType }
			value={ url }
			className={ urlClassNames }
			disabled={ shareType === shareType.gift && !isGiftUrlCreated }
			readOnly
		/>
	);
};
