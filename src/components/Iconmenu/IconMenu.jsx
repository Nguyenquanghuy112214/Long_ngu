import { useState, useEffect, useRef } from 'react';

import BellHeader from '~/components/bellheadermb';
import HeaderNotify from '~/components/headernotify';

import SlideMb from '~/components/menuMb/MenuMB';

import classNames from 'classnames/bind';
import styles from './MenuMb.module.scss';

const cx = classNames.bind(styles);

function MenuMb() {
	const [toggle, setToggle] = useState(false);
	const [resetmenu, setResetMenu] = useState(false);
	const [active, setActive] = useState(false);
	const ref = useRef();
	const ref1 = useRef();
	const ref2 = useRef();

	const hideMenuMb = (e) => {
		if (!ref.current.contains(e.target)) {
			setActive(false);
			setResetMenu(true);
		}
	};
	const hideNotify = (e) => {
		if (!ref2.current.contains(e.target)) {
			setToggle(false);
		}
	};
	useEffect(() => {
		document.body.addEventListener('click', hideMenuMb);
		return () => document.body.removeEventListener('click', hideMenuMb);
	}, []);
	useEffect(() => {
		document.body.addEventListener('click', hideNotify);
		return () => document.body.removeEventListener('click', hideNotify);
	}, []);
	const handleTogle = () => {
		setToggle(false);
	};
	const handleSetToggle = () => {
		setToggle(!toggle);
	};

	return (
		<div className={cx('d-flex align-items-center justify-content-center', 'icon-menu')}>
			<div className={cx('box')} ref={ref1}>
				<HeaderNotify active1={toggle} onClick={handleTogle} />
			</div>
			<span ref={ref2}>
				<BellHeader onClick={handleSetToggle} />
			</span>
			<div ref={ref}>
				<div onClick={() => setActive(!active)} className={cx('show-menu', 'nav__toggler')}>
					<div className={active ? cx('line1', 'active') : cx('line1')}></div>
					<div className={active ? cx('line2', 'active') : cx('line2')}></div>
					<div className={active ? cx('line3', 'active') : cx('line3')}></div>
				</div>

				<SlideMb showMenu={active} resetmenu={resetmenu} />
			</div>
		</div>
	);
}

export default MenuMb;
