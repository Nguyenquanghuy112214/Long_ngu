import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as getAddNewBooks from '~/services/getAddNewBooks';
import * as getMostViewedBooks from '~/services/getMostViewedBooks';

import Listbook from '~/components/listbook/ListBook';
import Listvideo from '~/components/listvideo/ListVideo';
import Slider from '~/components/slider/Slider';

import config from '~/config';

import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

const cx = classNames.bind(styles);

function Content() {
	const [active, setActive] = useState(0);
	const list = useSelector((state) => state.ShowNavBar);
	const [booktop, setBookTop] = useState();
	const listTop = [
		{
			title: 'Mới cập nhật',
			link: config.routes.home,
		},
		{
			title: 'Nổi bật',
			link: config.routes.home,
		},
		{
			title: 'Xem nhiều nhất',
			link: config.routes.home,
		},
	];
	useEffect(() => {
		const getNewBook = async () => {
			const res = await getAddNewBooks.getAddNewsBooks();
			setBookTop(res.data);
		};
		getNewBook();
	}, []);
	const handleBookTop = (index) => {
		if (index === 0) {
			const getNewBook = async () => {
				const res = await getAddNewBooks.getAddNewsBooks();
				setBookTop(res.data);
			};
			getNewBook();
		}
		if (index === 2) {
			const getNewBook = async () => {
				const res = await getMostViewedBooks.getMostViewedBooks();
				setBookTop(res.data);
			};
			getNewBook();
		}
		setActive(index);
	};

	return (
		<div className={cx('header')}>
			<div className={cx('body')}>
				<Slider />
				<div className={cx('hot')}>
					{/* <ul className={cx('wrapper')}>
						{listTop.map((item, index) => {
							return (
								<li key={index} onClick={(index) => handleBookTop(index)}>
									{active === index ? (
										<motion.span layoutId="navlink">{item.title}</motion.span>
									) : null}
								</li>
							);
						})}
					</ul> */}

					<ul className={cx('wrapper')}>
						{listTop.map((item, index) => (
							<li
								className={active === index ? cx('item-hot', 'active') : cx('item-hot')}
								key={index}
								onClick={() => handleBookTop(index)}
							>
								{item.title}

								{active === index && (
									<motion.span
										className={cx('animation')}
										layoutId
										animate={{ opacity: 1 }}
										initial={{ opacity: 0 }}
										transition={{
											type: 'spring',
											stiffness: 40,
											duration: 0.3,
										}}
									></motion.span>
								)}
							</li>
						))}
					</ul>
				</div>

				<div>
					{booktop !== undefined &&
						booktop.map((item, index) => {
							return <Listbook i={index} key={index} typeGroupType={item} />;
						})}
				</div>
			</div>
		</div>
	);
}

export default Content;
