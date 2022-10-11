import defaultContext from './default';
import { __ } from '@wordpress/i18n';
import { defaultsDeep } from 'lodash';

const containerContext = defaultsDeep( {
	id: 'container',
	supports: {
		responsiveTabs: true,
		settingsPanel: {
			enabled: true,
			label: __( 'Layout', 'generateblocks' ),
			icon: 'layout',
		},
		sizing: {
			enabled: true,
			maxWidth: true,
			useGlobalMaxWidth: true,
		},
		typography: {
			enabled: true,
			fontWeight: true,
			textTransform: true,
			fontSize: true,
			fontFamily: true,
		},
		spacing: {
			enabled: true,
			minimumHeight: true,
			verticalAlignment: true,
			zIndex: true,
			innerZIndex: false,
			dimensions: [
				{
					type: 'padding',
					label: __( 'Padding', 'generateblocks' ),
					units: [ 'px', 'em', '%' ],
				},
				{
					type: 'margin',
					label: __( 'Margin', 'generateblocks' ),
					units: [ 'px', 'em', '%' ],
				},
				{
					type: 'borderSize',
					label: __( 'Border Size', 'generateblocks' ),
					units: [ 'px' ],
				},
				{
					type: 'borderRadius',
					label: __( 'Border Radius', 'generateblocks' ),
					units: [ 'px', 'em', '%' ],
				},
			],
		},
		colors: {
			enabled: true,
			elements: [
				{
					group: 'background',
					label: __( 'Background', 'generateblocks' ),
					items: [
						{
							attribute: 'backgroundColor',
							alpha: true,
						},
					],
				},
				{
					group: 'text',
					label: __( 'Text', 'generateblocks' ),
					items: [
						{
							attribute: 'textColor',
						},
					],
				},
				{
					group: 'link',
					label: __( 'Link', 'generateblocks' ),
					items: [
						{
							attribute: 'linkColor',
						},
						{
							tooltip: __( 'Hover', 'generateblocks' ),
							attribute: 'linkColorHover',
						},
					],
				},
				{
					group: 'border',
					label: __( 'Border', 'generateblocks' ),
					items: [
						{
							attribute: 'borderColor',
							alpha: true,
						},
					],
				},
			],
		},
		backgroundPanel: {
			enabled: true,
		},
		shapesPanel: {
			enabled: true,
		},
	},
}, defaultContext );

export default containerContext;
