import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import BookCard from '~/components/bookcard2/BookCard2';
import Paginated from '~/components/paginated';
import _ from 'lodash';

function PaginatedBook() {
	const [check, setCheck] = useState(false);
	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);

	const data = useSelector((state) => state.PostGridBook);

	const itemsPerPage = 10;

	useEffect(() => {
		setCheck(!check);
		const endOffset = itemOffset + itemsPerPage;
		_.uniqBy(data[0], 'name') !== undefined &&
			_.uniqBy(data[0], 'name') !== null &&
			setCurrentItems(_.uniqBy(data[0], 'name').slice(itemOffset, endOffset));
		_.uniqBy(data[0], 'name') !== undefined &&
			_.uniqBy(data[0], 'name') !== null &&
			setPageCount(Math.ceil(_.uniqBy(data[0], 'name').length / itemsPerPage));
	}, [itemOffset, itemsPerPage, data]);

	const handlePageClick = (event) => {
		const newOffset =
			_.uniqBy(data[0], 'name') !== undefined &&
			_.uniqBy(data[0], 'name') !== null &&
			(event.selected * itemsPerPage) % _.uniqBy(data[0], 'name').length;
		setItemOffset(newOffset);
	};

	return (
		<>
			<Paginated onClick={handlePageClick} pageCount={pageCount}>
				{currentItems !== undefined &&
					_.uniqBy(currentItems, 'name').map((item, index) => {
						return <BookCard key={index} item={item !== undefined && item} />;
					})}
			</Paginated>
		</>
	);
}

export default PaginatedBook;
