import * as request from '~/utils/request'

export const getListBook = async () => {
    try {
        const res = await request.getAll('AnPham/GetAll', {
            params: {

            }
        })
        return res


    } catch (error) {
        console.log("error", error);
    }
}
