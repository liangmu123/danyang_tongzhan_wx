import axios from "./axios"


//获取资讯列表
export function articleList(params) {
  return axios({
    url: "article/articleList",
    method: "get",
    params
  });
}

//获取测试数据
export function activityList(params) {
    return axios({
      url: "activity/activityList",
      method: "get",
      params
    });
  }
  //获取活动列表，有地图导航的
export function AactivityList(params) {
  return axios({
    url: "activity_nav/activityList",
    method: "get",
    params
  });
}
