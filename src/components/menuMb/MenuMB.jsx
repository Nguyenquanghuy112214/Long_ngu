import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import { AiOutlineRightCircle } from 'react-icons/ai';
import { CgLogIn } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import config from '~/config';

import { list2 } from '~/components/listnavbar/index';
import { logout } from '~/pages/pagelogin/loginSlice';
import { postCount } from '~/components/listnavbar/postCountSlice';
import * as getCountBook from '~/services/getCountNhomLoai';
import avt from '~/assets/images/avatar/1.png';

import classNames from 'classnames/bind';
import styles from './MenuMb.module.scss';

const cx = classNames.bind(styles);

function MenuMb({ showMenu }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [user, setUser] = useState(false);
	const [active1, setActive1] = useState({});

	const list = useSelector((state) => state.ShowNavBar);
	const nhomloai = useSelector((state) => state.ShowTypeGroup);

	const handleUser = () => {
		if (user) {
			setUser(false);
			localStorage.clear();
			dispatch(logout());
		} else {
			navigate(config.routes.login);
		}
	};
	const handleClick = (index, active1) => {
		const Count = async () => {
			const res = await Promise.all(
				nhomloai[index].map(async (item, index) => {
					return await getCountBook.getCount(item.loaiAnPhamId);
				}),
			);
			dispatch(postCount(res));
		};
		Count();
		const checkActiveItem = active1[index]?.isDropdown;
		let activeNew;
		if (checkActiveItem === undefined) {
			activeNew = {
				[index]: { isDropdown: true },
			};
		} else {
			activeNew = {
				[index]: { isDropdown: !checkActiveItem },
			};
		}
		setActive1(activeNew);
	};

	useEffect(() => {
		const token = localStorage.getItem('token');
		token ? setUser(true) : setUser(false);
	}, []);
	const wrapper = {
		hidden: { opacity: 0, x: '100vw' },
		show: {
			opacity: 1,
			x: '0vw',
			transition: {
				duration: 0.2,
				staggerChildren: 0.4,
				delayChildren: 0.1,
			},
		},
		exit: {
			x: '-200vw',
			opacity: 0,
			transition: {
				duration: 0.2,
			},
		},
	};

	const container = {
		hidden: { opacity: 0, x: '100vw' },
		show: {
			opacity: 1,
			x: '0vw',
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.1,
			},
		},
		exit: {
			x: '-200vw',
			opacity: 0,
			transition: {
				duration: 0.2,
			},
		},
	};

	const listItem = {
		hidden: { opacity: 0, x: '100vw' },
		show: { opacity: 1, x: '0vw', transition: { duration: 0.3 } },
	};

	return (
		<AnimatePresence exitBeforeEnter>
			{showMenu && (
				<motion.div
					variants={wrapper}
					initial="hidden"
					animate="show"
					exit="exit"
					className={cx('navbar', 'height-navbar-mb', 'margin-navbar-mobile')}
				>
					<motion.div variants={container} className={cx('navbar-top', 'width-navbar__mb')}>
						{/* Account Start */}
						<motion.div
							variants={listItem}
							className={cx('account-wrapper', 'd-flex align-items-center')}
						>
							<div className={cx('image')}>
								<img src={avt} alt="" />
							</div>
							<div className={cx('text-account')}>
								<h3> Nguyễn Quang Huy</h3>
								<span>học sinh</span>
							</div>
						</motion.div>
						{/* Account End */}
						<motion.ul variants={listItem} className={cx('wrapper')}>
							<li className={cx('header-title')}>Thư mục</li>
							{list[0] !== undefined &&
								list[0].map((item, index) => {
									return (
										<li key={index} className={cx('li')}>
											<NavLink
												to={
													(+item.nhomLoaiAnPhamId === 1 &&
														config.routes.book) ||
													(+item.nhomLoaiAnPhamId === 2 &&
														config.routes.ebook) ||
													(+item.nhomLoaiAnPhamId === 3 &&
														config.routes.audiobook) ||
													(+item.nhomLoaiAnPhamId === 4 &&
														config.routes.video)
												}
												className={(nav) =>
													cx('item', { active: nav.isActive })
												}
											>
												{/* <img src={item.img} alt="" /> */}
												<span className={cx('title')}>
													{item.tenNhomLoaiAnPham}
												</span>
											</NavLink>

											<Tippy
												placement="right"
												animation="scale"
												content="Đóng-Mở menu"
											>
												<span
													onClick={() =>
														handleClick(index, active1, item)
													}
													className={
														active1[index]?.isDropdown === true
															? cx('icon', 'active1')
															: cx('icon')
													}
												>
													<AiOutlineRightCircle />
												</span>
											</Tippy>

											<motion.ul
												initial={{
													height: 0,
													opacity: 0,
													overflow: 'hidden',
												}}
												animate={{
													height:
														active1[index]?.isDropdown === true
															? 'auto'
															: 0,
													opacity:
														active1[index]?.isDropdown === true
															? 1
															: 0,
													overflow:
														active1[index]?.isDropdown === true
															? 'visible'
															: 'hidden',
												}}
												transition={{
													type: 'spring',
													stiffness: 80,
													duration: 3,
													staggerChildren: 2,
													// delayChildren: 6,
												}}
												className={
													active1[index]?.isDropdown === true
														? cx('children', 'active2')
														: cx('children')
												}
											>
												{nhomloai[index] !== undefined &&
													nhomloai[index].map((book, index) => {
														return (
															<li
																className={cx('book')}
																key={index}
															>
																<Link
																	to={`${
																		(item.nhomLoaiAnPhamId ===
																			1 &&
																			'/book/bookgrid') ||
																		(item.nhomLoaiAnPhamId ===
																			2 &&
																			'/ebook/ebookgrid') ||
																		(item.nhomLoaiAnPhamId ===
																			3 &&
																			'/audiobook/audiobookgrid') ||
																		(item.nhomLoaiAnPhamId ===
																			4 &&
																			'/video/videogrid')
																	}/${
																		book.tenLoaiAnPham
																	}/${
																		book.loaiAnPhamId
																	}`}
																>
																	<AiOutlineRightCircle />
																	<span>
																		{book !==
																			undefined &&
																			book.tenLoaiAnPham}
																		{/* (
																	{count[0][
																		index
																	] !== undefined &&
																		count[0][
																			index
																		].data}
																	) */}
																	</span>
																</Link>
															</li>
														);
													})}
											</motion.ul>
										</li>
									);
								})}
						</motion.ul>
						<motion.div variants={listItem} className={cx('navbar-bot')}>
							<ul className={cx('wrapper')}>
								<li className={cx('header-title')}>Tiện ích thư viện</li>
								{list2.map((item, index) => {
									return (
										<li key={index} className={cx('item-sub')}>
											<Link to={item.path}>
												<img src={item.img} alt="" />
												<span className={cx('title')}>
													{item.title}
												</span>
											</Link>
										</li>
									);
								})}
							</ul>
						</motion.div>
						<motion.div variants={listItem} className={cx('navbar-bot')}>
							<ul className={cx('wrapper')}>
								<li className={cx('header-title')}>Thông báo</li>
								{list2.map((item, index) => {
									return (
										<li key={index} className={cx('item-sub')}>
											<Link to={item.path}>
												<img src={item.img} alt="" />
												<span className={cx('title')}>
													{item.title}
												</span>
											</Link>
										</li>
									);
								})}
							</ul>
						</motion.div>
						<motion.div variants={listItem} className={cx('login')} onClick={handleUser}>
							<CgLogIn className={cx('icon-login')} />
							<span>{user ? 'Đăng xuất' : 'Đăng nhập'}</span>
						</motion.div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default memo(MenuMb);
