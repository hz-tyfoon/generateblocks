import { useBlockProps, useInnerBlocksProps, InspectorControls } from '@wordpress/block-editor';
import { useEffect, useMemo } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { BlockStyles, withUniqueId } from '@edge22/block-styles';
import RootElement from '../../components/root-element/index.js';
import { BlockSettings } from './components/BlockSettings';
import { selectorShortcuts } from '@utils/selectorShortcuts.js';
import { withStyles } from '@hoc/withStyles';
import { BlockStylesBuilder, StylesOnboarder } from '@components/index.js';
import { withHtmlAttributes } from '@hoc/withHtmlAttributes.js';
import { getBlockClasses } from '@utils/getBlockClasses.js';
import { BlockAppender } from '@components';
import { withSetBlockAttributes } from '@hoc/withSetBlockAttributes.js';

function EditBlock( props ) {
	const {
		attributes,
		setAttributes,
		clientId,
		isSelected,
		name,
		onStyleChange,
		editorHtmlAttributes,
		styles,
	} = props;

	const {
		tagName,
	} = attributes;

	const classNames = getBlockClasses(
		'gb-element',
		{
			...attributes,
			styles,
		}
	);

	useEffect( () => {
		if ( ! tagName ) {
			setAttributes( { tagName: 'div' } );
		}
	}, [ tagName ] );

	const blockProps = useBlockProps(
		{
			className: classNames.join( ' ' ).trim(),
			...editorHtmlAttributes,
		}
	);
	const innerBlocksProps = useInnerBlocksProps(
		blockProps,
		{
			renderAppender: () => (
				<BlockAppender
					clientId={ clientId }
					isSelected={ isSelected }
					attributes={ attributes }
				/>
			),
		}
	);
	const TagName = tagName || 'div';
	const shortcuts = useMemo( () => {
		const visibleSelectors = [
			{
				label: __( 'Main', 'generateblocks' ),
				value: '',
			},
		];

		if ( 'a' === tagName ) {
			visibleSelectors.push(
				{
					label: __( 'Hover', 'generateblocks' ),
					value: '&:is(:hover, :focus)',
				}
			);
		} else {
			visibleSelectors.push(
				{
					label: __( 'Links', 'generateblocks' ),
					value: 'a',
				}
			);
		}

		return {
			selectorShortcuts,
			visibleShortcuts: visibleSelectors,
		};
	}, [ tagName ] );

	return (
		<>
			<InspectorControls>
				<StylesOnboarder />
				<BlockStyles
					settingsTab={ (
						<BlockSettings
							{ ...props }
						/>
					) }
					stylesTab={ (
						<BlockStylesBuilder
							attributes={ attributes }
							setAttributes={ setAttributes }
							shortcuts={ shortcuts }
							onStyleChange={ onStyleChange }
							name={ name }
						/>
					) }
				/>
			</InspectorControls>
			<RootElement
				name={ name }
				clientId={ clientId }
			>
				<TagName { ...innerBlocksProps } />
			</RootElement>
		</>
	);
}

const Edit = compose(
	withSetBlockAttributes,
	withHtmlAttributes,
	withStyles,
	withUniqueId
)( EditBlock );

export { Edit };
