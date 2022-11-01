import classNames from 'classnames/bind';
import styles from './AnimationLoading.module.scss';
import { useSelector } from 'react-redux';

import List from '~/components/listnavbar/index';

const cx = classNames.bind(styles);
function Loading() {
	const listbook = useSelector((state) => state.ShowTypeGroup);

	return listbook !== undefined ? (
		<div className={cx('modal')}>
			<div className={cx('loading')}>
				<List />
				<div className={cx('lds-spinner')}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	) : (
		''
	);
}

export default Loading;
