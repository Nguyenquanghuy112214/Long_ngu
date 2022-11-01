import classNames from 'classnames/bind';
import styles from './VideoCard.module.scss';
import { useState } from 'react';
import config from '~/config';
import { Link } from 'react-router-dom';
import anh1 from '~/assets/images/listbook/caytretramdot.jpg';
import { BsPlayFill } from 'react-icons/bs';
const cx = classNames.bind(styles);

function Video() {
	return (
		<div className={cx('header')} data-aos="zoom-in">
			<div className={cx('image')}>
				<img className={cx('video')} src={anh1} alt="anh1" />
				<div className={cx('icon')}>
					<Link to={config.routes.readebook}>
						<BsPlayFill className={cx('icon-pause')} />
					</Link>
				</div>
			</div>

			<div>
				<div className={cx('wrapper')}>
					<h2>
						Video truyện cây tre trăm đốt kể về một ngôi làng nhỏ có một người phú ông giàu có.
					</h2>
				</div>
			</div>
		</div>
	);
}

export default Video;
