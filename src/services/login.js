import * as request from '~/utils/request'

export const login = async (q) => {
    try {
        const res = await request.post(`ApplicationUser/Login`, q, {
            params: {

            }
        })
        return res


    } catch (error) {
        console.log(error.request.status);
    }
}
