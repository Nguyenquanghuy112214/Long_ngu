import classNames from 'classnames/bind';
import styles from './Introduce.module.scss';

import anh1 from '~/assets/images/introduce/header.png';
import anh2 from '~/assets/images/introduce/body1.png';
import anh3 from '~/assets/images/introduce/body2.png';
import anh4 from '~/assets/images/introduce/body3.png';
const cx = classNames.bind(styles);

function Introduce() {
	return (
		<div className={cx('wrapper')}>
			<div id="header" className={cx('row gx-5', 'header')}>
				<div className={cx('img-header', 'col-xl-6 col-md-6')} data-aos="fade-left">
					<img src={anh1} alt="" />
				</div>
				<div className={cx('text-header', 'col-xl-6 col-md-6')} data-aos="fade-right">
					<h2>
						Giới thiệu sản phẩm và giải pháp thư viện điện tử, thư viện số trong các trường học
					</h2>
					<p>
						QILIB.NET là giải pháp phần mềm Thư viện điện tử – Thư viện số được Quảng Ích xây
						dựng và phát triển từ năm 2003. Với tính năng ưu việt vượt trội trong quản lý tích
						hợp nghiệp vụ thư viện truyền thống và thư viện điện tử hiện đại, QILIB.NET đã được
						ứng dụng thành công tại hàng nghìn tổ chức, đơn vị, trường học trên toàn quốc.
					</p>
					<p>
						QILIB.NET được xây dựng trên nền tảng công nghệ điện toán đám mây, người dùng không
						cần phải cài đặt, chỉ cần có mạng Internet là có thể sử dụng được hệ thống ở bất cứ
						nơi đâu. Đây là sản phẩm được thiết kế đáp ứng đầy đủ và tốt nhất cho nhu cầu của
						nhà quản lý trong việc quản lý thư viện. Các chức năng của Hệ thống được thiết kế
						theo chuẩn thống nhất, đáp ứng đầy đủ nghiệp vụ quản lý thư viện trong các nhà
						trường. Đặc biệt hệ thống thư viện cung cấp đầy đủ các mẫu biểu báo cáo, phục vụ đắc
						lực cho ban giám hiệu nhà trường trong quá trình theo dõi và quản lý thư viện.
					</p>
				</div>
			</div>
			<div className={cx('row', 'body')} data-aos="flip-left">
				<div className={cx('col-xl-4 col-md-4 col-lg-4 col-sm-4')}>
					<div className={cx('item')}>
						<img src={anh2} alt="" />
						<div className={cx('item-body')}>
							<div className={cx('item-body__header')}>
								<span className={cx('count')}>01</span>
								<span className={cx('sub-count')}>Lợi ích về mặt nghiệp vụ</span>
							</div>
							<p className={cx('item-body__content')}>
								Về mặt nghiệp vụ, Hệ thống quản lý thư viện trường học được xây dựng dựa
								trên các chuẩn chung của hệ thống thư viện thế giới và sử dụng giao diện
								Web nên đảm bảo khả năng tương tác, tương thích với các hệ thống khác
								một cách dễ dàng. Hệ thống quản lý thư viện trường học bao gồm các phân
								hệ OPAC, Lưu thông, Biên mục, Bổ sung, Ấn phẩm định kỳ, Bạn đọc, Thiết
								lập hệ thống, và đặc biệt chức năng thống kê, báo cáo hết sức mềm dẻo,
								thuận tiện và chính xác.
							</p>
						</div>
					</div>
				</div>
				<div className={cx('col-xl-4 col-md-4 col-lg-4 col-sm-4')}>
					<div className={cx('item')}>
						<img src={anh3} alt="" />
						<div className={cx('item-body')}>
							<div className={cx('item-body__header')}>
								<span className={cx('count')}>02</span>
								<span className={cx('sub-count')}>Lợi ích về phía nhà trường</span>
							</div>
							<p className={cx('item-body__content')}>
								Về phía nhà trường, ban lãnh đạo có thể tự điều chỉnh việc bổ sung và
								quản lý hiệu quả nguồn tài liệu, đánh giá chính xác nhu cầu và khả năng
								thông tin của học sinh, phân tích số liệu và đưa ra báo cáo cần thiết về
								hoạt động của thư viện.
							</p>
						</div>
					</div>
				</div>
				<div className={cx('col-xl-4 col-md-4 col-lg-4 col-sm-4')}>
					<div className={cx('item')}>
						<img src={anh4} alt="" />
						<div className={cx('item-body')}>
							<div className={cx('item-body__header')}>
								<span className={cx('count')}>03</span>
								<span className={cx('sub-count')}>
									Lợi ích về phía thư viện, cán bộ thư viện
								</span>
							</div>
							<p className={cx('item-body__content')}>
								Về phía thư viện, cán bộ thư viện có thể quản lý tốt các ấn phẩm, tài
								sản thư viện và tự động hóa các khâu xử lý nghiệp vụ từ đơn giản đến
								phức tạp. Bạn đọc cũng dễ dàng tiếp cận, khai thác tối đa nguồn tài
								nguyên của thư viện phục vụ mục đích học tập và nghiên cứu. Hệ thống
								quản lý thư viện trường học đã thực sự góp phần chuẩn hoá nghiệp vụ thư
								viện, nâng cao hiệu quả quản lý thư viện trong trường học.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* <div>
				<h2> Hệ thống quản lý Thư viện điện tử</h2>
				<div className={cx('row')}>
					<div>
						<span>
							Quản lý các tài liệu, bài giảng, hoạt động, hình ảnh của trường thông qua các
							tài liệu dạng Video, hình ảnh, audio, e-Learning…
						</span>
						<span>
							Quản lý các tài liệu, bài giảng, hoạt động, hình ảnh của trường thông qua các
							tài liệu dạng Video, hình ảnh, audio, e-Learning…
						</span>
					</div>
				</div>
			</div> */}
		</div>
	);
}

export default Introduce;
