import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import PanelArea from '../../../components/panel-area';
import { useEffect, useMemo, useState } from '@wordpress/element';
import SelectQueryParameter from './inspector-controls/SelectQueryParameter';
import AddQueryParameterButton from './inspector-controls/AddQueryParameterButton';
import ParameterList from './inspector-controls/parameter-list';
import useQueryReducer from '../hooks/useQueryReducer';
import isEmpty from '../../../utils/object-is-empty';
import queryParameterOptions from '../query-parameters';
import getIcon from '../../../utils/get-icon';
import { ToggleControl, PanelBody } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { isEqual } from 'lodash';

export default ( { attributes, setAttributes, clientId } ) => {
	const { queryState, insertParameters, setParameter, removeParameter } = useQueryReducer();
	const [ displayParameterSelect, setDisplayParameterSelect ] = useState( false );

	useEffect( () => {
		if ( ! isEmpty( attributes.query ) ) {
			insertParameters( attributes.query );
		} else {
			insertParameters( {
				post_type: 'post',
				per_page: 10,
			} );
		}
	}, [] );

	useEffect( () => {
		if ( ! isEmpty( queryState ) && ! isEqual( attributes.query, queryState ) ) {
			setAttributes( { query: queryState } );
		}
	}, [ queryState ] );

	const {
		getBlock,
	} = useSelect( ( select ) => select( 'core/block-editor' ), [] );
	const { selectBlock } = useDispatch( 'core/block-editor' );

	const parameterOptions = useMemo( () => (
		queryParameterOptions.map( ( parameter ) => {
			parameter.isDisabled = ! parameter.isRepeatable && Object.keys( queryState ).includes( parameter.id );

			return parameter;
		} )
	), [ queryState ] );

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Layout', 'generateblocks' ) }
				icon={ getIcon( 'layout' ) }
				className="gblocks-action-panel gblocks-panel-label"
				onToggle={ () => {
					const thisBlock = getBlock( clientId );

					if ( thisBlock ) {
						const gridBlock = thisBlock?.innerBlocks[ 0 ];

						if ( gridBlock ) {
							selectBlock( gridBlock.clientId );
						}
					}
				} }
				opened={ true }
			/>

			<PanelArea
				id={ 'queryLoopControls' }
				title={ __( 'Query Parameters', 'generateblocks' ) }
				initialOpen={ true }
				icon={ getIcon( 'query-params' ) }
				className="gblocks-panel-label"
			>
				<ToggleControl
					label={ __( 'Inherit query from template', 'generateblocks' ) }
					help={ __( 'Toggle to use the global query context that is set with the current template, such as an archive or search.', 'generateblocks' ) }
					checked={ !! attributes.inheritQuery }
					onChange={ ( value ) => setAttributes( { inheritQuery: value } ) }
				/>

				{ ! attributes.inheritQuery &&
					<>
						<ParameterList
							query={ queryState }
							setParameter={ setParameter }
							removeParameter={ removeParameter }
						/>

						{ ! displayParameterSelect &&
							<AddQueryParameterButton onClick={ () => {
								setDisplayParameterSelect( true );
							} } />
						}

						{ displayParameterSelect &&
							<SelectQueryParameter
								options={ parameterOptions }
								onChange={ ( option ) => {
									if (
										!! option.isRepeatable &&
										Array.isArray( option.default ) &&
										!! option.repeatableDefaultValue
									) {
										const parameterValue = !! queryState[ option.id ]
											? queryState[ option.id ]
											: option.default;

										setParameter( option.id, [ ...parameterValue, option.repeatableDefaultValue ] );
									} else {
										setParameter( option.id, option.default );
									}

									setDisplayParameterSelect( false );
								} }
							/>
						}
					</>
				}
			</PanelArea>
		</InspectorControls>
	);
};
