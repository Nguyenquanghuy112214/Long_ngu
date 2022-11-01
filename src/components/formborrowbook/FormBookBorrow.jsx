import { useSelector } from 'react-redux';
import { useEffect, useState, forwardRef } from 'react';

import InputBookBorrowNoChange, { InputBookBorrowChange, SelectedBookBorrow } from '~/components/inputbookborrow';

import classNames from 'classnames/bind';
import styles from './FormBookBorrow.module.scss';

const cx = classNames.bind(styles);
function FormBookBorrow(props, ref) {
	const [user, setUser] = useState([]);
	const detail = useSelector((state) => state.postdetailBook);
	useEffect(() => {
		setUser(localStorage.getItem('name'));
	}, []);

	const fakeDataLeguage = [
		{
			value: 0,
			data: '- Chọn -',
		},
		{
			value: 1,
			data: 'Sách tham khảo',
		},
		{
			value: 2,
			data: 'Sách giáo khoa',
		},
		{
			value: 3,
			data: 'Sách nghiệp vụ',
		},
	];

	const fakeDataFolder = [
		{
			value: 0,
			data: '- Tất cả -',
		},
		{
			value: 1,
			data: 'Sách điện tử',
		},
		{
			value: 2,
			data: 'Sách nói',
		},
		{
			value: 3,
			data: 'Album ảnh',
		},
		{
			value: 4,
			data: 'Video',
		},
	];
	const isActive = useSelector((state) => state.BorrowBook.isShow.id);
	return (
		<div className={cx('wrapper', isActive === 1 ? 'active' : '')} ref={ref}>
			<div className={cx('header')}>{/* <h5 className={cx('title')}>Mượn sác</h5> */}</div>
			<div className={cx('row')}>
				<div className={cx('col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6')}>
					<InputBookBorrowNoChange title="Tên học sinh" data={user} />

					<InputBookBorrowChange title="Lớp" />

					<InputBookBorrowNoChange
						title="Tên sách"
						data={detail[0] !== undefined && detail[0].name}
					/>

					<InputBookBorrowNoChange
						title="Năm xuất bản"
						data={detail[0] !== undefined && detail[0].namXuatBan}
					/>
				</div>

				<div className={cx('col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6')}>
					<InputBookBorrowChange title="Tác giả" />
					<SelectedBookBorrow title="Ngôn ngữ">
						{fakeDataLeguage.map((item, index) => {
							return (
								<option key={item.value} value={item.value}>
									{item.data}
								</option>
							);
						})}
					</SelectedBookBorrow>
					<SelectedBookBorrow title="Thư mục">
						{fakeDataFolder.map((item, index) => {
							return (
								<option key={item.value} value={item.value}>
									{item.data}
								</option>
							);
						})}
					</SelectedBookBorrow>
				</div>
			</div>
			<button className={cx('button')}>Mượn sách</button>
		</div>
	);
}

export default forwardRef(FormBookBorrow);
