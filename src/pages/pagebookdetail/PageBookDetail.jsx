import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import * as getVipham from '~/services/getvipham';

import { saveAs } from 'file-saver';
import { postdetailBook } from '~/pages/pagebookdetail/detailbookSlice';
import { showModalBorrowBook } from '~/pages/pagebookdetail/BorrowBookSlice';
import { showViPham } from '~/pages/pagebookdetail/getViPhamSlice';
import * as getInfoAnPham from '~/services/getInfoAnPham';
import { motion } from 'framer-motion';
import config from '~/config';

import HeaderEbookDetail from '~/components/headerbookdetail/HeaderBookDetail';
import anh1 from '~/assets/images/listbook/tamcam.png';
import BookList from '~/components/listbook/ListBook';

import classNames from 'classnames/bind';
import styles from './BookDetail.module.scss';

const cx = classNames.bind(styles);

function BookDetail() {
	const [book, setBook] = useState([]);
	const [login, setLogin] = useState(false);
	const [violate, setViolate] = useState('');
	const { id } = useParams();
	const { value } = useParams();
	const { keyword } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem('token')) {
			setLogin(true);
		}

		const fetchAPI = async () => {
			const res = await getInfoAnPham.getInfoAnPham(id);

			dispatch(postdetailBook(...res.data.data));
			setBook(res.data.data);
		};
		fetchAPI();
	}, [id]);
	const handleBorrow = () => {
		const APIGetProfile = async () => {
			const token = localStorage.getItem('token');
			const res = await getVipham.getViPham({ headers: { Authorization: `Bearer ${token}` } });
			if (res.data !== undefined) {
				dispatch(showModalBorrowBook({ show: true, id: 1 }));
			} else {
				dispatch(showModalBorrowBook({ show: true, id: 2 }));
			}
			dispatch(showViPham(res.message));

			setViolate(res);
		};
		APIGetProfile();
	};

	const handleDownLoad = () => {};

	return book === undefined || book === null ? (
		''
	) : (
		<>
			<div className={cx('ebook')}>
				<div className={cx('wrapper')}>
					<motion.span
						initial={{ opacity: 0.3, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
					>
						<HeaderEbookDetail />
					</motion.span>
				</div>
				<div className={cx('body')}>
					<div className={cx('body__content')}>
						<div className={cx('body__content-detail', 'row gx-5')}>
							<div className={cx('col-xl-5 col-lg-5 col-md-5 pb-4')}>
								<div className={cx('image')}>
									<img src={anh1} alt="anh1" />
									<div className={cx('iconpng')}>
										<Link
											// to="https://resourcesk.bkt.net.vn/fileUpload/Document/Flashcard/Flashcard_chu_de1.pdf"
											// target="_blank"
											// download

											// to={book[0] !== undefined && book[0].resource}
											// target="_blank"
											// download

											to={
												keyword === 'ebookdetail'
													? `/ebook/bookscrom/${id}`
													: `/readebook/${id}`
											}
										>
											<h3>Đọc sách</h3>
										</Link>
									</div>
								</div>
							</div>

							<div
								className={cx(
									'body__content-detail-text',
									'col-xl-7 col-lg-7 col-md-7 pb-4',
								)}
							>
								<div className={cx('body__content-detail-text-header')}>
									<h1>{book[0] !== undefined ? book[0].name : ''}</h1>
								</div>
								<div className={cx('body__content-detail-text-span')}>
									<span>
										Nhà xuất bản:{' '}
										{book[0] !== undefined ? book[0].nhaXuatBan : ''}
									</span>
									<span>Tác giả: {book[0] !== undefined ? [0].tacGia : ''}</span>
									<span>
										Năm xuất bản:{' '}
										{book[0] !== undefined ? book[0].namXuatBan : ''}
									</span>
									<span>Loại sách: Sách điện tử</span>
									<span>Hiện có : 1 cuốn sách sẵn sàng mượn</span>
									<span>
										Lượt xem: 1 <AiOutlineEye />
									</span>
								</div>

								<button onClick={handleDownLoad} className={cx('download')}>
									<span>
										<AiOutlineCloudDownload />
									</span>
									Tải PDF
								</button>

								<button onClick={handleBorrow} className={cx('download')}>
									<span>
										<AiOutlineCloudDownload />
									</span>
									Mượn sách
								</button>

								{!login ? (
									<Link
										to={config.routes.login}
										className={cx('body__content-detail-text-login')}
									>
										<span> Đăng nhập để đọc sách</span>
									</Link>
								) : (
									''
								)}
							</div>
						</div>
						<div className={cx('body__content-introduce')}>Giới thiệu sách</div>
						<div className={cx('no-content-detail')}>
							<span>Không có thông tin giới thiệu</span>
						</div>
						<BookList />
					</div>
				</div>
			</div>
		</>
	);
}

export default BookDetail;
