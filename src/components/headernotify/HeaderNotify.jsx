import { showModalBorrowBook } from '~/pages/pagebookdetail/BorrowBookSlice';
import { useDispatch } from 'react-redux';
import { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import classNames from 'classnames/bind';
import styles from './HeaderNotify.module.scss';

const list = [
	{ title: 'Hết hạn sách văn lớp 6', date: '14/5/2021' },
	{ title: 'Hết hạn sách toán lớp 6', date: '17/5/2021' },
	{ title: 'Hết hạn sách tiếng anh lớp 6', date: '20/5/2021' },
];

const cx = classNames.bind(styles);
function HeaderNotify({ onClick, active1 }, ref) {
	const dispatch = useDispatch();
	const handleNotify = () => {
		dispatch(showModalBorrowBook({ show: true, id: 2 }));
	};
	const handleHide = () => {
		onClick();
	};

	return (
		<AnimatePresence>
			{active1 && (
				<motion.div
					initial={{ y: -10, opacity: 0 }}
					animate={{ y: active1 ? 8 : -10, opacity: active1 ? 1 : 0 }}
					exit={{ y: 40, opacity: 0 }}
					className={cx('wrapper', active1 ? 'active' : '')}
					ref={ref}
				>
					<div className={cx('header')}>THÔNG BÁO MỚI NHẬN</div>
					<div className={cx('boddy')} onClick={handleHide}>
						<ul className={cx('list-item__notify')}>
							{list.map((item, index) => {
								return (
									<li
										onClick={handleNotify}
										className={cx('item-notify', 'fs-notify')}
										key={index}
									>
										{item.title}: <span>{item.date}</span>
									</li>
								);
							})}
						</ul>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default forwardRef(HeaderNotify);
