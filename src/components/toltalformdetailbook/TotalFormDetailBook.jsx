import FormBookBorrow from '~/components/formborrowbook/FormBookBorrow';
import FormNotication from '~/components/formnotication/FormNotication';
import { forwardRef, useRef } from 'react';
import { useSelector } from 'react-redux';

function TolTallFormDetaiBook(props, ref) {
	const isActive = useSelector((state) => state.BorrowBook.isShow.id);
	const data = useSelector((state) => state.getViPham.data);

	const ref2 = useRef();
	const ref3 = useRef();

	return (
		<div ref={ref}>
			<FormBookBorrow isActive={isActive} ref={ref2} />
			<FormNotication isActive={isActive} data={data} ref={ref3} />
		</div>
	);
}

export default forwardRef(TolTallFormDetaiBook);
