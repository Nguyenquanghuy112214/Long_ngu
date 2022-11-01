import { useEffect, useState } from 'react';
import { BsBellFill } from 'react-icons/bs';

import classNames from 'classnames/bind';
import styles from './BellHeader.module.scss';

const cx = classNames.bind(styles);

function BellHeader({ onClick }) {
	const [hide, setHide] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setHide(true);
		}, 5000);
	}, []);

	const handleToggle = () => {
		onClick();
	};

	return (
		<div className={cx('hotline-phone-ring', 'hide-bell')} onClick={handleToggle}>
			<div
				className={
					hide ? cx('hotline-phone-ring-img-circle', 'hide') : cx('hotline-phone-ring-img-circle')
				}
			>
				<span className={cx('pps-btn-img')}>
					<BsBellFill className={cx('bell-header')} style={{ color: 'white' }} />
					<span className={cx('count')}>12</span>
				</span>
			</div>
		</div>
	);
}

export default BellHeader;
