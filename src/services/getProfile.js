import * as request from '~/utils/request';
import config from '~/config'

export const getProfile = async (q) => {
    try {
        const res = await request.getAll('ApplicationUser/Profile', q, {
            params: {

            }
        })
        return res


    } catch (error) {

        localStorage.clear();
        return window.location.href = config.routes.login

    }
}
