import * as request from '~/utils/request'

export const getInfoAnPham = async (q) => {
    try {
        const res = await request.getDetailbook(`anpham/GetInfoAnPham/${q}`, {
            params: {
                mode: 'no-cors'
            }
        })
        return res


    } catch (error) {
        console.log("error", error);
    }
}
