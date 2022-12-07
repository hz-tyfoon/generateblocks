import { SelectControl } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import { useContext } from '@wordpress/element';
import { useDeviceType } from '../../../hooks';
import ControlsContext from '../../../block-context';

export default function TagName( props ) {
	const {
		onChange,
		tagName,
	} = props;

	const [ device ] = useDeviceType();
	const {
		supports: {
			htmlTags,
		},
	} = useContext( ControlsContext );

	const tagNames = applyFilters(
		'generateblocks.editor.containerTagNames',
		htmlTags.tags,
		{ ...props, deviceType: device }
	);

	return (
		<>
			{ htmlTags.enabled && 'Desktop' === device &&
				<SelectControl
					label={ __( 'Tag Name', 'generateblocks' ) }
					value={ tagName }
					options={ tagNames }
					onChange={ onChange }
				/>
			}
		</>
	);
}
