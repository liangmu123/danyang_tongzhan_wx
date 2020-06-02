import axios from 'axios'
import {
    get_postview
} from '@api/api'
// 浏览统计
export default function postView(to) {
    //console.log(to.name)
    if (to.name != 'videoDetails' && to.name != 'articleDetails') {
        return
    }
    var params = {}
    params.device = 'wx'
    params.access_token = window.localStorage.getItem('access_token')
    if (to.query.id) {
        params.id = to.query.id
    }
    params.tpe = 1
    get_postview(params).then(res => {

        })
        .catch(function (err) {
            //console.log(err)
        })
}