import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page as ReactPdfPage } from 'react-pdf/dist/esm/entry.webpack';
import sampPDF from '~/assets/pdf/test2.pdf';
import { BiNavigation } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';

import PageFlipSketeton from '~/components/pageflipskeleton';

import classNames from 'classnames/bind';
import styles from './PageFlip.module.scss';

import { forwardRef, useRef } from 'react';

const cx = classNames.bind(styles);

const Page = forwardRef((props, ref) => {
	return (
		<div className={cx('page')} ref={ref}>
			<div className={cx('page-content')}>
				<ReactPdfPage pageNumber={props.pageNumber} loading="" />
			</div>
		</div>
	);
});

function PageFlip() {
	const [numPages, setNumPages] = useState(null);
	const [loading, setLoading] = useState(true);
	const [screen, setScreen] = useState(false);

	const [shownavigate, setShowNavigate] = useState(false);
	const [currentnumber, setNumberPage] = useState(0);
	const [numberpre, setNumberPre] = useState(0);
	const pageSlide = useRef();

	function onDocumentLoadSuccess({ numPages }) {
		if (numPages) {
			setNumPages(numPages);
		}
		setTimeout(() => setLoading(false), 9000);
		return () => {
			clearTimeout(loading);
		};
	}
	const handleFlip = (e) => {
		setNumberPage(Number(e.data));
		setNumberPre(Number(e.data));
	};
	const handlePre = () => {
		pageSlide.current.pageFlip().flipPrev();
	};

	const handNext = () => {
		pageSlide.current.pageFlip().flipNext();
	};

	const handleZoom = () => {
		let myDocument = document.documentElement;

		setScreen(!screen);
		if (screen === false) {
			if (myDocument.requestFullscreen) {
				myDocument.requestFullscreen();
			} else if (myDocument.msRestFullscreen) {
				myDocument.msRestFullscreen();
			} else if (myDocument.mozRestFullscreen) {
				myDocument.mozRestFullscreen();
			} else if (myDocument.webkitRestFullscreen) {
				myDocument.webkitRestFullscreen();
			}
		} else if (screen) {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.msexitscreen) {
				document.msexitscreen();
			} else if (document.mozexitFullscreen) {
				document.mozexitFullscreen();
			} else if (document.webkitexitFullscreen) {
				document.webkitexitFullscreen();
			}
		}
	};
	const handleShowNavigate = () => {
		setShowNavigate(!shownavigate);
	};
	const handeChangeNumber = (e) => {
		setNumberPage(Number(e.target.value));
	};

	const handleNavigate = () => {
		if (numberpre === 0 && currentnumber === 1) {
			pageSlide.current.pageFlip().flipNext();
			setNumberPre(Number(currentnumber));
		}

		// Xử lý next trang start
		else if (
			currentnumber > numberpre &&
			currentnumber !== numberpre &&
			currentnumber - numberpre > 1 &&
			(currentnumber - numberpre) % 2 !== 0 &&
			numberpre === 0
		) {
			for (var i = 0; i <= Math.floor((currentnumber - numberpre) / 2); i++) {
				pageSlide.current.pageFlip().flipNext();
				setNumberPre(Number(currentnumber));
			}
			console.log('th3 currentnumber > numberpre >2', Math.floor((currentnumber - numberpre) / 2));
		} else if (
			currentnumber > numberpre &&
			currentnumber !== numberpre &&
			currentnumber - numberpre > 1 &&
			(currentnumber - numberpre) % 2 !== 0 &&
			numberpre !== 0
		) {
			for (var i = 0; i < Math.floor((currentnumber - numberpre) / 2); i++) {
				pageSlide.current.pageFlip().flipNext();
				setNumberPre(Number(currentnumber));
			}
			console.log('th3 currentnumber > numberpre >2', Math.floor((currentnumber - numberpre) / 2));
		} else if (
			currentnumber > numberpre &&
			currentnumber !== numberpre &&
			currentnumber - numberpre > 1 &&
			(currentnumber - numberpre) % 2 === 0
		) {
			for (var i = 0; i < Math.floor((currentnumber - numberpre) / 2); i++) {
				pageSlide.current.pageFlip().flipNext();
				setNumberPre(Number(currentnumber));
			}
		} else if (
			currentnumber > numberpre &&
			currentnumber !== numberpre &&
			currentnumber - numberpre === 1 &&
			currentnumber % 2 !== 0 &&
			numberpre % 2 === 0
		) {
			pageSlide.current.pageFlip().flipNext();
			setNumberPre(Number(currentnumber));
		}

		// Xử lý next trang end

		// Xử lý pre trang start
		else if (
			numberpre > currentnumber &&
			numberpre - currentnumber > 1 &&
			numberpre % 2 === 0 &&
			(numberpre - currentnumber) % 2 !== 0
		) {
			for (var i = 0; i < Math.floor((numberpre - currentnumber) / 2); i++) {
				pageSlide.current.pageFlip().flipPrev();
				setNumberPre(Number(currentnumber));
			}
			console.log('test', Math.floor((numberpre - currentnumber) / 2));
		} else if (
			numberpre > currentnumber &&
			numberpre - currentnumber > 1 &&
			numberpre % 2 !== 0 &&
			(numberpre - currentnumber) % 2 !== 0
		) {
			for (var i = 0; i <= Math.floor((numberpre - currentnumber) / 2); i++) {
				pageSlide.current.pageFlip().flipPrev();
				setNumberPre(Number(currentnumber));
			}
			console.log('test', Math.floor((numberpre - currentnumber) / 2));
		} else if (
			numberpre > currentnumber &&
			numberpre - currentnumber > 1 &&
			currentnumber !== numberpre &&
			(numberpre - currentnumber) % 2 !== 0
		) {
			for (var i = 0; i <= Math.floor((numberpre - currentnumber) / 2); i++) {
				pageSlide.current.pageFlip().flipPrev();
				setNumberPre(Number(currentnumber));
			}
			console.log('test', Math.floor((numberpre - currentnumber) / 2));
		} else if (
			numberpre > currentnumber &&
			currentnumber !== numberpre &&
			numberpre - currentnumber > 1 &&
			(numberpre - currentnumber) % 2 === 0
		) {
			for (var i = 0; i < Math.floor((numberpre - currentnumber) / 2); i++) {
				pageSlide.current.pageFlip().flipPrev();
				setNumberPre(Number(currentnumber));
			}
			console.log('test', Math.floor((numberpre - currentnumber) / 2));
		} else if (numberpre - currentnumber === 1 && numberpre % 2 !== 0 && currentnumber % 2 === 0) {
			pageSlide.current.pageFlip().flipPrev();
			setNumberPre(Number(currentnumber));
		}
		// Xử lý Pre trang end
	};
	return (
		<div>
			<div className={cx('box-navigate', 'd-flex', shownavigate ? 'active' : '')}>
				<button
					className={cx(
						'navgate-pageflip',
						'size-navigate',
						'd-flex align-items-center',
						shownavigate ? 'active' : '',
					)}
					onClick={handleShowNavigate}
				>
					<BiNavigation />
				</button>
				<div className={cx('wrapper-handle', 'd-none')}>
					<span onClick={handlePre}>{'<<'}</span>
					<div className={cx('totalnumber-page', 'd-flex')}>
						<input
							value={currentnumber}
							onChange={(e) => handeChangeNumber(e)}
							type="number"
							placeholder="Nhập trang cần tìm..."
						/>
						<span>/</span>

						<span> {numPages}</span>
					</div>

					<span onClick={handleNavigate}>
						<FiSearch />
					</span>
					<span onClick={handNext}>{'>>'}</span>
				</div>
			</div>

			<div className={cx('bgflip', 'row justify-content-xl-center ')}>
				<div className={cx('mt-5')}>
					<Document file="/pdf/test2.pdf" onLoadSuccess={onDocumentLoadSuccess} loading="">
						<HTMLFlipBook
							width={700}
							height={1000}
							minWidth={315}
							maxWidth={1000}
							minHeight={420}
							maxHeight={900}
							size="stretch"
							maxShadowOpacity={0.5}
							showCover={true}
							// mobileScrollSupport={false}
							onFlip={(e) => handleFlip(e)}
							className={cx('demo-book')}
							ref={pageSlide}
						>
							{loading ? (
								<PageFlipSketeton />
							) : (
								Array.from(Array(numPages !== null && numPages), (item, index) => {
									return <Page key={index} pageNumber={index + 1} />;
								})
							)}
						</HTMLFlipBook>
					</Document>
				</div>
			</div>
		</div>
	);
}

export default PageFlip;
