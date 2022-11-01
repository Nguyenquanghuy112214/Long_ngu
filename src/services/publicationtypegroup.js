import * as request from '~/utils/request'

export const getAllFolder = async () => {
    try {
        const res = await request.getAll('NhomLoaiAnPham/GetAll', {
            params: {

            }
        })
        return res


    } catch (error) {
        console.log("error", error);
    }
}
