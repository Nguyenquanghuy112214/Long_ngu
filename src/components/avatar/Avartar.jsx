import { useState, useEffect, memo, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import { CgProfile } from 'react-icons/cg';
import { FiLogOut } from 'react-icons/fi';

import * as getProfile from '~/services/getProfile';
import anh1 from '~/assets/images/avatar/1.png';
import { logout } from '~/pages/pagelogin/loginSlice';

import classNames from 'classnames/bind';
import styles from './Account.module.scss';

const cx = classNames.bind(styles);
function Avatar() {
	const dispatch = useDispatch();
	const ref = useRef(null);
	const [user, setUser] = useState('');
	const [active, setActiveProfile] = useState(false);

	useEffect(() => {
		const APIGetProfile = async () => {
			const token = localStorage.getItem('token');
			const res = await getProfile.getProfile({ headers: { Authorization: `Bearer ${token}` } });
			setUser(res);
		};
		APIGetProfile();
	}, []);

	useEffect(() => {
		const hideProfile = (e) => {
			if (!ref.current.contains(e.target)) {
				setActiveProfile(false);
			}
		};
		document.body.addEventListener('click', hideProfile);
		return () => document.body.removeEventListener('click', hideProfile);
	}, []);

	const handleLogout = () => {
		localStorage.clear();
		dispatch(logout());
	};

	const handleActive = () => {
		setActiveProfile(!active);
	};

	return (
		<div>
			<div className={cx('wrapper', 'hide-avatar')}>
				<img className={cx('img')} src={anh1} alt="" onClick={handleActive} ref={ref} />
				<AnimatePresence>
					{active && (
						<motion.div
							initial={{ y: 10, opacity: 0 }}
							animate={{ y: active ? 26 : 0, opacity: active ? 1 : 0 }}
							exit={{ y: 50, opacity: 0, transition: { duration: 0.3 } }}
							className={cx('box')}
						>
							<ul>
								<li className={cx('header')}>
									<div className={cx('header-wrapper')}>
										<div className={cx('header-wrapper__img')}>
											<img src={anh1} alt="" />
										</div>
										<div className={cx('header-wrapper__info')}>
											<h3>{user.userName}</h3>
											<span>Học sinh</span>
										</div>
									</div>
								</li>

								<li className={cx('info')}>
									<Link to="/profile">
										<CgProfile />
										<span>Thông tin cá nhân</span>
									</Link>
								</li>

								<li className={cx('logout')}>
									<Link to="/login" onClick={handleLogout}>
										<FiLogOut />
										<span> Đăng xuất</span>
									</Link>
								</li>
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}

export default memo(Avatar);
