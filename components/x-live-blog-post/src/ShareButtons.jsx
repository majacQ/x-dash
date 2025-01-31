import { h } from '@financial-times/x-engine'

export default ({ postId, articleUrl, title }) => {
	const shareUrl = articleUrl ? new URL(articleUrl) : null
	if (shareUrl) {
		shareUrl.hash = `post-${postId}`
	}

	const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
		shareUrl
	)}&text=${encodeURIComponent(title)}&via=financialtimes`
	const facebookUrl = `http://www.facebook.com/sharer.php?u=${encodeURIComponent(
		shareUrl
	)}&t=${encodeURIComponent(title)}`
	const linkedInUrl = `http://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
		shareUrl
	)}&title=${encodeURIComponent(title)}&source=Financial+Times`

	return (
		<div>
			<div
				data-o-component="o-share"
				data-o-share-location={`live-blog-post-${postId}`}
				className="o-share o-share--small"
			>
				<ul data-toolbar="share">
					<li className="o-share__action" data-share="twitter">
						<a
							className="o-share__icon o-share__icon--twitter"
							rel="noopener"
							href={twitterUrl}
							data-trackable="twitter"
						>
							<span className="o-share__text" aria-label={`Share ${title} on Twitter`}>
								Share on Twitter (opens new window)
							</span>
						</a>
					</li>
					<li className="o-share__action" data-share="facebook">
						<a
							className="o-share__icon o-share__icon--facebook"
							rel="noopener"
							href={facebookUrl}
							data-trackable="facebook"
						>
							<span className="o-share__text" aria-label={`Share ${title} on Facebook`}>
								Share on Facebook (opens new window)
							</span>
						</a>
					</li>
					<li className="o-share__action" data-share="linkedin">
						<a
							className="o-share__icon o-share__icon--linkedin"
							rel="noopener"
							href={linkedInUrl}
							data-trackable="linkedin"
						>
							<span className="o-share__text" aria-label={`Share ${title} on LinkedIn`}>
								Share on LinkedIn (opens new window)
							</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
