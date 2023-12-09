import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';
import { useCallback } from '@wordpress/element';

const Display = function Display( { value, onChange, label, setControlGlobalStyle } ) {
	const filteredLabel = useCallback( applyFilters(
		'generateblocks.editor.control.label',
		label,
		value,
		'display',
		setControlGlobalStyle,
	), [ value ] );

	const onChangeHandler = useCallback( onChange, [ value ] );

	return (
		<SelectControl
			label={ filteredLabel }
			options={ [
				{ label: __( 'Default', 'generateblocks' ), value: '' },
				{ label: 'Block', value: 'block' },
				{ label: 'Inline Block', value: 'inline-block' },
				{ label: 'Flex', value: 'flex' },
				{ label: 'Inline Flex', value: 'inline-flex' },
				{ label: 'Inline', value: 'inline' },
			] }
			value={ value }
			onChange={ onChangeHandler }
		/>
	);
};

export { Display };
