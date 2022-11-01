import { forwardRef } from 'react';
import { BsBellFill } from 'react-icons/bs';

import classNames from 'classnames/bind';
import styles from './BellHeader.module.scss';

const cx = classNames.bind(styles);

function BellHeader2({ onClick }, ref) {
	const handleToggle = () => {
		onClick();
	};

	return (
		<div className={cx('hide-bell__headermb')} onClick={handleToggle} ref={ref}>
			<span className={cx('pps-btn-img')}>
				<BsBellFill className={cx('bell-header')} style={{ color: 'white' }} />
				<span className={cx('count')}>12</span>
			</span>
		</div>
	);
}

export default forwardRef(BellHeader2);
