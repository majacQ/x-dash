import { h } from '@financial-times/x-engine'
import Title from './Title'
import RadioButtonsSection from './RadioButtonsSection'
import UrlSection from './UrlSection'
import MobileShareButtons from './MobileShareButtons'
import CopyConfirmation from './CopyConfirmation'
import ReferAFriend from './ReferAFriend'

export default (props) => (
	<div className="x-gift-article">
		<form name="gift-form" className="x-gift-article__form">
			<div role="group" arialabelledby="gift-article-title">
				<Title {...props} />

				<RadioButtonsSection
					shareType={props.shareType}
					isArticleSharingUxUpdates={props.isArticleSharingUxUpdates}
					showGiftUrlSection={props.actions.showGiftUrlSection}
					showEnterpriseUrlSection={props.actions.showEnterpriseUrlSection}
					showNonGiftUrlSection={props.actions.showNonGiftUrlSection}
					enterpriseLimit={props.enterpriseLimit}
					enterpriseHasCredits={props.enterpriseHasCredits}
					enterpriseRequestAccess={props.enterpriseRequestAccess}
					enterpriseAlert={!props.enterpriseHasCredits && !props.enterpriseRequestAccess}
					enterpriseEnabled={props.enterpriseEnabled}
					isFreeArticle={props.isFreeArticle}
				/>

				<UrlSection {...props} />
			</div>
		</form>

		{props.showCopyConfirmation && (
			<CopyConfirmation
				hideCopyConfirmation={props.actions.hideCopyConfirmation}
				isArticleSharingUxUpdates={props.isArticleSharingUxUpdates}
			/>
		)}

		{props.isRafActive && (
			<div>
				<ReferAFriend {...props} />

				{props.showRafCopyConfirmation && (
					<CopyConfirmation
						hideCopyConfirmation={props.actions.hideRafCopyConfirmation}
						isArticleSharingUxUpdates={props.isArticleSharingUxUpdates}
					/>
				)}
			</div>
		)}

		{props.showMobileShareLinks && <MobileShareButtons mobileShareLinks={props.mobileShareLinks} />}
	</div>
)
