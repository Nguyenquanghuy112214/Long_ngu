import classNames from 'classnames/bind';
import styles from './PageScrom.scss';

const cx = classNames.bind(styles);
function PageScrom() {
	return (
		<div style={{ position: 'relative', zIndex: 100000 }} className={cx('pagescrom')}>
			<iframe
				width="100%"
				height="100%"
				src="http://resource.bkt.net.vn/fileUpload/Document/res/"
				// allowfullscreen
			/>
		</div>
	);
}

export default PageScrom;

{
	/* h5p */
}

{
	/* <iframe
				src="https://h5p.org/h5p/embed/1205734"
				width="100%"
				height="100%"
				frameborder="0"
				allowfullscreen="allowfullscreen"
				allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
				title="Image Choice"
			></iframe> */
}
{
	/* <script
				src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js"
				charset="UTF-8"
			></script> */
}
