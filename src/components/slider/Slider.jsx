import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

import Slide1 from '~/assets/images/slider/slide1.png';
import Slide2 from '~/assets/images/slider/slide2.png';
import Slide3 from '~/assets/images/slider/slide3.png';
import Slide4 from '~/assets/images/slider/slide4.png';

import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

function Slider() {
	SwiperCore.use([EffectFade, Autoplay, Pagination]);

	return (
		<motion.div
			initial={{ opacity: 0.1, scale: 0.6 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ delay: 0.2, duration: 1 }}
		>
			<Swiper
				modules={[Autoplay, EffectFade]}
				grabCursor={true}
				spaceBetween={0}
				slidesPerView={1}
				autoplay={{ delay: 4000 }}
				loop={true}
				className={cx('swiper')}
				pagination={true}
				effect="fade"
			>
				<SwiperSlide className={cx('slider')}>
					<img src={Slide1} alt="logo" />
				</SwiperSlide>
				<SwiperSlide className={cx('slider')}>
					<img src={Slide2} alt="logo" />
				</SwiperSlide>
				<SwiperSlide className={cx('slider')}>
					<img src={Slide3} alt="logo" />
				</SwiperSlide>
				<SwiperSlide className={cx('slider')}>
					<img src={Slide4} alt="logo" />
				</SwiperSlide>
			</Swiper>
		</motion.div>
	);
}

export default Slider;
