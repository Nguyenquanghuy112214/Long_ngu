import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import HeaderEbook from '~/components/headerebook/HeaderEbook';
import Listbook from '~/components/listbook/ListBook';
import ListVideo from '~/components/listvideo/ListVideo';
import { motion } from 'framer-motion';

import classNames from 'classnames/bind';
import styles from './Book.module.scss';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);
function Book() {
	const { indexmenu } = useParams();
	const listbook = useSelector((state) => state.ShowTypeGroup);
	const Menu = useSelector((state) => state.PostMenu)[0];
	console.log('Menu', Menu);
	console.log('listbook', listbook);

	return Menu[indexmenu] !== undefined ? (
		<div className={cx('ebook')}>
			<div className={cx('wrapper')}>
				<motion.span
					initial={{ opacity: 0, y: -40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
				>
					<HeaderEbook />
				</motion.span>
			</div>
			<div className={cx('body')}>
				{Menu[indexmenu] !== undefined &&
					Menu[indexmenu].menu_LoaiAnPhamViewModel !== undefined &&
					Menu[indexmenu].menu_LoaiAnPhamViewModel.map((item, index) => {
						return (
							<Listbook
								key={index}
								index={index}
								idTypePublication={item.loaiAnPhamId}
								nameTypePublication={item.tenLoaiAnPham}
							/>
						);
					})}
			</div>
		</div>
	) : (
		''
	);
}

export default Book;
