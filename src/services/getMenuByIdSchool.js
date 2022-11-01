import * as request from '~/utils/request';

export const getMenuByIDSchool = async (q) => {
	try {
		const res = await request.getAll(`Menu/GetMenu/${q}`, {
			params: {},
		});
		// console.log("res", res);
		return res;
	} catch (error) {
		console.log('error', error);
	}
};
