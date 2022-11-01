import config from '~/config';

import BookDetail from '~/pages/pagebookdetail/PageBookDetail';
import Book from '~/pages/pagebook/PageBook';
import Home from '~/pages/pagehome/PageHome';
import Introduce from '~/pages/pageintroduce/PageIntroduce';
import Login from '~/pages/pagelogin/PageLogin';
import ReadEbook from '~/pages/pageflip/PageFlip';
import Profile from '~/pages/pageprofile/PageProfile';
import AdvancedSearch from '~/pages/pageadvancedsearch/AdvancedSearch';
import BookGrid from '~/pages/pagegirdbook/PageGridBook';
import PageNews from '~/pages/pagenews/PageNews';
import PageNewsDetail from '~/pages/pagenewsdetail';
import PageScrom from '~/pages/pagescrom';

const publicRoutes = [
	{ path: config.routes.home, component: Home },
	{ path: config.routes.lv1, component: Book },

	{ path: config.routes.news, component: PageNews },

	{ path: config.routes.grid, component: BookGrid },

	{ path: config.routes.bookdetail, component: BookDetail },
	{ path: config.routes.ebookdetail, component: BookDetail },
	{ path: config.routes.audiobookdetail, component: BookDetail },
	{ path: config.routes.videodetail, component: BookDetail },
	{ path: config.routes.newsdetail, component: PageNewsDetail, layout: 'navbarnone' },

	{ path: config.routes.bookscrom, component: PageScrom, layout: 'navbarnone' },

	{ path: config.routes.login, component: Login },
	{ path: config.routes.introduce, component: Introduce, layout: 'nonavbar' },
	{ path: config.routes.readebook, component: ReadEbook, layout: 'navbarnone' },
	{ path: config.routes.profile, component: Profile },
	{ path: config.routes.advancedsearch, component: AdvancedSearch },
];

export default publicRoutes;
