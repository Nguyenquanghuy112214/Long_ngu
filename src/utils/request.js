import axios from "axios";


const request = axios.create({
    baseURL: "https://apilib.bkt.net.vn/",

})

export const getAll = async (path, option = {}) => {
    const respone = await request.get(path, option)
    return respone.data
}
export const getDetailbook = async (path, option) => {
    const respone = await request.get(path, option)
    return respone
}
export const getCountBook = async (path, option = {}) => {
    const respone = await request.get(path, option)
    return respone
}
export const postviewsnews = async (path, option = {}) => {
    const respone = await request.put(path, option)
    return respone
}



export const post = async (path, option = {}) => {
    const respone = await request.post(path, option)
    return respone.data
}
export default request