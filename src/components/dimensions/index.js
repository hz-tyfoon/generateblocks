/**
 * External dependencies
 */
import classnames from 'classnames';
import './editor.scss';
import getIcon from '../../utils/get-icon';

/**
 * WordPress dependencies
 */
const { __, _x, sprintf } = wp.i18n;
const { Component, Fragment } = wp.element;
const { BaseControl, Button, Tooltip } = wp.components;

class DimensionsControl extends Component {

	constructor( props ) {
		super( ...arguments );
		this.onChangeTop = this.onChangeTop.bind( this );
		this.onChangeRight = this.onChangeRight.bind( this );
		this.onChangeBottom = this.onChangeBottom.bind( this );
		this.onChangeLeft = this.onChangeLeft.bind( this );
		this.onChangeAll = this.onChangeAll.bind( this );
		this.syncUnits = this.syncUnits.bind( this );
	}

	onReset( type ) {
		this.props.setAttributes( { [ this.props[ type ] ]: '' } );
	}

	onChangeTop( value ) {
		this.props.setAttributes( { [ this.props[ 'attrTop' ] ]: value } );
	}

	onChangeRight( value ) {
		this.props.setAttributes( { [ this.props[ 'attrRight' ] ]: value } );
	}

	onChangeBottom( value ) {
		this.props.setAttributes( { [ this.props[ 'attrBottom' ] ]: value } );
	}

	onChangeLeft( value ) {
		this.props.setAttributes( { [ this.props[ 'attrLeft' ] ]: value } );
	}

	onChangeAll( value ) {
		this.props.setAttributes( { [ this.props[ 'attrTop' ] ]: value, [ this.props[ 'attrRight' ] ]: value, [ this.props[ 'attrBottom' ] ]: value, [ this.props[ 'attrLeft' ] ]: value } );
	}

	syncUnits( value ) {
		var numbers = [ this.props[ 'valueTop' ], this.props[ 'valueRight' ], this.props[ 'valueBottom' ], this.props[ 'valueLeft' ]];

		const syncValue = Math.max.apply( null, numbers )

		this.props.setAttributes( { [ this.props[ 'attrSyncUnits' ] ]: ! this.props[ 'syncUnits' ] } )
		this.props.setAttributes( { [ this.props[ 'attrTop' ] ]: syncValue, [ this.props[ 'attrRight' ] ]: syncValue, [ this.props[ 'attrBottom' ] ]: syncValue, [ this.props[ 'attrLeft' ] ]: syncValue } );
	}

	render() {

		const {
			className,
			label = __( 'Margin' ),
			left = true,
			onChange,
			reset = false,
			right = true,
			setAttributes,
			top = true,
			type = 'margin',
			unit,
			units = true,
			valueBottom,
			valueLeft,
			valueRight,
			valueTop,
			syncUnits,
			attrTop,
			attrRight,
			attrBottom,
			attrLeft,
			attrSyncUnits,
			labelTop = __( 'Top', 'flex-blocks' ),
			labelRight = __( 'Right', 'flex-blocks' ),
			labelBottom = __( 'Bottom', 'flex-blocks' ),
			labelLeft = __( 'Left', 'flex-blocks' ),
		} = this.props;

		const classes = classnames(
			'components-base-control',
			'components-fx-dimensions-control', {
			}
		);

		const onChangeTopValue = ( event ) => {
			var newValue = event.target.value;

			if ( '' === newValue ) {
				this.onReset( 'attrTop' );
				return;
			}

			if ( this.props[ 'syncUnits' ] ) {
				this.onChangeAll( newValue );
			} else {
				this.onChangeTop( newValue );
			}
		};

		const onChangeRightValue = ( event ) => {
			var newValue = event.target.value;

			if ( '' === newValue ) {
				this.onReset( 'attrRight' );
				return;
			}

			if ( this.props[ 'syncUnits' ] ) {
				this.onChangeAll( newValue );
			} else {
				this.onChangeRight( newValue );
			}
		};

		const onChangeBottomValue = ( event ) => {
			var newValue = event.target.value;

			if ( '' === newValue ) {
				this.onReset( 'attrBottom' );
				return;
			}

			if ( this.props[ 'syncUnits' ] ) {
				this.onChangeAll( newValue );
			} else {
				this.onChangeBottom( newValue );
			}
		};

		const onChangeLeftValue = ( event ) => {
			var newValue = event.target.value;

			if ( '' === newValue ) {
				this.onReset( 'attrLeft' );
				return;
			}

			if ( this.props[ 'syncUnits' ] ) {
				this.onChangeAll( newValue );
			} else {
				this.onChangeLeft( newValue );
			}
		};

		return (
			<Fragment>
				<div className={ classes }>
					<div className='components-fx-dimensions-control__inputs'>
						<input
							className="components-fx-dimensions-control__number"
							type="number"
							onChange={ onChangeTopValue }
							aria-label={ sprintf( __( '%s Top' ), label ) }
							value={ valueTop ? valueTop : '' }
							min={ type == 'padding' ? 0 : undefined }
							data-attribute={ type }
						/>
						<input
							className="components-fx-dimensions-control__number"
							type="number"
							onChange={ onChangeRightValue }
							aria-label={ sprintf( __( '%s Right' ), label ) }
							value={ valueRight ? valueRight : '' }
							min={ type == 'padding' ? 0 : undefined }
							data-attribute={ type }
						/>
						<input
							className="components-fx-dimensions-control__number"
							type="number"
							onChange={ onChangeBottomValue }
							aria-label={ sprintf( __( '%s Bottom' ), label ) }
							value={ valueBottom ? valueBottom : '' }
							min={ type == 'padding' ? 0 : undefined }
							data-attribute={ type }
						/>
						<input
							className="components-fx-dimensions-control__number"
							type="number"
							onChange={ onChangeLeftValue }
							aria-label={ sprintf( __( '%s Left' ), label ) }
							value={ valueLeft ? valueLeft : '' }
							min={ type == 'padding' ? 0 : undefined }
							data-attribute={ type }
						/>
						<Tooltip text={ !! syncUnits ? __( 'Unsync' ) : __( 'Sync' ) } >
							<Button
								className="components-fx-dimensions-control_sync"
								aria-label={ __( 'Sync Units' ) }
								isPrimary={ syncUnits ? syncUnits : false }
								aria-pressed={ syncUnits ? syncUnits : false }
								onClick={ ( value ) => this.syncUnits( value, '' ) }
								isSmall
							>
								{ !! syncUnits ? getIcon( 'sync' ) : getIcon( 'sync' ) }
							</Button>
						</Tooltip>
					</div>

					<div className='components-fx-dimensions-control__input-labels'>
						<span className='components-fx-dimensions-control__number-label'>{  labelTop }</span>
						<span className='components-fx-dimensions-control__number-label'>{  labelRight }</span>
						<span className='components-fx-dimensions-control__number-label'>{  labelBottom }</span>
						<span className='components-fx-dimensions-control__number-label'>{  labelLeft }</span>
						<span className='components-fx-dimensions-control__number-label'></span>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default DimensionsControl;