import MigrateDimensions from '../../hoc/migrations/migrateDimensions';

describe( 'Value with unit function', () => {
	it( 'can migrate values with separate units', () => {
		const oldAttributes = {
			marginTop: '10',
			marginTopTablet: '20',
			marginUnit: 'px',
			paddingTop: '20',
			paddingTopMobile: '10',
			paddingUnit: '%',
		};

		const newAttributes = MigrateDimensions( {
			attributesToMigrate: [ 'marginTop', 'paddingTop' ],
			attributes: oldAttributes,
		} );

		expect( newAttributes ).toEqual( {
			marginTop: '10px',
			marginTopTablet: '20px',
			paddingTop: '20%',
			paddingTopMobile: '10%',
		} );
	} );

	it( 'can ignore values with included units', () => {
		const oldAttributes = {
			marginTop: '10',
			marginUnit: 'px',
			paddingTop: '20em',
			paddingUnit: '%',
		};

		const newAttributes = MigrateDimensions( {
			attributesToMigrate: [ 'marginTop', 'paddingTop' ],
			attributes: oldAttributes,
		} );

		expect( newAttributes ).toEqual( {
			marginTop: '10px',
		} );
	} );
} );
