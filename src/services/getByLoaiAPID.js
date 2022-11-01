import * as request from '~/utils/request'

export const getByLoaiAPID = async (q) => {
    try {
        const res = await request.getAll(`anpham/GetByLoaiAPID/${q}`, {
            params: {

            }
        })
        return res


    } catch (error) {
        console.log("error", error);
    }
}
