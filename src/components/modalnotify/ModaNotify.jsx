import { AiOutlineClose } from 'react-icons/ai';

import classNames from 'classnames/bind';
import styles from './ModalNotify.module.scss';

const cx = classNames.bind(styles);

function ModalNotify() {
	return (
		<div className={cx('modalNotify', 'active')}>
			<div className={cx('contentModal')}>
				<span className={cx('close')}>
					<AiOutlineClose />
				</span>
			</div>
		</div>
	);
}

export default ModalNotify;
