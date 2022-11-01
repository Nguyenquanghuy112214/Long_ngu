import * as request from '~/utils/request';

export const getIDSchool = async (q) => {
	try {
		const res = await request.getAll(`TruongHoc/GetInfo/${q}`, {
			params: {},
		});
		return res;
	} catch (error) {
		console.log('error', error);
	}
};
