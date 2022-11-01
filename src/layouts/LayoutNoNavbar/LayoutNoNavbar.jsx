import classNames from 'classnames/bind';
import styles from './LayoutNoNavbar.module.scss';
import Loading from '~/components/animationloading';
import { useSelector } from 'react-redux';

import { useState, useEffect } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Desktop from '~/components/desktop/Desktop';

const cx = classNames.bind(styles);
function LayoutNoNavbar({ children }) {
	const [loading, setLoading] = useState(true);
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
	return loading ? (
		<Loading />
	) : (
		<div>
			<Header />
			<Desktop />
			<div className={cx('wrapper')}>{children}</div>
			<Footer />
		</div>
	);
}

export default LayoutNoNavbar;
