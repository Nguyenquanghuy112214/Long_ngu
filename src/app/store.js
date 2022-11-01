import { configureStore } from '@reduxjs/toolkit';
import ShowSearchMb from '~/components/searchMb/searchMbSlice';
import ShowNavBar from '~/components/listnavbar/listNavBarSlice';
import ShowTypeGroup from '~/components/listnavbar/listNhomloaiSlice';
import PostCount from '~/components/listnavbar/postCountSlice';
import postIDBook from '~/components/listnavbar/postIDBookSlice';
import Login from '~/pages/pagelogin/loginSlice';
import PostGridBook from '~/components/gridbook/postGridBookSlice';
import BorrowBook from '~/pages/pagebookdetail/BorrowBookSlice';
import postdetailBook from '~/pages/pagebookdetail/detailbookSlice';
import modalNotify from '~/components/headernotify/HeaderNotifySlice';
import pushRelateBook from '~/components/bookcard/PushRelatedSlice';
import pushAllNews from '~/components/navbar/PushDataNewsSlice';
import dataSearch from '~/components/headerSearch/HeaderSearchSlice';
import getViPham from '~/pages/pagebookdetail/getViPhamSlice';
import PostMenu from '~/components/listnavbar/postMenu';

const rootReducer = {
	ShowSearchMb: ShowSearchMb,
	ShowNavBar: ShowNavBar,
	ShowTypeGroup: ShowTypeGroup,
	PostCount: PostCount,
	Login: Login,
	postIDBook: postIDBook,
	PostGridBook: PostGridBook,
	BorrowBook: BorrowBook,
	postdetailBook: postdetailBook,
	modalNotify: modalNotify,
	pushRelateBook: pushRelateBook,
	pushAllNews: pushAllNews,
	dataSearch: dataSearch,
	getViPham: getViPham,
	PostMenu: PostMenu,
};
const store = configureStore({
	reducer: rootReducer,
});

export default store;
