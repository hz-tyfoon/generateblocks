import buildCSS from '../../../utils/build-css';
import LayoutCSS from '../../../extend/inspector-control/controls/layout/components/LayoutCSS';
import FlexChildCSS from '../../../extend/inspector-control/controls/flex-child-panel/components/FlexChildCSS';
import SizingCSS from '../../../extend/inspector-control/controls/sizing/components/SizingCSS';
import SpacingCSS from '../../../extend/inspector-control/controls/spacing/components/SpacingCSS';
import TypographyCSS from '../../../extend/inspector-control/controls/typography/components/TypographyCSS';

import {
	Component,
} from '@wordpress/element';

import {
	applyFilters,
} from '@wordpress/hooks';

export default class MobileCSS extends Component {
	render() {
		const attributes = applyFilters( 'generateblocks.editor.cssAttrs', this.props.attributes, this.props );

		const {
			clientId,
		} = this.props;

		const {
			uniqueId,
			element,
			paddingTopMobile,
			paddingRightMobile,
			paddingBottomMobile,
			paddingLeftMobile,
			borderSizeTopMobile,
			borderSizeRightMobile,
			borderSizeBottomMobile,
			borderSizeLeftMobile,
			borderRadiusTopRightMobile,
			borderRadiusBottomRightMobile,
			borderRadiusBottomLeftMobile,
			borderRadiusTopLeftMobile,
			removeText,
			displayMobile,
			inlineWidthMobile,
			iconStyles,
		} = attributes;

		const selector = element + '.gb-headline-' + uniqueId;
		let cssObj = [];

		cssObj[ '.editor-styles-wrapper ' + selector ] = [ {
			'padding-top': paddingTopMobile,
			'padding-right': paddingRightMobile,
			'padding-bottom': paddingBottomMobile,
			'padding-left': paddingLeftMobile,
			'border-top-left-radius': borderRadiusTopLeftMobile,
			'border-top-right-radius': borderRadiusTopRightMobile,
			'border-bottom-right-radius': borderRadiusBottomRightMobile,
			'border-bottom-left-radius': borderRadiusBottomLeftMobile,
		} ];

		TypographyCSS( cssObj, '.editor-styles-wrapper ' + selector, attributes.typography, 'Mobile' );
		SpacingCSS( cssObj, '.editor-styles-wrapper ' + selector, attributes, 'Mobile' );
		LayoutCSS( cssObj, '.editor-styles-wrapper ' + selector, attributes, 'Mobile' );
		SizingCSS( cssObj, '.editor-styles-wrapper ' + selector, attributes, 'Mobile' );
		FlexChildCSS( cssObj, '.editor-styles-wrapper ' + selector, attributes, 'Mobile' );

		if ( borderSizeTopMobile || borderSizeRightMobile || borderSizeBottomMobile || borderSizeLeftMobile ) {
			cssObj[ '.editor-styles-wrapper ' + selector ].push( {
				'border-top-width': borderSizeTopMobile,
				'border-right-width': borderSizeRightMobile,
				'border-bottom-width': borderSizeBottomMobile,
				'border-left-width': borderSizeLeftMobile,
				'border-style': 'solid',
			} );
		}

		cssObj[ selector + ' .gb-icon' ] = [ {
			'padding-top': ! removeText ? iconStyles?.paddingTopMobile : null,
			'padding-right': ! removeText ? iconStyles?.paddingRightMobile : null,
			'padding-bottom': ! removeText ? iconStyles?.paddingBottomMobile : null,
			'padding-left': ! removeText ? iconStyles?.paddingLeftMobile : null,
		} ];

		cssObj[ selector + ' .gb-icon svg' ] = [ {
			width: iconStyles?.widthMobile,
			height: iconStyles?.heightMobile,
		} ];

		if ( inlineWidthMobile ) {
			cssObj[ '.gb-is-root-block[data-block="' + clientId + '"]' ] = [ {
				display: displayMobile,
			} ];
		}

		cssObj = applyFilters( 'generateblocks.editor.mobileCSS', cssObj, this.props, 'headline' );

		return (
			<style>{ buildCSS( cssObj ) }</style>
		);
	}
}
