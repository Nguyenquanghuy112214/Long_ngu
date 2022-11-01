import ReactPaginate from 'react-paginate';

import classNames from 'classnames/bind';
import styles from './Paginated.module.scss';

const cx = classNames.bind(styles);
function Paginated({ onClick, pageCount, children }) {
	return (
		<>
			<div className={cx('item-bookgrid')}>{children}</div>

			<ReactPaginate
				breakLabel="........"
				nextLabel=" >>"
				onPageChange={onClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="<<"
				// renderOnZeroPageCount={null}
				containerClassName={cx('pagination')}
				pageLinkClassName={cx('page-num')}
				previousClassName={cx('page-num')}
				nextClassName={cx('page-num')}
				activeLinkClassName={cx('active')}
			/>
		</>
	);
}

export default Paginated;
