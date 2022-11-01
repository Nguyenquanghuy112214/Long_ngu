import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as getByLoaiAPID from '~/services/getByLoaiAPID';
import Paginated from '~/components/paginatedbook/Paginated';
import { PostGridBook } from '~/components/gridbook/postGridBookSlice';

function GridBook() {
	const { idap } = useParams();
	const dispatch = useDispatch();
	const [check, setCheck] = useState(false);

	useEffect(() => {
		const getCount = async () => {
			const res = await getByLoaiAPID.getByLoaiAPID(idap);
			setCheck(!check);
			dispatch(PostGridBook(res));
		};
		getCount();
	}, [idap]);
	return (
		<div>
			<Paginated />
		</div>
	);
}

export default GridBook;
