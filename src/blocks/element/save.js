/**
 * WordPress dependencies
 */
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';

export function Save( props ) {
	const {
		tagName: Tag,
		className,
		styles = {},
		uniqueId,
	} = props.attributes;

	const classNames = [];
	if ( className ) {
		classNames.push( className );
	}

	if ( Object.keys( styles ).length > 0 ) {
		classNames.push( `gb-element-${ uniqueId }` );
	}

	const blockProps = useBlockProps.save(
		{
			className: classNames.join( ' ' ),
		}
	);

	return (
		<Tag { ...useInnerBlocksProps.save( blockProps ) } />
	);
}
