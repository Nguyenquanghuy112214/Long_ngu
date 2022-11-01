import * as request from '~/utils/request'

export const getMostViewedBooks = async () => {
    try {
        const res = await request.getAll('AnPham/GetAPNumOfViewByNhomAP', {
            params: {

            }
        })
        return res


    } catch (error) {
        console.log("error", error);
    }
}
