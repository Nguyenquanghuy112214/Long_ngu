import classNames from 'classnames/bind';
import styles from './ListVideo.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

import VideoCart from '~/components/videocard/VideoCard';

const cx = classNames.bind(styles);

function ListVideo() {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('header')}>
				Video
				<Link className={cx('read-more')} to={config.routes.ebook}>
					Xem thêm
				</Link>
			</div>
			<div className={cx('item')}>
				<VideoCart />
				<VideoCart />
				<VideoCart />
				<VideoCart />
				<VideoCart />
				<VideoCart />
				<VideoCart />
				<VideoCart />
				<VideoCart />
			</div>
		</div>
	);
}

export default ListVideo;
