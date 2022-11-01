import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { GiEarthAmerica } from 'react-icons/gi';
import wave from '~/assets/images/wave3.png';

import Message from '~/components/message/Message';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
function Footer() {
	return (
		<div>
			<section>
				<div className={cx('wave', 'wave1')}></div>
				<div className={cx('wave', 'wave2')}></div>
				<div className={cx('wave', 'wave3')}></div>
				<div className={cx('wave', 'wave4')}></div>
			</section>
			<div className={cx('wrapper')}>
				<div className={cx('hotline-phone-ring')}>
					<div className={cx('hotline-phone-ring-circle')}></div>
					<div className={cx('hotline-phone-ring-circle-fill')}></div>
					<div className={cx('hotline-phone-ring-img-circle')}>
						<a href="tel:0337218868" className={cx('pps-btn-img')}>
							<BsFillTelephoneFill style={{ color: 'white' }} />
						</a>
					</div>
				</div>
				<Message />
				<div style={{ position: 'relative' }} className={cx('a', 'container-lg')}>
					<div className={cx('blur', 'blur1')}></div>
					{/* <div className={cx('blur', 'blur2')}></div> */}
					<div className={cx('row', 'wrapper-content')}>
						<div className={cx('col-xl-4 col-lg-4 col-md-4 d-flex', 'location', 'fs-footer')}>
							<div className={cx('location-icon')}>
								<MdLocationOn />
							</div>
							<div className={cx('location-content')}>
								<h3>Trụ sở chính: Số 10 Ngõ 42 Đường Đức Thắng Bắc Từ Liêm Hà Nội</h3>
								<h3>Email: gpsdbkt@gmail.com</h3>
								<h3>Website: www.bkt.net.vn</h3>
							</div>
						</div>
						<div className={cx('col-xl-4 col-lg-4 col-md-4 d-flex', 'phone', 'fs-footer')}>
							<div className={cx('phone-icon')}>
								<FaPhoneAlt />
							</div>
							<div className={cx('phone-content')}>
								<h3>Hotline kinh doanh: 033 721 8868</h3>
								<h3>Email: gpsdbkt@gmail.com</h3>
							</div>
						</div>
						<div className={cx('col-xl-4 col-lg-4 col-md-4 d-flex', 'earth', 'fs-footer')}>
							<div className={cx('earth-icon')}>
								<GiEarthAmerica />
							</div>
							<div className={cx('earth-content')}>
								<h3>Điện thoại: 0243 752 5253</h3>
								<h3>Hotline kỹ thuật 24/7: 033 721 8868</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
