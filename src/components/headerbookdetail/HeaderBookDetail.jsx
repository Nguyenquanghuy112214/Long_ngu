import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import config from '~/config';

import classNames from 'classnames/bind';
import styles from './HeaderBookDetail.module.scss';

const cx = classNames.bind(styles);

function HeaderEbookDetail() {
	const [title, setTitle] = useState('');
	const [page, setPage] = useState(null);
	const { keyword } = useParams();
	const { value } = useParams();

	useEffect(() => {
		if (keyword === 'bookdetail') {
			setPage(config.routes.book);
			setTitle('Sách giáo khoa');
		} else if (keyword === 'ebookdetail') {
			setPage(config.routes.ebook);
			setTitle('Sách điện tử');
		}
	}, []);
	return (
		<div className={cx('header')}>
			<Link to="/" className={cx('home', 'fs')}>
				Trang chủ
			</Link>
			<Link to={page !== null && page !== undefined && page} className={cx('home', 'fs')}>
				{title}
			</Link>
			<span className={cx('content', 'fs')}>{value}</span>
		</div>
	);
}

export default HeaderEbookDetail;
