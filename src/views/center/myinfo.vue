<!--个人资料 -->
<template>
  <div class="myinfo">
    <div class="middle">
      <div class="line">
        <span>头像</span>
        <span>
          <img :src=" details.avatar" alt />
        </span>
      </div>
      <div class="line">
        <span>昵称</span>
        <span>{{details.nickname}}</span>
      </div>
      <div class="line">
        <span>电话</span>
        <span>{{(details.mobile?details.mobile:"未绑定")}}</span>
      </div>
      <div class="line">
        <span>统战区域</span>
        <span>{{(details.area_name?details.area_name:"暂无")}}</span>
      </div>
      <div class="line">
        <span>统战人士</span>
        <span v-if="details.is_object == 0 && details.is_bind_mobile == 0">未绑定</span>
         <span v-else-if="details.is_object == 0 && details.is_bind_mobile == 1">审核中</span>
          <span v-else-if="details.is_object == 1 && details.is_bind_mobile == 1">是</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from "@/api/api";
export default {
  components: {},
  data() {
    return {
        details:[],
        IMG_PATH: process.env.VUE_APP_IMG_PATH,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {
      // 获取个人信息
    getUserInfodata() {
      getUserInfo().then(res => {
        console.log(res.data, "-----获取个人信息------");
        this.details = res.data;
        
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
      this.getUserInfodata()
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
.myinfo {
  width: 100%;
  .middle {
    width: 100%;
    margin: 20px 0;
  }
  .line {
    width: 100%;
    min-height: 100px;
    background: white;
    margin: 2px 0;
    padding: 0 40px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > span:first-child {
      font-size: 28px;
      color: #333333;
    }
    > span:nth-child(2) {
        min-width: 132px;
        text-align: center;
      > img {
        width: 132px;
        height: 132px;
        border-radius: 50%;
      }
    }
  }
}
</style>
<style>
</style>