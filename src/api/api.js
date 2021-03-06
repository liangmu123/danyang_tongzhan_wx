import axios from "./axios"

// 个人信息
export function getUserInfo() {
  return axios({
    url: "user/getProfile",
    method: "get",
    params:{
      access_token: window.localStorage.getItem("access_token"),
      
    }
  });
}


//获取资讯列表
export function articleList(params) {
  return axios({
    url: "v2/article/articleList",
    method: "get",
    params
  });
}
//获取子栏目  ?id=
export function childCategory(params) {
  return axios({
    url: "v2/category/childCategory",
    method: "get",
    params
  });
}


// 获取资讯详情
export function articleDetail(params) {
  return axios({
    url: "v2/article/index",
    method: "get",
    params
  });
}

//// 获取问卷类编列表  v2/question/questionCategoryList
export function questionCategoryList() {
  return axios({
    url: "v2/question/questionCategoryList",
    method: "get",
    
  });
}


// 获取问卷  question/questionList?cid=16
export function get_questionList(params) {
  return axios({
    url: "v2/question/questionList",
    method: "get",
    params:{
      params
    }
  });
}
// 问卷详情 v2/Question/index
export function questionDetail(params) {
  return axios({
    url: "v2/Question/index",
    method: "get",
    params
  });
}

// 统战团体  v2/tz_object/objCategoryList?page=1&pagesize=100
export function objCategoryList(params) {
  return axios({
    url: "v2/tz_object/objCategoryList",
    method: "get",
    params
  });
}

// 统战区域  v2/tz_object/objAreaList?page=1&pagesize=100
export function objAreaList(params) {
  return axios({
    url: "v2/tz_object/objAreaList",
    method: "get",
    params
  });
}
// 发送验证码 /api/sms/send
export function get_send(params) {
  return axios({
    url: "sms/send",
    method: "get",
    params
  });
}
// 检测验证码 /api/sms/check

export function get_check(params) {
  return axios({
    url: "sms/check",
    method: "get",
    params
  });
}
// （实名认证） v2/tz_object/becomeTzObject
export function becomeTzObject(params) {
  return axios({
    url: "v2/tz_object/becomeTzObject",
    method: "get",
    params
  });
}

//首页轮播 api/v2/ad/index?position=10001
export function get_banner() {
  return axios({
    url: "v2/ad/index?position=10001",
    method: "get",
  });
}
//统计 get_postview
export function get_postview(params) {
  return axios({
    url: "v2/commons/postView",
    method: "get",
    params
  });
}

// 提交答案接口 /api/v2/question/answer

export function get_answer(params) {
  return axios({
    url: "v2/question/answer",
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
