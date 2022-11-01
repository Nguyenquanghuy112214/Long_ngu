import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import * as getNewsDetail from '~/services/getDetailNews';
import * as getAllNews from '~/services/getAllNews';
import { Markup } from 'interweave';
import HeaderEbook from '~/components/headerebook';
import news from '~/assets/images/news/news.jpg';

import classNames from 'classnames/bind';
import styles from './PageNewsDetail.module.scss';
import { pushAllNews } from '~/components/navbar/PushDataNewsSlice';
const cx = classNames.bind(styles);
function PageNewsDetail() {
	const dispatch = useDispatch();
	const { id } = useParams();
	const { keyword } = useParams();

	const [readmore, setReadmore] = useState(false);
	const [newsdetail, setNewsDetail] = useState('');
	const dataAllNews = useSelector((state) => state.pushAllNews);

	useEffect(() => {
		const getDetail = async () => {
			const res = await getNewsDetail.getNewsDetail(id);
			setNewsDetail(res.data);
		};
		getDetail();
		if (keyword) {
			const handlegetAllNews = async () => {
				const getNews = await getAllNews.getNews();
				dispatch(pushAllNews(getNews));
			};
			handlegetAllNews();
		}
	}, [id]);
	const handleReadMore = () => {
		setReadmore(true);
	};

	return (
		<>
			<div className={cx('row')}>
				<div className={cx('wrapper')}>
					<HeaderEbook />
				</div>
			</div>

			<div className={cx('row bg-white')}>
				<div
					className={
						readmore
							? cx(
									'bg-white p-5',
									'news-detail',
									'active',
									'col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12',
							  )
							: cx(
									'bg-white p-5',
									'news-detail',

									'col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12',
							  )
					}
				>
					<Markup content={newsdetail !== undefined && newsdetail.content} />
					{!readmore ? (
						<span onClick={handleReadMore} className={cx('read-more')}>
							Xem thêm
						</span>
					) : (
						''
					)}
				</div>
				<div className={cx('col-xl-3 col-lg-3 col-md-0 col-sm-0 col-0  mt-5')}>
					<div className={cx('news-relate')}>
						<div className={cx('header-relate')}>
							<h3>TIN TỨC NỔI BẬT</h3>
						</div>
						<div className={cx('body-relate', 'p-3')}>
							{dataAllNews[0] !== undefined &&
								dataAllNews[0].map((item, index) => {
									if (item.newsId !== newsdetail.newsId && index <= 3) {
										return (
											<div
												className={cx(
													'item-relate',
													'd-flex pt-4 pb-3',
												)}
											>
												<Link
													to={`/news/newsdetail/${item.newsId}`}
													className={cx('link1')}
												>
													<img
														src={news}
														className={cx('me-2')}
														alt=""
													/>
												</Link>
												<Link
													to={`/news/newsdetail/${item.newsId}`}
													className={cx('link2')}
												>
													<h3 className={cx('title')}>
														{item.nameNews}
													</h3>
												</Link>
											</div>
										);
									}
								})}
						</div>
						<div className={cx('see-more')}>
							<Link to="/news">Xem thêm {'>>'} </Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PageNewsDetail;
