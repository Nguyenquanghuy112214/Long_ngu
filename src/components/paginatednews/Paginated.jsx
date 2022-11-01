import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { pushAllNews } from '~/components/navbar/PushDataNewsSlice';
import Paginated from '~/components/paginated';
import NewsCard from '~/components/newscard';
import * as getAllNews from '~/services/getAllNews';

function PaginatedNews() {
	const dataAllNews = useSelector((state) => state.pushAllNews);

	const [check, setCheck] = useState(false);
	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);

	const itemsPerPage = 5;

	const dispatch = useDispatch();

	useEffect(() => {
		setCheck(!check);
		const endOffset = itemOffset + itemsPerPage;
		dataAllNews[0] !== undefined &&
			dataAllNews[0] !== null &&
			setCurrentItems(dataAllNews[0].slice(itemOffset, endOffset));
		dataAllNews[0] !== undefined &&
			dataAllNews[0] !== null &&
			setPageCount(Math.ceil(dataAllNews[0].length / itemsPerPage));
	}, [itemOffset, itemsPerPage, dataAllNews]);

	const handlePageClick = (event) => {
		const newOffset =
			dataAllNews !== undefined &&
			dataAllNews !== null &&
			(event.selected * itemsPerPage) % dataAllNews[0].length;
		setItemOffset(newOffset);
	};

	useEffect(() => {
		if (window.location.pathname === '/news') {
			const handlegetAllNews = async () => {
				const getNews = await getAllNews.getNews();
				dispatch(pushAllNews(getNews));
			};
			handlegetAllNews();
		}
	}, [window.location.pathname]);

	return (
		<>
			<Paginated onClick={handlePageClick} pageCount={pageCount}>
				{(currentItems !== undefined && currentItems).map((item, index) => {
					return <NewsCard key={index} item={item !== undefined && item} />;
				})}
			</Paginated>
		</>
	);
}

export default PaginatedNews;
