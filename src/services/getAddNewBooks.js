import * as request from '~/utils/request'

export const getAddNewsBooks = async () => {
    try {
        const res = await request.getAll('AnPham/GetAPByNhomLoaiAP', {
            params: {

            }
        })
        return res


    } catch (error) {
        console.log("error", error);
    }
}
