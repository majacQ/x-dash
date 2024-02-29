import { h } from '@financial-times/x-engine'
import { Header } from './Header'
import { GiftLinkSection } from './GiftLinkSection'
import { Footer } from './Footer'
import { SharingOptionsToggler } from './SharingOptionsToggler'

export default (props) => {
	return (
		<div
			className="o-typography-wrapper share-article-dialog__wrapper"
			hidden={props.isLoading}
			data-trackable={`share-modal | ${
				props.enterpriseEnabled && !props.enterpriseRequestAccess ? 'b2b' : 'b2c'
			}`}
			role="dialog"
			aria-modal="true"
		>
			<button className="share-article-modal__close" aria-label="Close" />
			<div className="share-article-dialog__main">
				{!props.isFreeArticle ? <SharingOptionsToggler {...props} /> : null}
				<Header {...props} />
				<GiftLinkSection {...props} />
				<Footer {...props} />
			</div>
		</div>
	)
}
