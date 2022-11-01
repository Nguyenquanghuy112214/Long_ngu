import * as request from '~/utils/request'

export const getNewsDetail = async (q) => {
    try {
        const res = await request.getAll(`news/Detail/${q}`, {
            params: {

            }
        })
        return res


    } catch (error) {
        console.log("error", error);
    }
}
