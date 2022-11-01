import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as getByLoaiAPID from '~/services/getByLoaiAPID';
import { pushRelateBook } from '~/components/bookcard/PushRelatedSlice';

import anh1 from '~/assets/images/listbook/tamcam.png';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import classNames from 'classnames/bind';
import styles from './BookCard.module.scss';

const cx = classNames.bind(styles);
function BookCardGrid({ item }) {
	const dispatch = useDispatch();
	const { cat } = useParams();

	const [urlkeyword, setUrlKeyWord] = useState('');

	useEffect(() => {
		if (cat === 'book') {
			setUrlKeyWord('/book/bookdetail');
		} else if (cat === 'ebook') {
			setUrlKeyWord('/ebook/ebookdetail');
		} else if (cat === 'audiobook') {
			setUrlKeyWord('/audiobook/audiobookdetail');
		} else if (cat === 'video') {
			setUrlKeyWord('/video/videodetail');
		}
	}, [cat]);

	const handlePushIDAP = () => {
		const getCountBook = async () => {
			const res = await getByLoaiAPID.getByLoaiAPID(item.loaiAnPhamId);

			dispatch(pushRelateBook(res));
		};
		getCountBook();
	};

	return (
		<div className={cx('header')}>
			<div className={cx('image')}>
				<img src={anh1} alt="anh1" />
				<div className={cx('iconpng')}>
					<Link
						onClick={handlePushIDAP}
						to={`${urlkeyword !== undefined && urlkeyword}/${item.name}/${item.anPhamId}`}
					>
						<h3 className={cx('readbook')}>Đọc sách</h3>
					</Link>
				</div>
			</div>

			<div>
				<div className={cx('wrapper')}>
					<Tippy placement="right" animation="scale" content={item.name || 'Chưa có thông tin'}>
						<h2>{(item.name !== undefined && item.name) || 'Chưa có thông tin'}</h2>
					</Tippy>

					<Tippy placement="right" animation="scale" content={item.tacGia || 'Chưa có thông tin'}>
						<span className={cx('author')}>Tác giả: {item.tacGia || 'Chưa có thông tin'}</span>
					</Tippy>
					<Tippy
						placement="right"
						animation="scale"
						content={item.namXuatBan || 'Chưa có thông tin'}
					>
						<span className={cx('author')}>
							Năm xuất bản: {item.namXuatBan || 'Chưa có thông tin'}
						</span>
					</Tippy>
					<Tippy
						placement="right"
						animation="scale"
						content={item.nhaXuatBan || 'Chưa có thông tin'}
					>
						<span className={cx('company')}>
							Nhà xuất bản: {item.nhaXuatBan || 'Chưa có thông tin'}
						</span>
					</Tippy>
				</div>
			</div>
		</div>
	);
}

export default BookCardGrid;
