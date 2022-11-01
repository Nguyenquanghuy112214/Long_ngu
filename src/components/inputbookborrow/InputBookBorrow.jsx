import classNames from 'classnames/bind';
import styles from './InputBookBorrow.module.scss';

const cx = classNames.bind(styles);

function InputBookBorrowNoChange({ title, data }) {
	return (
		<div className={cx('d-flex justify-content-between', 'line')}>
			<span className={cx('line-1')}>{title}</span>
			<input className={cx('input')} type="text" value={data !== undefined && data} disabled />
		</div>
	);
}

export function InputBookBorrowChange({ title }) {
	return (
		<div className={cx('d-flex justify-content-between', 'line')}>
			<span className={cx('line-1')}>{title} </span>
			<input className={cx('input')} type="text" placeholder="Nhập tiêu đề tài liệu" />
		</div>
	);
}

export function SelectedBookBorrow({ title, children }) {
	return (
		<div className={cx('d-flex justify-content-between align-items-center', 'line')}>
			<span className={cx('line-1')}>{title} </span>
			<select className={cx('select')}>{children}</select>
		</div>
	);
}

export default InputBookBorrowNoChange;
