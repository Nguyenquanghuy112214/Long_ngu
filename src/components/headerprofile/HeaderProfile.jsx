import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './HeaderProfile.module.scss';

const cx = classNames.bind(styles);

function HeaderProfile({ icon, icon2, text1, text2, to, href, onClick, children }, ref) {
	const isActive = useSelector((state) => state.BorrowBook.isShow.id);
	const { value } = useParams();
	let Comp = 'button';
	const props = {
		onClick,
	};
	if (to) {
		props.to = to;
		Comp = Link;
	}
	if (href) {
		props.href = href;
		Comp = 'a';
	}
	return (
		<div>
			<div className={cx('d-flex', 'button-header')} ref={ref}>
				<div
					className={cx(
						'profile__detail',
						isActive === 1 ? 'active' : '',
						value !== undefined ? 'd-flex align-items-center' : 'd-none',
					)}
				>
					{icon}
					<Comp {...props} data-id="0">
						{text1}
					</Comp>
				</div>
				<div
					className={cx(
						'profile__detail',
						isActive === 2 ? 'active' : '',
						'd-flex align-items-center ',
					)}
				>
					{icon2}
					<Comp {...props} data-id="1">
						{text2}
					</Comp>
				</div>
			</div>
			{children}
		</div>
	);
}

export default forwardRef(HeaderProfile);
