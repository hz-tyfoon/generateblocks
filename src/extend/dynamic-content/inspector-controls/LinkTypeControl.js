import { __ } from '@wordpress/i18n';
import AdvancedSelect from '../../../components/advanced-select';
import { applyFilters } from '@wordpress/hooks';
import { TextControl } from '@wordpress/components';

const getOptions = ( dynamicContentType, isPagination = false, name ) => {
	let defaultOptions = [
		{ value: '', label: __( 'Select…', 'generateblocks' ) },
		{ value: 'single-post', label: __( 'Single post', 'generateblocks' ) },
		{ value: 'author-archives', label: __( 'Author archives', 'generateblocks' ) },
		{ value: 'comments-area', label: __( 'Comments area', 'generateblocks' ) },
		{ value: 'post-meta', label: __( 'Post meta', 'generateblocks' ) },
		{ value: 'previous-posts', label: __( 'Previous posts', 'generateblocks' ) },
		{ value: 'next-posts', label: __( 'Next posts', 'generateblocks' ) },
	];

	if ( 'terms' === dynamicContentType ) {
		defaultOptions = [
			{ value: '', label: __( 'Select…', 'generateblocks' ) },
			{ value: 'term-archives', label: __( 'Term archives', 'generateblocks' ) },
		];
	}

	if ( isPagination ) {
		defaultOptions = [
			{ value: 'pagination-prev', label: __( 'Pagination previous page', 'generateblocks' ) },
			{ value: 'pagination-next', label: __( 'Pagination next page', 'generateblocks' ) },
		];

		if ( 'pagination-numbers' === dynamicContentType ) {
			defaultOptions = [];
		}
	}

	if ( 'generateblocks/image' === name ) {
		defaultOptions.splice( 2, 0, {
			value: 'single-image', label: __( 'Single image', 'generateblocks' ),
		} );
	}

	return applyFilters(
		'generateblocks.editor.dynamicContent.linkTypes',
		defaultOptions,
		dynamicContentType
	);
};

export default ( {
	linkType,
	linkMetaFieldName,
	dynamicContentType,
	setAttributes,
	isPagination,
	isActive,
	name,
} ) => {
	const options = getOptions( dynamicContentType, isPagination, name );

	if ( options.length === 0 ) {
		return null;
	}

	const value = options.filter( ( option ) => ( option.value === linkType ) );

	return (
		<>
			{ isActive &&
				<>
					<AdvancedSelect
						id={ 'gblocks-select-link-type-control' }
						label={ __( 'Link type', 'generateblocks' ) }
						placeholder={ __( 'Link type', 'generateblocks' ) }
						options={ options }
						value={ value }
						onChange={ ( option ) => setAttributes( { dynamicLinkType: option.value } ) }
					/>

					{ 'post-meta' === linkType &&
						<TextControl
							label={ __( 'Meta field name', 'generateblocks' ) }
							value={ linkMetaFieldName }
							onChange={ ( newValue ) => setAttributes( { linkMetaFieldName: newValue } ) }
						/>
					}
				</>
			}
		</>
	);
};