import { useEffect, useLayoutEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { number } from 'yup';
import { Link, useParams, useLocation } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import _ from 'lodash';
import { motion, useInView } from 'framer-motion';

import BookCart from '~/components/bookcard/BookCard';
import { postIDBook } from '~/components/listnavbar/postIDBookSlice';

import * as getByLoaiAPID from '~/services/getByLoaiAPID';

import classNames from 'classnames/bind';
import styles from './Listbook.module.scss';

const cx = classNames.bind(styles);

function Listbook({ idTypePublication, typeGroupType, nameTypePublication, i, index }) {
	const dispatch = useDispatch();
	const Menu = useSelector((state) => state.PostMenu)[0];
	const { indexmenu } = useParams();

	const dataRelatedBooks = useSelector((state) => state.pushRelateBook);
	const [urlprepagebook, setUrlPrePageBook] = useState('');
	const listbook = useSelector((state) => state.ShowTypeGroup);
	const state = useSelector((state) => state.postIDBook);
	const ref = useRef();
	const isInView = useInView(ref);
	const [active, setActive] = useState(false);
	const [url, setUrl] = useState('');
	const [title, setTitle] = useState('');
	const [check, setCheck] = useState(number);
	const [urlnextpage, setUrlNextPage] = useState('');
	const [datapagebook, setDataPageBook] = useState([]);
	const location = useLocation();

	const pathname = window.location.pathname;
	const { keyword } = useParams();

	useEffect(() => {
		setTimeout(() => setActive(true), 500);
		return () => clearTimeout(active);
	}, []);

	useEffect(() => {
		let nameHeadListBook;
		if (keyword === 'bookdetail') {
			nameHeadListBook = 'Sách liên quan';
			setCheck(0);
		} else if (keyword === 'ebookdetail') {
			nameHeadListBook = 'Sách liên quan';
			setCheck(1);
		} else if (typeGroupType === undefined) {
			nameHeadListBook = nameTypePublication;
		} else {
			nameHeadListBook = typeGroupType.tenNhomLoaiAnPham;
		}

		setTitle(nameHeadListBook);
	}, []);

	// set idpost lên theo url
	useEffect(() => {
		if (idTypePublication !== undefined) {
			dispatch(
				postIDBook({
					data: idTypePublication,
					index:
						(pathname === '/book' && 1) ||
						(pathname === '/ebook' && 2) ||
						(pathname === '/audiobook' && 3) ||
						(pathname === '/video' && 4),
				}),
			);
		}
	}, []);

	useEffect(() => {
		const getCountBook = async () => {
			const res = await Promise.all(
				Menu[indexmenu] !== undefined &&
					Menu[indexmenu].menu_LoaiAnPhamViewModel !== undefined &&
					Menu[indexmenu].menu_LoaiAnPhamViewModel.map(async (item, index) => {
						return await getByLoaiAPID.getByLoaiAPID(item.loaiAnPhamId);
					}),
			);

			console.log('res', res);

			setDataPageBook(res);
		};
		getCountBook();
	}, [state]);

	// set url ở trang home và trang detail
	useLayoutEffect(() => {
		if (keyword === 'bookdetail' || (location.pathname === '/' && typeGroupType.nhomLoaiAnPhamID === 1)) {
			setUrlPrePageBook('/book');
		} else if (
			keyword === 'ebookdetail' ||
			(location.pathname === '/' && typeGroupType.nhomLoaiAnPhamID === 2)
		) {
			setUrlPrePageBook('/ebook');
		}
	}, []);

	return listbook[0] === undefined && datapagebook === undefined && typeGroupType === undefined ? (
		<h2>sai</h2>
	) : (
		<div
			className={cx('wrapper')}
			ref={ref}
			style={{
				transform: isInView ? 'translateY(0)' : 'translateY(100px)',
				opacity: isInView ? 1 : 0,
				transition: 'all 0.4s cubic-bezier(.72,.18,.91,.77) 0.2s',
			}}
		>
			<div className={cx('header', 'height-header__listbook')}>
				{title}
				<Link
					className={cx('read-more', 'height-read-more')}
					to={
						keyword === 'bookdetail' || keyword === 'ebookdetail' || location.pathname === '/'
							? `${urlprepagebook}`
							: `${url}/${title}/${idTypePublication}`
					}
				>
					<motion.p
						initial={{ rotate: 0 }}
						whileHover={{ rotate: [0, -3, 0, 3, 5, 3, 0, -5, 0] }}
						transition={{ duration: 0.5 }}
					>
						Xem thêm
					</motion.p>
				</Link>
			</div>
			<div className={active ? 'listitem active' : 'listitem'}>
				<div>
					{datapagebook[index] !== undefined ||
					dataRelatedBooks !== undefined ||
					typeGroupType !== undefined ? (
						<Swiper
							modules={[Autoplay, Navigation]}
							grabCursor={true}
							spaceBetween={10}
							slidesPerView={'auto'}
							className={cx('swiper')}
							navigation
						>
							{_.uniqBy(
								(typeGroupType !== undefined ? typeGroupType.apViewModel : null) ||
									datapagebook[index !== undefined && index] ||
									dataRelatedBooks[0],
								'name',
							).map((item, index) => {
								if (index < 5) {
									return (
										<SwiperSlide className={cx('slider')} key={index}>
											<BookCart
												typegroupname={typeGroupType}
												title={title}
												index={index}
												data={item}
												name={item.name}
											/>
										</SwiperSlide>
									);
								}
							})}
						</Swiper>
					) : listbook[i] !== undefined || check >= 0 ? (
						<Swiper
							modules={[Autoplay, Navigation]}
							grabCursor={true}
							spaceBetween={10}
							slidesPerView={'auto'}
							loop={true}
							className={cx('swiper')}
							navigation
							// autoplay={{ delay: 5000 }}
							// pagination={true}
						>
							{listbook[check >= 0 ? check : i].map((item, index) => {
								console.log('item2', item);
								return (
									<SwiperSlide className={cx('slider')} key={index}>
										<BookCart
											index={index}
											data={item}
											name={item.tenLoaiAnPham}
										/>
									</SwiperSlide>
								);
							})}
						</Swiper>
					) : (
						<h2>sai</h2>
					)}
				</div>
			</div>
		</div>
	);
}

export default Listbook;
