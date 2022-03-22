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

export default ( { attributes, setAttributes } ) => {
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
		setAttributes( { query: queryState } );
	}, [ queryState ] );

	const parameterOptions = useMemo( () => (
		queryParameterOptions.map( ( parameter ) => {
			parameter.isDisabled = ! parameter.isRepeatable && Object.keys( queryState ).includes( parameter.id );

			return parameter;
		} )
	), [ queryState ] );

	return (
		<InspectorControls>
			<PanelArea
				id={ 'queryLoopControls' }
				title={ __( 'Query Parameters', 'generateblocks' ) }
				initialOpen={ true }
				icon={ getIcon( 'query-params' ) }
				className="gblocks-panel-label"
			>
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
			</PanelArea>
		</InspectorControls>
	);
};