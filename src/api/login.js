import { http } from '../util/http.js'
import router from '../router'
import { Toast } from 'vant';

export const login = (data) => {
    console.log(http);
    return http({
        url: `/login/cellphone?phone=${data.phone}&password=${data.pws}`
    }).then(res => {
        if (res.code == 502) {
            Toast(res.msg);
        } else if (res.code == 200) {
            sessionStorage.setItem("u_n", res.profile.userId);
            sessionStorage.getItem("from") ? router.replace(sessionStorage.getItem("from")) : router.replace("/home");
        }
    })
}