import { Link } from 'react-router-dom';
import { BiTimeFive } from 'react-icons/bi';
import { AiFillEye } from 'react-icons/ai';

import { Markup } from 'interweave';
import Tippy from '@tippyjs/react';
import moment from 'moment';

import news from '~/assets/images/news/news.jpg';

import classNames from 'classnames/bind';
import styles from './NewsCard.module.scss';

const cx = classNames.bind(styles);
function NewCard({ item }) {
	return (
		<div className={cx('header')}>
			<div className={cx('image')}>
				<img className={cx('img-news')} src={news} alt="" />
				<div className={cx('iconpng')}>
					<Link to={`/news/newsdetail/${item.newsId}`}>
						<h3 className={cx('read-news')}>Xem tin</h3>
					</Link>
				</div>
			</div>
			<div className={cx('content-news')}>
				<div className={cx('date-views', 'd-flex justify-content-between align-items-center')}>
					<span className={cx('date', 'd-flex justify-content-between align-items-center')}>
						<BiTimeFive className={cx('me-1')} />
						{moment(item.exportDate).format('L')}
					</span>
					<span className={cx('views', 'd-flex justify-content-between align-items-center')}>
						<AiFillEye className={cx('me-1')} />
						{item.numberOfView} lượt xem
					</span>
				</div>
				<Link to={`/news/newsdetail/${item.newsId}`} className={cx('title-news')}>
					<Tippy
						duration={[250, 250]}
						maxWidth={250}
						delay={[200, 200]}
						arrow="false"
						followCursor="initial"
						animation="scale"
						content={
							<Markup
								className={cx('header-text')}
								content={item !== undefined && item.nameNews}
							/>
						}
					>
						<Markup
							className={cx('header-text')}
							content={item !== undefined && item.nameNews}
						/>
					</Tippy>
				</Link>

				<div>
					<Tippy
						duration={[250, 250]}
						maxWidth={250}
						delay={[200, 200]}
						arrow="false"
						followCursor="initial"
						animation="scale"
						content={
							<Markup
								className={cx('footer-text')}
								content={item !== undefined && item.contentShort}
							/>
						}
					>
						<div className={cx('wrapper')}>
							<Markup
								className={cx('footer-text')}
								content={item !== undefined && item.contentShort}
							/>
						</div>
					</Tippy>
				</div>
			</div>
		</div>
	);
}

export default NewCard;
