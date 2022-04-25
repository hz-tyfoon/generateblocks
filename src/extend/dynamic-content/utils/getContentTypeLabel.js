import { __ } from '@wordpress/i18n';

/**
 * Return the correct label for the content types.
 *
 * @param {Object} attributes   The block attributes.
 * @param {string} defaultLabel Default label.
 * @return {string} The content type label.
 */
export default function getContentTypeLabel( attributes, defaultLabel ) {
	const {
		useDynamicData,
		dynamicContentType,
		dynamicLinkType,
		isCaption,
	} = attributes;

	if ( useDynamicData ) {
		const labels = {
			'post-title': __( 'Post title', 'generateblocks' ),
			'post-excerpt': __( 'Post excerpt', 'generateblocks' ),
			'post-date': __( 'Post date', 'generateblocks' ),
			'post-meta': __( 'Post meta', 'generateblocks' ),
			'author-email': __( 'Author email', 'generateblocks' ),
			'author-name': __( 'Author name', 'generateblocks' ),
			'author-nickname': __( 'Author nickname', 'generateblocks' ),
			'author-first-name': __( 'Author first name', 'generateblocks' ),
			'author-last-name': __( 'Author last name', 'generateblocks' ),
			'author-meta': __( 'Author meta', 'generateblocks' ),
			'pagination-numbers': __( 'Page numbers', 'generateblocks' ),
			caption: __( 'Caption', 'generateblocks' ),
		};

		const linkLabels = {
			'single-post': __( 'Single post', 'generateblocks' ),
			'author-archives': __( 'Author archives', 'generateblocks' ),
			'comments-area': __( 'Comments area', 'generateblocks' ),
			'post-meta': __( 'Post meta', 'generateblocks' ),
			'previous-posts': __( 'Previous posts', 'generateblocks' ),
			'next-posts': __( 'Next posts', 'generateblocks' ),
			'term-archives': __( 'Term archives', 'generateblocks' ),
			'pagination-prev': __( 'Previous page', 'generateblocks' ),
			'pagination-next': __( 'Next page', 'generateblocks' ),
		};

		if ( Object.keys( labels ).includes( dynamicContentType ) ) {
			return labels[ dynamicContentType ];
		}

		if ( Object.keys( linkLabels ).includes( dynamicLinkType ) ) {
			return linkLabels[ dynamicLinkType ];
		}

		return __( 'Dynamic content', 'generateblocks' );
	}

	if ( isCaption ) {
		return __( 'Caption', 'generateblocks' );
	}

	return defaultLabel;
}
