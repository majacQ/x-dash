import { h } from '@financial-times/x-engine'
import styles from './GiftArticle.scss'

const titleClassNames = [styles.title].join(' ')

export default ({
	giftCredits,
	monthlyAllowance,
	monthNow,
	isFreeArticle,
	isArticleSharingUxUpdates,
	title = ''
}) => {
	if (isArticleSharingUxUpdates) {
		if (title !== 'Share on Social') {
			if (isFreeArticle) {
				title = 'This article is free for anyone to read'
			} else {
				title = `You have ${giftCredits} out of ${monthlyAllowance} gift credits left in ${monthNow}`
			}
		}

		return (
			<div className={titleClassNames} id="gift-article-title">
				{title}
			</div>
		)
	} else {
		return (
			<div className={titleClassNames} id="gift-article-title">
				{title}
			</div>
		)
	}
}
