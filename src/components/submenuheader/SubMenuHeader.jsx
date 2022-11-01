import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import config from '~/config';

import classNames from 'classnames/bind';
import styles from './SubMenu.module.scss';

const cx = classNames.bind(styles);

function SubMenu() {
	const list = useSelector((state) => state.ShowNavBar);
	return (
		<div className={cx('sub-ctg')} data-aos="fade-up">
			<ul>
				{list[0] !== undefined &&
					list[0].map((menu, index) => {
						return (
							<li key={index}>
								<Link to={config.routes.home}>
									<div className={cx('sub-ctg__content')}>
										<Link
											to={
												(+menu.nhomLoaiAnPhamId === 1 &&
													config.routes.book) ||
												(+menu.nhomLoaiAnPhamId === 2 &&
													config.routes.readebook)
											}
										>
											{/* <img src={menu.img} alt="" /> */}

											{menu.tenNhomLoaiAnPham}
										</Link>
									</div>
								</Link>
							</li>
						);
					})}
			</ul>
		</div>
	);
}

export default SubMenu;
