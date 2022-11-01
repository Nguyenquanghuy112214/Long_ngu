import classNames from 'classnames/bind';
import styles from './Message.module.scss';

import { RiMessengerFill } from 'react-icons/ri';

const cx = classNames.bind(styles);
function Message() {
	return (
		<div className={cx('hotline-phone-ring')}>
			<div className={cx('hotline-phone-ring-circle')}></div>
			<div className={cx('hotline-phone-ring-circle-fill')}></div>
			<div className={cx('hotline-phone-ring-img-circle')}>
				<a
					href="https://www.facebook.com/BKT-JSC-H%E1%BB%97-Tr%E1%BB%A3-Kh%C3%A1ch-H%C3%A0ng-102046912062861/"
					className={cx('pps-btn-img')}
				>
					<RiMessengerFill style={{ color: 'white' }} />
				</a>
			</div>
		</div>
	);
}

export default Message;
