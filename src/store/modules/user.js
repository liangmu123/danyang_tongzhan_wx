import {
    getQueryString
} from '@/api/getData.js'
import {
    getUserInfo
} from '@/api/api'
const user = {
    state: {
        token: "", //用户token
        userInfo: {
            nickname: "",
            avatar: "",
            mobile: "",
            is_bind: 0,
            volunteer_check: 0,
            is_volunteer: 0,
            score: 0
        }
    },
    mutations: {
        // 保存用户token
        SET_TOKEN: function (state, token) {
            state.token = token
            if (window.localStorage.getItem('') != null) {
                window.localStorage.removeItem('access_token')
            }
            window.localStorage.setItem('access_token', token)
        },
        setUserInfo: function (state, payload) {
            state.userInfo.nickname = payload.nickname

            state.userInfo.avatar = payload.avatar

            state.userInfo.mobile = payload.mobile

            state.userInfo.is_bind = payload.is_bind_mobile

            state.userInfo.volunteer_check = payload.volunteer_check

            state.userInfo.is_volunteer = payload.is_volunteer

            state.userInfo.score = payload.score

        },
        clearUserInfo: function (state) {
            state.token = ""
        }
    },
    actions: {
        // 获取用户token,
        getToken({
            commit
        }, {
            access_token,
            route
        }) {
            return new Promise(resolve => {
                if (access_token) {
                    commit('SET_TOKEN', access_token)
                    resolve()
                    return
                }
                //alert(window.location.href)
                var token = getQueryString('access_token')
                if (token == null) {
                    // const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
                    // if(IS_PROD){
                    //     var url = encodeURIComponent(window.location.origin + '/' + window.location.hash)
                    // }else{
                    //     var url = encodeURIComponent(window.location.origin + '/' + window.location.hash)
                    // }
                    var url = encodeURIComponent(window.location.origin + '/' + window.location.hash)
                    // console.log(window.location,'----user.js--------')
                    // console.log(process.env.VUE_APP_AUTHORIZATION_PATH)
                    console.log(window.location.origin, '-----origin-----', window.location.hash, '------hash----')
                    // return
                    window.location.href = (process.env.VUE_APP_AUTHORIZATION_PATH + url)
                } else {
                    commit('SET_TOKEN', token)
                    resolve()
                }
            })
        },
        // // 获取用户信息
        // getUserInfo(context) {
        //     return new Promise(resolve => {
        //         getUserInfo().then(res => {
        //             console.log(res.data.data);
        //             return
        //             const userInfo = res.data.data
        //             context.commit('setUserInfo', userInfo)
        //             resolve()
        //         })
        //     })
        // }
    }
}
export default user