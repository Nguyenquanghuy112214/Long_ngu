import { useState, useEffect } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

import classNames from 'classnames/bind';
import styles from './Desktop.module.scss';

const cx = classNames.bind(styles);
function Desktop() {
	const [showDesktop, setShowDesktop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 100) {
				setShowDesktop(true);
			} else {
				setShowDesktop(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleClick = () => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};
	return (
		<>
			{showDesktop && (
				<button className={cx('desktop')} onClick={handleClick}>
					<BsFillArrowUpCircleFill className={cx('icon')} />
				</button>
			)}
		</>
	);
}
export default Desktop;
