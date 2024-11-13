import { useEffect, useMemo } from '@wordpress/element';
import { InspectorAdvancedControls } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

import { convertInlineStyleStringToObject } from '@utils/convertInlineStyleStringToObject';

export const booleanAttributes = [
	'allowfullscreen',
	'async',
	'autofocus',
	'autoplay',
	'checked',
	'controls',
	'default',
	'defer',
	'disabled',
	'formnovalidate',
	'hidden',
	'ismap',
	'itemscope',
	'loop',
	'multiple',
	'muted',
	'nomodule',
	'novalidate',
	'open',
	'readonly',
	'required',
	'reversed',
	'selected',
];

function shallowEqual( obj1, obj2 ) {
	if ( obj1 === obj2 ) {
		return true;
	}

	if ( ! obj1 || ! obj2 ) {
		return false;
	}

	const keys1 = Object.keys( obj1 );
	const keys2 = Object.keys( obj2 );

	if ( keys1.length !== keys2.length ) {
		return false;
	}

	for ( const key of keys1 ) {
		if ( obj1[ key ] !== obj2[ key ] ) {
			return false;
		}
	}

	return true;
}

export function withHtmlAttributes( WrappedComponent ) {
	return ( ( props ) => {
		const {
			attributes,
			setAttributes,
			context,
		} = props;

		const {
			htmlAttributes = {},
			uniqueId,
		} = attributes;

		const { style = '', href, ...otherAttributes } = htmlAttributes;
		const inlineStyleObject = typeof style === 'string'
			? convertInlineStyleStringToObject( style )
			: style;
		const combinedAttributes = {
			...otherAttributes,
			style: inlineStyleObject,
			'data-gb-id': uniqueId,
			'data-context-post-id': context?.postId ?? 0,
		};
		const frontendHtmlAttributes = useMemo( () => {
			if ( Array.isArray( htmlAttributes ) ) {
				return {};
			}

			return htmlAttributes;
		}, [ JSON.stringify( htmlAttributes ) ] );

		useEffect( () => {
			// Create a shallow copy of the htmlAttributes object.
			const updatedHtmlAttributes = { ...htmlAttributes };

			// Loop through the htmlAttributes object and delete those with invalid values.
			Object.keys( updatedHtmlAttributes ).forEach( ( key ) => {
				const value = updatedHtmlAttributes[ key ];

				// Remove non-boolean attributes if they have empty values.
				if ( ! booleanAttributes.includes( key ) && '' === value ) {
					delete updatedHtmlAttributes[ key ];
				}

				// Remove any values that are not a simple string.
				if ( 'string' !== typeof value && 'boolean' !== typeof value ) {
					delete updatedHtmlAttributes[ key ];
				}

				// We add the `class` attribute elsewhere.
				if ( 'class' === key ) {
					delete updatedHtmlAttributes[ key ];
				}
			} );

			// Update the block's htmlAttributes if there are changes
			if ( ! shallowEqual( updatedHtmlAttributes, htmlAttributes ) ) {
				setAttributes( { htmlAttributes: updatedHtmlAttributes } );
			}
		}, [ JSON.stringify( htmlAttributes ) ] );

		return (
			<>
				<WrappedComponent
					{ ...props }
					editorHtmlAttributes={ combinedAttributes }
					htmlAttributes={ frontendHtmlAttributes }
				/>

				<InspectorAdvancedControls>
					<TextControl
						label="HTML ID"
						value={ htmlAttributes.id }
						onChange={ ( value ) => {
							setAttributes( {
								htmlAttributes: {
									...htmlAttributes,
									id: value,
								},
							} );
						} }
					/>
				</InspectorAdvancedControls>
			</>
		);
	} );
}
