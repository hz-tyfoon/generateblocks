
import { createContext, useContext, useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { applyFilters } from '@wordpress/hooks';
import { isEmpty } from 'lodash';

const LibraryContext = createContext( undefined );

export async function fetchLibraries( isEnabled = true ) {
	return await apiFetch( {
		path: addQueryArgs( '/generateblocks/v1/pattern-library/libraries', {
			is_enabled: isEnabled,
		} ),
		method: 'GET',
	} );
}

async function fetchLibraryCategories( libraryId, isLocal, publicKey ) {
	const pro = isLocal ? '-pro' : '';
	const response = await apiFetch( {
		path: addQueryArgs( `/generateblocks${ pro }/v1/pattern-library/categories`, {
			libraryId,
		} ),
		method: 'GET',
		headers: {
			'X-GB-Public-Key': publicKey,
			'X-GB-Library-Collection': btoa( libraryId ),
		},
	} );

	if ( response ) {
		return response.response;
	}

	return [];
}

async function fetchLibraryPatterns( libraryId, categoryId, search, isLocal, publicKey ) {
	const pro = isLocal ? '-pro' : '';
	const response = await apiFetch( {
		path: addQueryArgs( `/generateblocks${ pro }/v1/pattern-library/patterns`, {
			libraryId,
			categoryId,
			search,
		} ),
		method: 'GET',
		headers: {
			'X-GB-Public-Key': publicKey,
			'X-GB-Library-Collection': btoa( libraryId ),
		},
	} );

	if ( response ) {
		return response.response;
	}

	return [];
}

async function fetchRequiredClasses( activeLibrary ) {
	const requiredClassesApiData = applyFilters(
		'generateblocks.editor.patternLibrary.requiredClassesApiData',
		{},
		{ activeLibrary }
	);

	if ( isEmpty( requiredClassesApiData ) ) {
		return [];
	}

	const response = await apiFetch( {
		path: addQueryArgs(
			'/generateblocks-pro/v1/pattern-library/get-required-classes',
			requiredClassesApiData
		),
		method: 'GET',
	} );

	if ( response ) {
		return response.response;
	}

	return [];
}

export function LibraryProvider( { clientId, children } ) {
	const [ libraries, setLibraryData ] = useState( [] );
	const [ categories, setCategories ] = useState( [] );
	const [ patterns, setPatterns ] = useState( [] );
	const [ search, setSearch ] = useState( '' );
	const [ activeLibrary, setActiveLibrary ] = useState( '' );
	const [ publicKey, setPublicKey ] = useState( '' );
	const [ isLocal, setIsLocal ] = useState( false );
	const [ activeCategory, setActiveCategory ] = useState( '' );
	const [ activePatternId, setActivePatternId ] = useState( '' );
	const [ hoverPattern, setHoverPattern ] = useState( '' );
	const [ loading, setLoading ] = useState( false );
	const [ previewIframeWidth, setPreviewIframeWidth ] = useState( '100%' );
	const [ paginationOffset, setPaginationOffset ] = useState( 0 );
	const [ requiredClasses, setRequiredClasses ] = useState( [] );
	const defaultContext = {
		clientId,
		libraries,
		search,
		setSearch,
		activeLibrary,
		setActiveLibrary,
		activeCategory,
		setActiveCategory,
		activePatternId,
		setActivePatternId,
		categories,
		hoverPattern,
		setHoverPattern,
		patterns,
		setIsLocal,
		setPublicKey,
		loading,
		setLoading,
		previewIframeWidth,
		setPreviewIframeWidth,
		paginationOffset,
		setPaginationOffset,
		setLibraryCategories,
		setLibraryPatterns,
		setLibraries,
		requiredClasses,
		setRequiredClasses,
	};

	async function setLibraryCategories() {
		const { data } = await fetchLibraryCategories( activeLibrary.id, isLocal, publicKey );
		setCategories( data );
	}

	async function setLibraryPatterns() {
		setLoading( true );
		setPatterns( [] );

		if ( ! isLocal ) {
			const { data: fetchedRequiredClasses } = await fetchRequiredClasses( activeLibrary );
			setRequiredClasses( fetchedRequiredClasses );
		} else {
			setRequiredClasses( [] );
		}

		const { data: fetchedPatterns } = await fetchLibraryPatterns( activeLibrary.id, activeCategory, search, isLocal, publicKey );
		setPatterns( fetchedPatterns );
		setPaginationOffset( 0 );
		setLoading( false );
	}

	async function setLibraries() {
		const { data } = await fetchLibraries();

		setLibraryData( data );
		setActiveLibrary( data[ 0 ] );
		setPublicKey( data[ 0 ].publicKey );
		setIsLocal( !! data[ 0 ].isLocal );
	}

	useEffect( () => {
		( async function() {
			setLibraries();
		}() );
	}, [] );

	useEffect( () => {
		if ( activeLibrary.id ) {
			setLibraryCategories();
		}
	}, [ activeLibrary.id ] );

	useEffect( () => {
		if ( activeLibrary.id ) {
			setLibraryPatterns();
		}
	}, [ activeLibrary.id, activeCategory, search, publicKey ] );

	return (
		<LibraryContext.Provider value={ defaultContext }>
			{ children }
		</LibraryContext.Provider>
	);
}

export function useLibrary() {
	const context = useContext( LibraryContext );

	if ( ! context ) {
		throw new Error( __( 'useLibrary hook must be wrapped by a LibraryProvider.', 'generateblocks' ) );
	}

	return context;
}
