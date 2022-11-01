import { Link } from 'react-router-dom';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import config from '~/config';
import MenuMb from '~/components/Iconmenu/IconMenu';
import HeaderSearch from '~/components/headerSearch/HeaderSearch';
import Avatar from '~/components/avatar/Avartar';
import SearchMb from '~/components/searchMb/SearchMb';
import logo from '~/assets/images/logo/logo.png';
import { show } from '~/components/searchMb/searchMbSlice';
import BellHeader from '~/components/bellheader';
import HeaderNotify from '~/components/headernotify';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
	const dispatch = useDispatch();
	const login = useSelector((state) => state.Login);
	const [toggle, setToggle] = useState(false);
	const [user, setUser] = useState(false);
	const ref1 = useRef();
	const ref2 = useRef();
	const ref3 = useRef();

	// chữ chạy
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const toRotate = ['Bkt Company', 'Thông minh', 'Hiệu quả'];
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);
	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex((prevIndex) => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	useLayoutEffect(() => {
		setUser(localStorage.getItem('token'));
	}, []);

	const handleTogle = () => {
		setToggle(false);
	};
	const handleSetToggle = () => {
		setToggle(!toggle);
	};

	useEffect(() => {
		const hideSearchMb = (e) => {
			if (!ref1.current.contains(e.target) && !ref2.current.contains(e.target)) {
				const action = show(false);
				dispatch(action);
			}
		};
		document.body.addEventListener('click', hideSearchMb);
		return () => document.body.removeEventListener('click', hideSearchMb);
	}, []);

	useEffect(() => {
		const hideNotifyBell = (e) => {
			if (!ref3.current.contains(e.target)) {
				setToggle(false);
			}
		};
		document.body.addEventListener('click', hideNotifyBell);
		return () => document.body.removeEventListener('click', hideNotifyBell);
	}, []);

	return (
		<div className={cx('wrapper')}>
			<header className={cx('custom-container ', 'header', 'height-header')}>
				<div className={cx('logo')}>
					<div className={cx('logo')}>
						<SearchMb ref={ref1} />
						<Link to={config.routes.home}>
							<div className={cx('logo-icon-mb')}>
								<img className={cx('logo-img-mb')} src={logo} alt="" />
							</div>
						</Link>
						<div className={cx('logo-name', 'hide-name')}>
							<Link to={config.routes.home}>
								<h5>Hệ thống thư viện điện tử</h5>
								<h4
									style={{
										borderRight: '2px solid #ccc',
										width: 'max-content',
										marginLeft: '20px',
									}}
								>
									{text}
								</h4>
							</Link>
						</div>
					</div>
				</div>
				<HeaderSearch ref={ref2} />

				<Link className={cx('logo-icon')} to={config.routes.home}>
					<div>
						<img className={cx('logo-img')} src={logo} alt="" />
					</div>
				</Link>

				<div className={cx('btn-login')}>
					{login[0] !== undefined || user ? (
						<div className={cx('notify-avatar', 'd-flex align-items-center ')}>
							<Avatar />

							<div className={cx('box')}>
								<HeaderNotify active1={toggle} onClick={handleTogle} />
							</div>

							<span ref={ref3}>
								<BellHeader onClick={handleSetToggle} />
							</span>
						</div>
					) : (
						<Link to="/login" className={cx('header-btn', 'hide-login')}>
							Đăng nhập
						</Link>
					)}
					<div>
						<MenuMb />
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;
