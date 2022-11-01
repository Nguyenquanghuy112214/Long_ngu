import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listNameFolder } from '~/components/listnavbar/listNavBarSlice';
import { typeGroup1, typeGroup2, typeGroup3, typeGroup4 } from '~/components/listnavbar/listNhomloaiSlice';

import * as getLoaiSach from '~/services/getLoaiSach';
import * as getAllFolder from '~/services/publicationtypegroup';

import * as getIDSchool from '~/services/getIDSchool';
import * as getMenuByIdSchool from '~/services/getMenuByIdSchool';

import anh6 from '~/assets/images/icon_category/introduce.png';
import anh7 from '~/assets/images/icon_category/news.png';
import { postMenu } from './postMenu';

import config from '~/config';

function List1() {
	const dispatch = useDispatch();
	const listbook = useSelector((state) => state.ShowTypeGroup);

	useEffect(() => {
		const fetch = async () => {
			const res = await getIDSchool.getIDSchool(window.location.hostname);
			const res1 = await getMenuByIdSchool.getMenuByIDSchool(res[0].capTruongId);
			dispatch(postMenu(res1.data));
		};
		fetch();
	}, [window.location]);

	useEffect(() => {
		const fetchAPI = async () => {
			const [res, typeBook1, typeBook2, typeBook3, typeBook4] = await Promise.all([
				getAllFolder.getAllFolder(),
				getLoaiSach.getTypeBook(1),
				getLoaiSach.getTypeBook(2),
				getLoaiSach.getTypeBook(3),
				getLoaiSach.getTypeBook(4),
			]);
			// Gửi tên foler (sách giáo khoa, sách điện tử, sách nói,...)
			const action = listNameFolder(res);

			// Hiển thị thông tin theo nhóm loại (Toán, tiếng việt, sách thiếu nhi, lịch sử,...)
			const action1 = typeGroup1(typeBook1);
			const action2 = typeGroup2(typeBook2);
			const action3 = typeGroup3(typeBook3);
			const action4 = typeGroup4(typeBook4);

			if (listbook.length === 0) {
				dispatch(action);
				dispatch(action1);
				dispatch(action2);
				dispatch(action3);
				dispatch(action4);
			}
		};

		fetchAPI();
	}, []);
}

export default List1;

const list2 = [
	{ title: 'Giới thiệu', path: config.routes.introduce, img: anh6 },
	{ title: 'Tin tức', path: config.routes.news, img: anh7 },
];

export { list2 };
