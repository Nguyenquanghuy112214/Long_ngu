import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Loading from '~/components/animationloading/Animationloading';

import classNames from 'classnames/bind';
import styles from './Layout.module.scss';

const cx = classNames.bind(styles);

function Layoutcenter({ children }) {
	const [loading, setLoading] = useState(true);
	const [col, setCol] = useState(12);
	const [container, setContainer] = useState('custom-container');
	const { keyword } = useParams();
	const listbook = useSelector((state) => state.ShowTypeGroup);

	useEffect(() => {
		setLoading(true);
		if (listbook.length > 0) {
			setTimeout(() => setLoading(false), 0);
		}
		return () => {
			clearTimeout(loading);
		};
	}, [window.location.pathname, listbook.length]);
	useEffect(() => {
		if (keyword === 'newsdetail') {
			setCol(12);
		} else if (keyword === 'bookscrom') {
			setContainer('container-fluid');
		}
	}, []);

	return loading ? (
		<Loading />
	) : (
		<div>
			<Header />
			<div>
				<div className={cx('modal')}>
					<div className={cx(`${container}`, 'mt-body')}>
						<div className={cx('row gx-5  justify-content-center', 'mt-20', 'overflow-hidden')}>
							<div className={cx(`col-xl-${col} col-lg-${col} col-md-12 col-sm-12 col-12`)}>
								{children}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Layoutcenter;
