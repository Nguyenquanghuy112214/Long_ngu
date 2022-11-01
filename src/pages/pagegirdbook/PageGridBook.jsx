import { useParams } from 'react-router-dom';

import GridBook1 from '~/components/gridbook/GridBook';
import HeaderEbook from '~/components/headerebook/HeaderEbook';

import { motion } from 'framer-motion';

import classNames from 'classnames/bind';
import styles from './GridBook.module.scss';

const cx = classNames.bind(styles);
function GridBook() {
	const { value } = useParams();
	return (
		<div className={cx('ebook')}>
			<motion.div
				className={cx('wrapper')}
				initial={{ width: '10%', opacity: 0.2 }}
				animate={{
					width: '100%',
					opacity: 1,
				}}
				transition={{ type: 'spring', stiffness: 400, duration: 3 }}
			>
				<motion.span
					initial={{ x: 900, opacity: 0.2 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<HeaderEbook />
				</motion.span>
			</motion.div>
			<div className={cx('body')}>
				<div className={cx('header')}>{value}</div>
			</div>
			<div className={cx('grid-book')}>
				<GridBook1 />
			</div>
		</div>
	);
}

export default GridBook;
