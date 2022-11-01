import { useDispatch, useSelector } from 'react-redux';
import { forwardRef } from 'react';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import { FiSearch } from 'react-icons/fi';
import { show } from '~/components/searchMb/searchMbSlice';

import classNames from 'classnames/bind';
import styles from './SearchMb.module.scss';

const cx = classNames.bind(styles);
function SearchMb(props, ref) {
	const isShow = useSelector((state) => state.ShowSearchMb.isShow);
	const dispatch = useDispatch();
	const handleClick = () => {
		const action = show(!isShow);
		dispatch(action);
	};

	return (
		<div ref={ref}>
			<Tippy content="Tìm kiếm" placement="right" animation="scale">
				<div onClick={handleClick} className={cx('wrapper', 'hide-search__menu')}>
					<FiSearch className={cx('search', 'width-search')} />
				</div>
			</Tippy>
		</div>
	);
}

export default forwardRef(SearchMb);
