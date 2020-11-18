// /recommend/resource
import { http } from '../util/http.js'
import router from '../router'
import { Toast } from 'vant';
export const resource = () => {
    return http({ url: `/recommend/resource` }).then(res => {
        return res;
    })
}