import * as request from '~/utils/request'

export const getNews = async () => {
    try {
        const res = await request.getAll('news/getall', {
            params: {

            }
        })
        return res


    } catch (error) {
        console.log("error", error);
    }
}
