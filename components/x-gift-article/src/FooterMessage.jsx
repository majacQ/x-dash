import { h } from '@financial-times/x-engine'
import { ShareType } from './lib/constants'

export const FooterMessage = ({
	shareType,
	isGiftUrlCreated,
	redemptionLimit,
	enterpriseLimit,
	giftCredits,
	isNonGiftUrlShortened,
	enterpriseEnabled,
	enterpriseRequestAccess,
	includeHighlights,
	isFreeArticle,
	showFreeArticleAlert
}) => {
	// if the share link button has not been clicked yet
	if (!(isGiftUrlCreated || isNonGiftUrlShortened)) {
		// when the user is b2b and has advanced sharing enabled
		if (enterpriseEnabled && !enterpriseRequestAccess) {
			return null
		}

		return enterpriseEnabled ? ( // when the user is b2b
			<p className="share-article-dialog__footer-message">
				Share with multiple non-subscribers via{' '}
				<a
					className="o-typography-professional o-typography-link"
					href="https://professional.ft.com/advanced-sharing-request-access"
					target="_blank"
					rel="noreferrer"
					data-trackable="trial-link"
				>
					Advanced Sharing
				</a>
			</p>
		) : null // when the user is b2c
	}

	// when the share link has been created

	if (isFreeArticle) {
		return !showFreeArticleAlert ? (
			<p className="share-article-dialog__footer-message-shared-link">
				Anyone will be able to see the full article using this link.{' '}
				{includeHighlights ? 'Your highlights will be visible to recipients.' : ''}
			</p>
		) : null
	}

	if (shareType === ShareType.gift) {
		const redemptionLimitUnit = redemptionLimit === 1 ? 'time' : 'times'
		const creditUnit = giftCredits === 1 ? 'article' : 'articles'
		const redemptionLimitMessage = `Link can be viewed ${redemptionLimit} ${redemptionLimitUnit} and is valid for 90 days. ${
			includeHighlights ? 'Your highlights will be visible to recipients.' : ''
		}`
		const creditsMessage = `You now have ${giftCredits} gift ${creditUnit} remaining this month.`

		return (
			<div className="share-article-dialog__footer-message-shared-link">
				<p>{redemptionLimitMessage}</p>
				<p>{creditsMessage}</p>
			</div>
		)
	}

	if (shareType === ShareType.nonGift && enterpriseEnabled) {
		const advancedSharingFTsubscribersOnlyMessage = `Only FT subscribers will be able to see the full article using this link. ${
			includeHighlights ? 'Your highlights will be visible to recipients.' : ''
		}`
		return (
			<p className="share-article-dialog__footer-message-shared-link">
				{advancedSharingFTsubscribersOnlyMessage}
			</p>
		)
	}

	if (shareType === ShareType.enterprise) {
		const advancedSharingLimitUnit = enterpriseLimit === 1 ? 'time' : 'times'
		const advancedSharingLimitMessage = `Because you used Advanced Sharing, this shared article can be viewed ${enterpriseLimit} ${advancedSharingLimitUnit}. ${
			includeHighlights ? 'Your highlights will be visible to recipients.' : ''
		}`

		return (
			<div className="share-article-dialog__footer-message-shared-link">
				<p>{advancedSharingLimitMessage}</p>
				{/* <p>Your organisation can still share x articles via Advanced Sharing.</p> */}
				<p>
					<a
						className="o-typography-professional o-typography-link"
						href="https://enterprise-sharing-dashboard.ft.com"
						target="_blank"
						rel="noreferrer"
						data-trackable="see-all-links"
					>
						See all shared links
					</a>
				</p>
			</div>
		)
	}

	return null
}
