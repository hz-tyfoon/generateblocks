import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import TaxonomySelectControl from '../../../components/taxonomy-select-control';
import TaxonomiesSelect from '../../../components/taxonomies-select';
import { useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

export default function AdjacentPostControl( props ) {
	const {
		attributeName = 'adjacentPost',
		dynamicSource,
		postType,
		postId,
		adjacentPost = {
			inSameTerm: false,
			taxonomy: 'category',
			excludeTerms: [],
		},
		setAttributes,
	} = props;

	useEffect( () => {
		if ( 'adjacentPostLink' === attributeName ) {
			return;
		}

		( async function() {
			const data = await apiFetch( {
				path: addQueryArgs( '/generateblocks/v1/dynamic-content/adjacent-post', {
					postId,
					previous: 'previous-post' === dynamicSource,
					inSameTerm: adjacentPost.inSameTerm,
					taxonomy: adjacentPost.taxonomy || 'category',
					excludeTerms: adjacentPost.excludeTerms,
				} ),
				method: 'GET',
			} );

			if ( data?.success && data?.response ) {
				setAttributes( {
					postType: data.response.post_type,
					postId: data.response.ID,
				} );

				return;
			}

			setAttributes( { postType: '', postId: '' } );
		}() );
	}, [ dynamicSource, postType, postId, JSON.stringify( adjacentPost ), attributeName ] );

	return (
		<>
			<ToggleControl
				label={ __( 'In same term', 'generateblocks' ) }
				help={ __( 'Whether post should be in the same taxonomy term', 'generateblocks' ) }
				checked={ adjacentPost.inSameTerm }
				onChange={ ( inSameTerm ) => {
					if ( inSameTerm ) {
						setAttributes( { [ attributeName ]: { ...adjacentPost, inSameTerm } } );
					} else {
						setAttributes( {
							[ attributeName ]: {
								...adjacentPost,
								inSameTerm: false,
								taxonomy: '',
								excludeTerms: [],
							},
						} );
					}
				} }
			/>

			{ adjacentPost.inSameTerm &&
			<>
				<TaxonomySelectControl
					postType={ postType }
					taxonomy={ adjacentPost.taxonomy }
					onChange={ ( option ) => {
						setAttributes( { [ attributeName ]: { ...adjacentPost, taxonomy: option.value } } );
					} }
				/>

				<TaxonomiesSelect
					label={ __( 'Exclude terms', 'generateblocks' ) }
					help={ __( 'List of excluded terms', 'generateblocks' ) }
					placeholder={ __( 'Select terms…', 'generateblocks' ) }
					taxonomy={ adjacentPost.taxonomy }
					value={ adjacentPost.excludeTerms }
					onChange={ ( options ) => {
						const termIds = options.map( ( option ) => option.value );

						setAttributes( { [ attributeName ]: { ...adjacentPost, excludeTerms: termIds } } );
					} }
				/>
			</>
			}
		</>
	);
}
