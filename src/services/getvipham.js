import * as request from '~/utils/request'

export const getViPham = async (q) => {
    try {
        const res = await request.getAll('ViPham/GetViPhamByBanDoc', q, {
            params: {

            }
        })
        return res


    } catch (error) {
        console.log("error", error);
    }
}
