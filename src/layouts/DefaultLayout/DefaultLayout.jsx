import { useState, useEffect, useLayoutEffect, useRef, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Header from '~/layouts/header/Header';
import Footer from '~/layouts/footer/Footer';
import Navbar from '~/components/navbar/NavBar';
import Loading from '~/components/animationloading/Animationloading';
import Desktop from '~/components/desktop/Desktop';
import ModalBorrowBook from '~/components/modalborrowbook';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
	const [loading, setLoading] = useState(true);
	const location = useLocation();
	const listbook = useSelector((state) => state.ShowTypeGroup);
	useLayoutEffect(() => {
		setLoading(true);
		if (listbook.length > 0) {
			setTimeout(() => setLoading(false), 0);
		}
		return () => {
			clearTimeout(loading);
		};
	}, [window.location.pathname, listbook.length]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return loading ? (
		<div>
			<Header />

			<div>
				<div className={cx('modal')}>
					<div className={cx('custom-container', 'mt-body', 'mt-body1')}>
						<div className={cx('row gx-5', 'mt-20')}>
							<div className={cx('col-xxl-2 col-xl-3  col-lg-3', 'hide-navbar')}>
								<Navbar />
							</div>

							<div
								className={cx(
									'col-xxl-10 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12',
									'height-default',
								)}
							>
								<Loading />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	) : (
		<div>
			<ModalBorrowBook />
			<Header />

			<div>
				<div className={cx('modal')}>
					<Desktop />
					<div className={cx('custom-container', 'mt-body', 'mt-body1')}>
						<div className={cx('row gx-5', 'mt-20')}>
							<div className={cx('col-xxl-2 col-xl-3  col-lg-3', 'hide-navbar')}>
								<Navbar />
							</div>

							<div
								className={cx(
									'col-xxl-10 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12',
									'height-default',
								)}
							>
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

export default memo(DefaultLayout);
