import { Fragment } from '@wordpress/element';
import DesktopCSS from '../css/desktop';
import TabletCSS from '../css/tablet';
import TabletOnlyCSS from '../css/tablet-only';
import MobileCSS from '../css/mobile';

export default ( props ) => {
	const { deviceType } = props;

	return (
		<Fragment>
			{ deviceType &&
				<Fragment>
					{ 'Desktop' === deviceType &&
						<DesktopCSS { ...props } />
					}

					{ ( 'Tablet' === deviceType || 'Mobile' === deviceType ) &&
						<TabletCSS { ...props } />
					}

					{ 'Tablet' === deviceType &&
						<TabletOnlyCSS { ...props } />
					}

					{ 'Mobile' === deviceType &&
						<MobileCSS { ...props } />
					}
				</Fragment>
			}
		</Fragment>
	);
};