import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import config from '~/config';

import classNames from 'classnames/bind';
import styles from './HeaderEbook.module.scss';

const cx = classNames.bind(styles);

function HeaderEbook() {
	const [title, setTitle] = useState('');
	const { namemenu } = useParams();
	const { namelap } = useParams();
	const { idap } = useParams();
	const { indexmenu } = useParams();

	return (
		<div className={cx('header')}>
			<Link to={config.routes.home} className={cx('home')}>
				Trang chủ
			</Link>

			<Link to={`/lv1/${namemenu || namelap}/${idap}/${indexmenu}`} className={cx('content')}>
				{namemenu || namelap}
			</Link>
		</div>
	);
}

export default HeaderEbook;
