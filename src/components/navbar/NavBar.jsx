import { useState, memo } from 'react';
import { NavLink, Link, useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { AiOutlineRightCircle } from 'react-icons/ai';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import { pushAllNews } from './PushDataNewsSlice';
import { list2 } from '~/components/listnavbar/index';
import { postCount } from '~/components/listnavbar/postCountSlice';
import config from '~/config';
import * as getCountBook from '~/services/getCountNhomLoai';
import * as getAllNews from '~/services/getAllNews';

import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);
function Navbar() {
	const dispatch = useDispatch();
	const [active1, setActive1] = useState({});
	const { indexmenu } = useParams();
	const list = useSelector((state) => state.ShowNavBar);
	const nhomloai = useSelector((state) => state.ShowTypeGroup);
	const Menu = useSelector((state) => state.PostMenu)[0];

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

	const handlegetAllNews = async () => {
		const getNews = await getAllNews.getNews();
		dispatch(pushAllNews(getNews));
	};
	const postIndexActive = (indexActive) => {};

	return (
		<div className={cx('navbar')}>
			<div className={cx('navbar-top')}>
				<ul className={cx('wrapper')}>
					<li className={cx('header-title')}>Thư mục</li>
					{Menu !== undefined &&
						Menu.map((item, indexActive) => {
							return (
								<li
									onClick={() => postIndexActive(indexActive)}
									className={cx('li')}
									key={indexActive}
								>
									<NavLink
										to={`/lv1/${item.tenNhomLoaiAnPham}/${item.nhomLoaiAnPhamId}/${indexActive}`}
										className={cx(
											'item',
											`${+indexActive === +indexmenu ? 'active' : ''}`,
										)}
									>
										{/* <img src={item.img} alt="" /> */}
										<span className={cx('title')}>
											{item.tenNhomLoaiAnPham}
										</span>
									</NavLink>
									<Tippy placement="right" animation="scale" content="Đóng-Mở menu">
										<span
											onClick={() =>
												handleClick(indexActive, active1, item)
											}
											className={
												active1[indexActive]?.isDropdown === true
													? cx('icon', 'active1')
													: cx('icon')
											}
										>
											<AiOutlineRightCircle />
										</span>
									</Tippy>

									<motion.ul
										initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
										animate={{
											height:
												active1[indexActive]?.isDropdown === true
													? 'auto'
													: 0,
											opacity:
												active1[indexActive]?.isDropdown === true
													? 1
													: 0,
											overflow:
												active1[indexActive]?.isDropdown === true
													? 'visible'
													: 'hidden',
										}}
										transition={{
											duration: 0.3,
										}}
										className={
											active1[indexActive]?.isDropdown === true
												? cx('children', 'active2')
												: cx('children')
										}
									>
										{Menu[indexActive] !== undefined &&
											Menu[indexActive].menu_LoaiAnPhamViewModel !==
												undefined &&
											Menu[indexActive].menu_LoaiAnPhamViewModel.map(
												(book, index) => {
													return (
														<li
															className={cx('book')}
															key={index}
														>
															<Link
																to={`/grid/${
																	Menu[
																		indexActive
																	] !== undefined &&
																	Menu[indexActive]
																		.tenNhomLoaiAnPham
																}/${
																	book.tenLoaiAnPham
																}/${
																	book.loaiAnPhamId
																}/${indexActive}`}
															>
																<span>
																	<AiOutlineRightCircle />
																</span>

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
												},
											)}
									</motion.ul>
								</li>
							);
						})}
				</ul>
			</div>
			<div className={cx('navbar-bot')}>
				<ul className={cx('wrapper')}>
					<li className={cx('header-title')}>Tiện ích thư viện</li>
					{list2.map((item, index) => {
						return (
							<li key={index}>
								<Link to={item.path} onClick={handlegetAllNews} className={cx('item')}>
									<img src={item.img} alt="" />
									<span className={cx('title')}>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default memo(Navbar);
