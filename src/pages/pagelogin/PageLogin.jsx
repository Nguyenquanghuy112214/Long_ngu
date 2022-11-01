import { useState, useEffect, useLayoutEffect, memo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { login } from '~/pages/pagelogin/loginSlice';
import config from '~/config';
import * as dangnhap from '~/services/login';

import banner from '../../assets/images/listbook/baner1.jpg';

import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [error, setError] = useState(false);
	const [checktoken, setCheckToken] = useState(false);
	const [showEyes, setShowEyes] = useState(false);

	const handleShowEye = () => {
		setShowEyes(!showEyes);
	};

	useLayoutEffect(() => {
		if (localStorage.getItem('token')) {
			navigate(config.routes.home);
		} else {
			navigate(config.routes.login);
		}
	}, [checktoken]);

	const handleSumit = (values) => {
		const fetchAPI = async () => {
			try {
				const dn = await dangnhap.login(values);
				dispatch(login(dn.data));
				localStorage.setItem('token', dn.data.token);
				localStorage.setItem('name', dn.data.fullName);

				setCheckToken(true);
			} catch (error) {
				setError(true);
			}
		};

		fetchAPI();
	};

	return (
		<Formik
			initialValues={{ Username: '', Password: '' }}
			validationSchema={Yup.object({
				Username: Yup.string().required('Vui lòng nhập trường này'),
				Password: Yup.string().required('Vui lòng nhập trường này'),
			})}
			onSubmit={handleSumit}
		>
			{(formikProps) => {
				const { values, errors, touched } = formikProps;
				return (
					<Form>
						<div className={cx('modal')}>
							<div className={cx('wrapper')}>
								<div className={cx('image')}>
									<img src={banner} alt="" />
								</div>
								<div className={cx('form', 'set-width')}>
									<h2 className={cx('title')}>Đăng nhập</h2>
									<div className={cx('content')}>{/* checkbok */}</div>
									<div className={cx('user')}>
										{errors.Username && touched.Username ? (
											<span className={cx('text-user', 'active')}>
												{errors.Username}
											</span>
										) : (
											<span className={cx('span')}>Nhập tên đăng nhập</span>
										)}

										<Field
											name="Username"
											type="text"
											placeholder="Nhập tên đăng nhập"
											className={
												errors.Username && touched.Username
													? cx('username', 'active')
													: cx('username')
											}
										/>
									</div>

									<div className={cx('password')}>
										{errors.Password && touched.Password ? (
											<span className={cx('text-password', 'active')}>
												{errors.Password}
											</span>
										) : (
											<span className={cx('span')}>Nhập mật khẩu</span>
										)}

										<Field
											name="Password"
											type={showEyes ? 'password' : 'text'}
											placeholder="Nhập tên đăng nhập"
											className={
												errors.Password && touched.Password
													? cx('password', 'active')
													: cx('password')
											}
										/>

										<i className={cx('icon')} onClick={handleShowEye}>
											{showEyes ? <AiFillEyeInvisible /> : <AiFillEye />}
										</i>
									</div>
									{error === true &&
									typeof localStorage.getItem('token') === 'object' ? (
										<div className={cx('toltal-error')}>
											Tên đăng nhập hoặc mật khẩu không chính xác
										</div>
									) : (
										''
									)}
									<button type="submit" className={cx('login')}>
										Đăng nhập
									</button>
								</div>
							</div>
						</div>
					</Form>
				);
			}}
		</Formik>
	);
}

export default memo(Login);

// const [check1, setCheck1] = useState(false);
// const [check2, setCheck2] = useState(false);

// const handleClick = () => {
// 	// 	setCheck1(!check1);
// 	// 	setCheck2(false);
// 	// };

// const handleClick2 = () => {
// 	setCheck2(!check2);
// 	setCheck1(false);
// };

{
	/* <span>Chọn loại tài khoản đăng nhập</span>
							<div className={cx('checkbox')}>
								<div className={cx('item1')}>
									<label className={cx('rounded-checkbox')} htmlFor="student">
										<input
											onClick={handleClick}
											checked={check1}
											id="student"
											type="checkbox"
											value="1"
										></input>
										<span className={cx('mark-round-checkbox')}></span>
									</label>
									<label htmlFor="student">Học sinh</label>
								</div>
								<div className={cx('item2')}>
									<label className={cx('rounded-checkbox1')} htmlFor="teacher">
										<input
											onClick={handleClick2}
											checked={check2}
											id="teacher"
											type="checkbox"
											value="2"
										></input>
										<span className={cx('mark-round-checkbox1')}></span>
									</label>
									<label htmlFor="teacher">Giáo viên</label>
								</div>
							</div> */
}
