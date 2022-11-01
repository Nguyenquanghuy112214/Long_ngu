import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useInView } from 'framer-motion';

import * as getByLoaiAPID from '~/services/getByLoaiAPID';
import { pushRelateBook } from './PushRelatedSlice';

import anh1 from '~/assets/images/listbook/tamcam.png';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import classNames from 'classnames/bind';
import styles from './BookCard.module.scss';

const cx = classNames.bind(styles);
function BookCard({ name, data, index, title, typegroupname }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const { keyword } = useParams();
	const dispatch = useDispatch();
	const [urlpathname, setUrlPathName] = useState('');

	const [urlkeyword, setUrlKeyWord] = useState('');

	useEffect(() => {
		if (window.location.pathname === '/book') {
			setUrlPathName('/book/bookdetail');
		} else if (window.location.pathname === '/ebook') {
			setUrlPathName('/ebook/ebookdetail');
		} else if (window.location.pathname === '/audiobook') {
			setUrlPathName('/audiobook/audiobookdetail');
		} else if (window.location.pathname === '/ebook') {
			setUrlPathName('/video/videodetail');
		}
	}, []);

	useEffect(() => {
		if (typegroupname !== undefined ? typegroupname.nhomLoaiAnPhamID === 1 : null || keyword === 'bookdetail') {
			setUrlKeyWord('/book/bookdetail');
		} else if (
			typegroupname !== undefined ? typegroupname.nhomLoaiAnPhamID === 2 : null || keyword === 'ebookdetail'
		) {
			setUrlKeyWord('/ebook/ebookdetail');
		} else if (keyword === 'audiobookdetail') {
			setUrlKeyWord('/audiobook/audiobookdetail');
		} else if (keyword === 'ebookdetail') {
			setUrlKeyWord('/video/videodetail');
		}
	}, [keyword, typegroupname]);

	const handlePushIDAP = () => {
		const getCountBook = async () => {
			const res = await getByLoaiAPID.getByLoaiAPID(data.loaiAnPhamId);

			dispatch(pushRelateBook(res));
		};
		getCountBook();
	};

	return (
		<div
			className={cx('header')}
			ref={ref}
			style={{
				transform: isInView ? 'translateX(0)' : 'translateX(30vw)',
				opacity: isInView ? 1 : 0,
				transition: `all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) ${index + 1}*0.3s`,
			}}
		>
			<div className={cx('image')}>
				<img src={anh1} alt="anh1" />
				<div className={cx('iconpng')}>
					<Link
						onClick={handlePushIDAP}
						to={`${(urlpathname !== '' && urlpathname) || (urlkeyword !== '' && urlkeyword)}/${
							data.name
						}/${data.anPhamId}`}
					>
						<h3 className={cx('readbook')}>Đọc sách</h3>
					</Link>
				</div>
			</div>

			<div>
				<div className={cx('wrapper')}>
					<Tippy placement="right" animation="scale" content={name || 'Chưa có thông tin'}>
						<h2>{name || 'Chưa có thông tin'}</h2>
					</Tippy>

					<Tippy placement="right" animation="scale" content={data.tacGia || 'Chưa có thông tin'}>
						<span className={cx('author')}>
							Tác giả:<strong> {data.tacGia || 'Chưa có thông tin'}</strong>
						</span>
					</Tippy>
					<Tippy
						placement="right"
						animation="scale"
						content={data.namXuatBan || 'Chưa có thông tin'}
					>
						<span className={cx('author')}>
							Năm xuất bản:
							<strong> {data.namXuatBan || 'Chưa có thông tin'}</strong>
						</span>
					</Tippy>
					<Tippy
						placement="right"
						animation="scale"
						content={data.nhaXuatBan || 'Chưa có thông tin'}
					>
						<span className={cx('author')}>
							Nhà xuất bản:
							<strong>{data.nhaXuatBan || 'Chưa có thông tin'}</strong>
						</span>
					</Tippy>
				</div>
			</div>
		</div>
	);
}

export default BookCard;
