import BlockControls from './components/BlockControls';
import InspectorAdvancedControls from './components/InspectorAdvancedControls';
import ComponentCSS from './components/ComponentCSS';
import GoogleFontLink from '../../components/google-font-link';
import { Fragment, useRef, useState, useEffect } from '@wordpress/element';
import { useDeviceType } from '../../hooks';
import { compose } from '@wordpress/compose';
import { withButtonLegacyMigration, withUniqueId } from '../../hoc';
import withDynamicContent from '../../extend/dynamic-content/hoc/withDynamicContent';
import ButtonContentRenderer from './components/ButtonContentRenderer';
import wasBlockJustInserted from '../../utils/was-block-just-inserted';
import { useSelect } from '@wordpress/data';
import { withBlockContext } from '../../block-context';
import GenerateBlocksInspectorControls from "../../extend/inspector-control";

const ButtonEdit = ( props ) => {
	const {
		attributes,
		setAttributes,
		ContentRenderer = ButtonContentRenderer,
		clientId,
	} = props;

	const {
		anchor,
		ariaLabel,
		fontFamily,
		googleFont,
		googleFontVariants,
		isBlockPreview = false,
		hasButtonContainer,
		blockVersion,
	} = attributes;

	const ref = useRef( null );
	const [ computedStyles, setComputedStyles ] = useState( {} );
	const [ deviceType ] = useDeviceType( 'Desktop' );
	const {
		getBlockParents,
		getBlocksByClientId,
	} = useSelect( ( select ) => select( 'core/block-editor' ), [] );

	useEffect( () => {
		const computedButtonStyles = getComputedStyle( ref.current );

		setComputedStyles( {
			fontSize: parseInt( computedButtonStyles.fontSize ) || '',
		} );
	}, [] );

	useEffect( () => {
		const parentBlockId = getBlockParents( clientId, true );

		if ( parentBlockId.length > 0 ) {
			const parentBlocks = getBlocksByClientId( parentBlockId );

			if ( parentBlocks.length > 0 && 'generateblocks/button-container' === parentBlocks[ 0 ].name ) {
				setAttributes( { hasButtonContainer: true } );
			} else if ( !! hasButtonContainer ) {
				setAttributes( { hasButtonContainer: false } );
			}
		} else if ( !! hasButtonContainer ) {
			setAttributes( { hasButtonContainer: false } );
		}
	}, [] );

	useEffect( () => {
		// Add our default Button styles when inserted.
		if ( wasBlockJustInserted( attributes ) && ! blockVersion ) {
			setAttributes( generateBlocksStyling.button );
		}
	}, [] );

	return (
		<Fragment>
			<BlockControls
				{ ...props }
			/>

			<GenerateBlocksInspectorControls
				attributes={ attributes }
				setAttributes={ setAttributes }
				computedStyles={ computedStyles }
			/>

			<InspectorAdvancedControls
				anchor={ anchor }
				ariaLabel={ ariaLabel }
				setAttributes={ setAttributes }
			/>

			<ComponentCSS { ...props } deviceType={ deviceType } />

			<GoogleFontLink
				fontFamily={ fontFamily }
				googleFont={ googleFont }
				googleFontVariants={ googleFontVariants }
				isBlockPreview={ isBlockPreview }
			/>

			<ContentRenderer { ...props } buttonRef={ ref } />
		</Fragment>
	);
};

export default compose(
	withBlockContext,
	withDynamicContent,
	withUniqueId,
	withButtonLegacyMigration
)( ButtonEdit );
