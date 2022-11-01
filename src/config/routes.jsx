const routes = {
	home: '/',

	lv1: '/lv1/:namemenu/:idmenu/:indexmenu',

	grid: '/grid/:namelap/:nameap/:idap/:indexmenu',

	news: '/news',
	detail: '/book/:keyword/:value/:id',
	bookscrom: '/ebook/:keyword/:id',

	newsdetail: '/news/:keyword/:id',
	login: '/login',
	readebook: '/:keyword/:id',
	introduce: '/introduce',
	profile: '/profile',
	advancedsearch: '/advancedsearch',
};

export default routes;
