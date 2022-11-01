import { useEffect, useState } from 'react';

import * as getProfile from '~/services/getProfile';
import bg from '~/assets/images/background/polygon.png';
import anh1 from '~/assets/images/avatar/1.png';

import classNames from 'classnames/bind';
import styles from './ProfileDetail.module.scss';

const cx = classNames.bind(styles);
function ProfileDetail() {
	const [user, setUser] = useState('');

	useEffect(() => {
		const APIGetProfile = async () => {
			const token = localStorage.getItem('token');
			const res = await getProfile.getProfile({ headers: { Authorization: `Bearer ${token}` } });
			setUser(res);
		};
		APIGetProfile();
	}, []);

	return (
		<div className={cx('row', 'wrapper')}>
			<div className={cx('col-xxl-4 col-xl-6 col-lg-6 col-md-6')}>
				<div className={cx('card', 'height-card')}>
					<div className={cx('card-header')}>
						<div className={cx('total-cart')}>
							<div className={cx('cart1')}></div>
							<div className={cx('cart2')}></div>
							<div className={cx('cart1')}></div>
						</div>
						<div className={cx('line')}></div>
					</div>
					<div
						className={cx('polygon', 'polygon-padding')}
						style={{ background: `url(${bg})  top center / cover ` }}
					>
						<div className={cx('content-bg')}>
							<h3>Thẻ thư viện</h3>
							<h2 className={cx('logo')}>LOGO</h2>
						</div>
					</div>
					<div className={cx('line2')}>
						<div className={cx('img-avatar')}>
							<img src={anh1} alt="" />
						</div>
					</div>
					<div className={cx('content')}>
						<div className={cx('content-body', 'margin-top')}>
							<div className={cx('content-body__header')}>
								<h3 className={cx('name')}>{user.userName}</h3>
								<h4 className={cx('decentralization')}>Học Sinh</h4>
							</div>
							<div className={cx('content-body__body')}>
								<span>Mã thẻ: 1xxxxxxxxxxxxx</span>
								<span>DOB: 08/08/2000</span>
								<span>Email: email@gmail.com</span>
								<span>Phone: (+84) 000 00 000</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={cx('col-xxl-8 col-xl-6 col-lg-6 col-md-6')}>a</div>
		</div>
	);
}

export default ProfileDetail;
