import { useState, useMemo, useRef } from '@wordpress/element';
import { ImagePlaceholder } from './ImagePlaceholder.jsx';
import { useDispatch } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';

export function Image( {
	elementAttributes,
	temporaryURL,
	onSelectImage,
	onSelectURL,
	onUploadError,
	dynamicTagValue,
	isSelected,
	clientId,
} ) {
	const imageRef = useRef();
	const [
		{ loadedNaturalWidth, loadedNaturalHeight },
		setLoadedNaturalSize,
	] = useState( {} );
	const { selectBlock } = useDispatch( blockEditorStore );

	// Get naturalWidth and naturalHeight from image ref, and fall back to loaded natural
	// width and height. This resolves an issue in Safari where the loaded natural
	// witdth and height is otherwise lost when switching between alignments.
	// See: https://github.com/WordPress/gutenberg/pull/37210.
	const { naturalWidth, naturalHeight } = useMemo( () => {
		return {
			naturalWidth:
				imageRef.current?.naturalWidth ||
				loadedNaturalWidth ||
				undefined,
			naturalHeight:
				imageRef.current?.naturalHeight ||
				loadedNaturalHeight ||
				undefined,
		};
	}, [
		loadedNaturalWidth,
		loadedNaturalHeight,
		imageRef.current?.complete,
	] );

	const imageSrc = dynamicTagValue || temporaryURL || elementAttributes?.src;

	/* eslint-disable jsx-a11y/alt-text */
	// The alt tag below is added via elementAttributes.

	/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
	// The img element below is interactive if it's not selected.
	// This allows us to not render the surrounding `<div>` with the `blockProps`
	// unless the image is selected.

	return (
		<>
			{ ( !! temporaryURL || !! elementAttributes?.src ) ? (
				<img
					width={ naturalWidth }
					height={ naturalHeight }
					{ ...elementAttributes }
					src={ imageSrc }
					ref={ imageRef }
					onLoad={ ( event ) => {
						setLoadedNaturalSize( {
							loadedNaturalWidth: event.target?.naturalWidth,
							loadedNaturalHeight: event.target?.naturalHeight,
						} );
					} }
					onClick={ () => {
						if ( isSelected ) {
							return;
						}

						selectBlock( clientId );
					} }
					onKeyDown={ () => {
						if ( isSelected ) {
							return;
						}

						selectBlock( clientId );
					} }
					role={ ! isSelected ? 'button' : undefined }
					tabIndex={ ! isSelected ? 0 : undefined }
				/>
			) : (
				<ImagePlaceholder
					onSelectImage={ onSelectImage }
					onSelectURL={ onSelectURL }
					onUploadError={ onUploadError }
				/>
			) }
		</>
	);

	/* eslint-enable jsx-a11y/alt-text */
	/* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
}