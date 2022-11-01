import { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import classNames from 'classnames/bind';
import styles from './PageFlipSkeleton.module.scss';

const cx = classNames.bind(styles);

function PageFlipSkeleton() {
	const [widthdevice1, setWidthDevice1] = useState(300);
	const [widthdevice2, setWidthDevice2] = useState(300);
	useEffect(() => {
		if (window.innerWidth <= 1400) {
			setWidthDevice1(150);
			setWidthDevice2(90);
		}
	}, []);
	return (
		<SkeletonTheme baseColor="#d6d2d2" highlightColor="#ffffff94">
			<div className={cx('row ')}>
				<div className="col-md-6"></div>
				<div className="col-md-6 bg-white p-5">
					<div className={cx('d-flex justify-content-between align-items-center')}>
						<Skeleton height={80} width={widthdevice1} />
						<Skeleton circle height={widthdevice2} width={widthdevice2} />
					</div>
					<div className="d-flex ">
						<Skeleton height={80} width={widthdevice1} />
					</div>

					<Skeleton height={400} />
					<Skeleton height={40} width="50%" />
				</div>
			</div>
		</SkeletonTheme>
	);
}

export default PageFlipSkeleton;
