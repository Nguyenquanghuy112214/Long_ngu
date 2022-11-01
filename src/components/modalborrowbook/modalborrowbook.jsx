import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AiOutlineClose } from 'react-icons/ai';
import { GiOpenBook } from 'react-icons/gi';
import { BiBell } from 'react-icons/bi';

import { showModalBorrowBook } from '~/pages/pagebookdetail/BorrowBookSlice';
import TolTallFormDetaiBook from '~/components/toltalformdetailbook/TotalFormDetailBook';
import HeaderProfile from '~/components/headerprofile/HeaderProfile';

import classNames from 'classnames/bind';
import styles from './ModalBorrowBook.module.scss';
import styles2 from '~/components/headerprofile/HeaderProfile.module.scss';
import styles3 from '~/components/formborrowbook/FormBookBorrow.module.scss';

const cx = classNames.bind(styles);
const s2 = classNames.bind(styles2);
const s3 = classNames.bind(styles3);

function ModalBorrowBook() {
	const ref = useRef();
	const ref2 = useRef();
	const dispatch = useDispatch();
	const bookborrow = useSelector((state) => state.BorrowBook.isShow);

	const handleHideBorrowBook = (e) => {
		e.stopPropagation();
		const action = showModalBorrowBook({ show: false, id: bookborrow.id });
		dispatch(action);
	};
	const handleHideBorrowBook1 = (e) => {
		e.stopPropagation();
		const action = showModalBorrowBook({ show: true, id: bookborrow.id });
		dispatch(action);
	};
	const handleClose = (e) => {
		e.stopPropagation();
		const action = showModalBorrowBook({ show: false, id: bookborrow.id });
		dispatch(action);
	};
	const handleClick = (e) => {
		const idactive = e.target.attributes.getNamedItem('data-id').value;
		const parent = e.target.parentNode;
		const children = ref.current.childNodes;

		children.forEach((item, index) => {
			item.classList.remove(s2('active'));
			ref2.current.childNodes[index].classList.remove(s3('active'));
			ref2.current.childNodes[idactive].classList.add(s3('active'));
		});
		if (parent) {
			parent.classList.add(s2('active'));
		}
	};
	return (
		<div
			onClick={handleHideBorrowBook}
			className={bookborrow.show ? cx('modalBookBorrow', 'active') : cx('modalBookBorrow')}
		>
			<div onClick={handleHideBorrowBook1} className={cx('contentModal', 'width-md__borrow')}>
				<span className={cx('close')} onClick={handleClose}>
					<AiOutlineClose />
				</span>

				<HeaderProfile
					ref={ref}
					icon={<GiOpenBook />}
					icon2={<BiBell />}
					onClick={(e) => handleClick(e)}
					text1="Thông tin sách"
					text2="Thông tin vi phạm"
				/>
				<TolTallFormDetaiBook ref={ref2} />
			</div>
		</div>
	);
}

export default ModalBorrowBook;
