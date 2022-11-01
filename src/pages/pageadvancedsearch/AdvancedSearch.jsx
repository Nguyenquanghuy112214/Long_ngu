import classNames from 'classnames/bind';
import styles from './AdvancedSearch.module.scss';

import InputBookBorrowNoChange, { InputBookBorrowChange, SelectedBookBorrow } from '~/components/inputbookborrow';

const cx = classNames.bind(styles);
function AdvancedSearch() {
	const fakedataKhoSach = [
		{ value: 0, data: '- Chọn -' },
		{ value: 1, data: 'Chính trị' },
		{ value: 2, data: 'Thời đại' },
		{ value: 0, data: 'Mỹ thuật' },
	];
	const fakedataFolder = [
		{ value: 0, data: '- Chọn -' },
		{ value: 1, data: 'Chính trị' },
		{ value: 2, data: 'Thời đại' },
		{ value: 0, data: 'Mỹ thuật' },
	];

	return (
		<div className={cx('wrapper')}>
			<div className={cx('header')}>
				<h5 className={cx('title')}>Tìm kiếm nâng cao</h5>
			</div>
			<div className={cx('row')}>
				<div className={cx('col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6')}>
					<InputBookBorrowChange title="Tiêu đề tài liệu" />
					<SelectedBookBorrow title="Nhà xuất bản">
						{fakedataKhoSach.map((item, index) => {
							return (
								<option key={index} value={item.value}>
									{item.data}
								</option>
							);
						})}
					</SelectedBookBorrow>
					<SelectedBookBorrow title="Nhà xuất bản">
						{fakedataKhoSach.map((item, index) => {
							return (
								<option key={index} value={item.value}>
									{item.data}
								</option>
							);
						})}
					</SelectedBookBorrow>
					<SelectedBookBorrow title="Nhà xuất bản">
						{fakedataKhoSach.map((item, index) => {
							return (
								<option key={index} value={item.value}>
									{item.data}
								</option>
							);
						})}
					</SelectedBookBorrow>
				</div>
				<div className={cx('col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6')}>
					<InputBookBorrowChange title="Tác giả" />
					<InputBookBorrowChange title="Năm xuất bản" />
					<SelectedBookBorrow title="Nhà xuất bản">
						{fakedataKhoSach.map((item, index) => {
							return (
								<option key={index} value={item.value}>
									{item.data}
								</option>
							);
						})}
					</SelectedBookBorrow>
					<SelectedBookBorrow title="Nhà xuất bản">
						{fakedataKhoSach.map((item, index) => {
							return (
								<option key={index} value={item.value}>
									{item.data}
								</option>
							);
						})}
					</SelectedBookBorrow>
				</div>
			</div>
			<button className={cx('button')}>Tìm kiếm</button>
		</div>
	);
}

export default AdvancedSearch;
