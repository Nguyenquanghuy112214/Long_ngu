import * as request from '~/utils/request'

export const getTypeBook = async (q) => {
    try {
        const res = await request.getAll(`LoaiAnPham/GetAllByNhomAPID/${q}`, {
            params: {

            }
        })
        // console.log("res", res);
        return res


    } catch (error) {
        console.log("error", error);
    }
}
