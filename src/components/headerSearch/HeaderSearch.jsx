import { useState, useEffect, forwardRef, memo, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import Tippy from '@tippyjs/react';
import TippyHead from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';

import { postDataSearch } from '~/components/headerSearch/HeaderSearchSlice';
import SubMenu from '~/components/submenuheader/SubMenuHeader';

import Recognition from '~/components/recognition';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import config from '~/config';

import { show } from '~/components/searchMb/searchMbSlice';

import classNames from 'classnames/bind';
import styles from './HeaderSearch.module.scss';

const cx = classNames.bind(styles);
const HeaderSearch = forwardRef((props, ref) => {
	const dispatch = useDispatch();
	const ref1 = useRef(null);
	const { keyword } = useParams();
	const [readebook, setReadEbook] = useState(false);
	const [togglesubmenu, setToggleSubmenu] = useState(false);
	const [value, setValue] = useState('');
	const isShow = useSelector((state) => state.ShowSearchMb.isShow);
	const { transcript, resetTranscript } = useSpeechRecognition();

	useEffect(() => {
		const hideSearchMb = (e) => {
			if (!ref1.current.contains(e.target)) {
				setToggleSubmenu(false);
			}
		};
		document.body.addEventListener('click', hideSearchMb);
		return () => document.body.removeEventListener('click', hideSearchMb);
	}, []);

	const handleSearch = () => {
		dispatch(postDataSearch(value));
		setValue('');
		resetTranscript();
	};
	useEffect(() => {
		setValue(transcript);
	}, [transcript]);

	const handleToggleSubmenu = () => {
		setToggleSubmenu(!togglesubmenu);
	};

	return (
		<div
			ref={ref}
			className={
				isShow
					? cx('header-search', 'active', 'hide-search-header')
					: cx('header-search', 'hide-search-header')
			}
		>
			<div className={cx('header-search__input')}>
				<div className={cx('header-search__input-down', 'hide-header-search__input-down')} ref={ref1}>
					<button className={cx('btn1-title')} onClick={handleToggleSubmenu}>
						Thể loại
						<span>
							<AiIcons.AiOutlineCaretDown />
						</span>
					</button>

					<AnimatePresence>
						{togglesubmenu && (
							<motion.div
								initial={{ y: 10, opacity: 0 }}
								animate={{
									y: togglesubmenu ? 26 : 0,
									opacity: togglesubmenu ? 1 : 0,
								}}
								exit={{ y: 50, opacity: 0, transition: { duration: 0.3 } }}
								className={cx('box')}
							>
								<SubMenu />
							</motion.div>
						)}
					</AnimatePresence>
				</div>

				<div className={cx('header-search__input-wrapper')}>
					<input
						className={cx('input-title')}
						value={value}
						onChange={(e) => setValue(e.target.value < 0 ? 0 : e.target.value)}
						type={'text'}
						placeholder={'Tiêu đề tài liệu'}
					/>
					{!!value && (
						<span onClick={() => setValue('')} className={cx('close')}>
							<AiIcons.AiFillCloseCircle />
						</span>
					)}

					{!readebook ? (
						<div className={cx('wrapper-micro')} onClick={SpeechRecognition.startListening}>
							<span className={cx('micro')}>
								<FaIcons.FaMicrophone />
							</span>
						</div>
					) : (
						''
					)}
					<div className={cx('icon-search')} onClick={handleSearch}>
						<FiSearch />
					</div>
				</div>
			</div>

			<Link to={config.routes.advancedsearch} className={cx('header-search__btn', 'hide-advanced__earch')}>
				Tìm kiếm nâng cao
			</Link>
		</div>
	);
});

export default memo(HeaderSearch);
