import * as request from '~/utils/request'

export const getCount = async (q) => {
    try {
        const res = await request.getCountBook(`anpham/GetCountAPByLoaiAPID/${q}`, {
            params: {
                mode: 'no-cors'
            }
        })
        return res.data


    } catch (error) {
        console.log("error", error);
    }
}
