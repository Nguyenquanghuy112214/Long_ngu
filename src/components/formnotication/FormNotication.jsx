import { forwardRef } from 'react';
import { useSelector } from 'react-redux';

import classNames from 'classnames/bind';
import styles from '../formborrowbook/FormBookBorrow.module.scss';

const cx = classNames.bind(styles);

function FormNotication(props, ref) {
	return (
		<div ref={ref} className={cx('notify', props.isActive === 2 ? 'active' : '')}>
			{props.data}
		</div>
	);
}

export default forwardRef(FormNotication);
