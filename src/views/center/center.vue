<!-- 个人中心 -->
<template>
  <div class="center">
    <!-- 头部 -->
    <div class="top_border">
      <div class="touxiang_border">
        <img src="../../assets/logo.png" alt />
      </div>
      <div class="peopleName">王江国</div>
    </div>
    <!-- 积分时长 -->
    <div class="learn_border">
      <div>
        <div>30000</div>
        <div>我的积分</div>
      </div>
      <div>
        <div>200.5h</div>
        <div>学习时长</div>
      </div>
    </div>
    <!--  -->
    <div class="line" v-for="(item,index) in allList" :key="index">
      <router-link :to="item.link">
        <img class="ziliao" :src="item.src" alt />
        <div class>{{item.title}}</div>
        <img class="icon_left" src="../../assets/images/icon-left.png" alt />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      allList: [
        {
          title: "个人资料",
          src: require("../../assets/images/ziliao.png"),
          link: "/bindInfo"
        },
        {
          title: "成为统战人士",
          src: require("../../assets/images/people.png"),
          link: "/bindInfo"
        },
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
.top_border {
  width: 100%;
  height: 262px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: url("~@/assets/images/bg_center.png") center center no-repeat;
  background-size: 100%;
  .touxiang_border {
    width: 132px;
    height: 132px;
    background: white;
    border-radius: 50%;
    margin: 0 40px;
  }
  .peopleName {
    font-size: 36px;
    color: white;
    font-family: Source Han Sans CN;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 50%;
  }
}
.learn_border {
  width: 92%;
  height: 182px;
  // padding:0 30px;
  margin: 37px auto;

  display: flex;
  justify-content: space-between;
  > div:nth-child(1) {
    width: 335px;
    height: 100%;
    background: url("~@/assets/images/bgcenterleft.png") center center no-repeat;
    background-size: 100%;
    display: flex;
    flex-direction: column;
    > div {
      width: 65%;
    }
    > div:nth-child(1) {
      color: #fff237;
      font-size: 48px;
      text-align: center;
      overflow: hidden;
      margin-top: 42px;
    }
    > div:nth-child(2) {
      color: #ffffff;
      font-size: 24px;
      text-align: center;
    }
  }
  > div:nth-child(2) {
    width: 335px;
    height: 100%;
    background: url("~@/assets/images/bgcenterright.png") center center
      no-repeat;
    background-size: 100%;
    > div {
      width: 65%;
    }
    > div:nth-child(1) {
      color: #615cff;
      font-size: 48px;
      text-align: center;
      overflow: hidden;
      margin-top: 42px;
    }
    > div:nth-child(2) {
      color: #ffffff;
      font-size: 24px;
      text-align: center;
    }
  }
}
//
.line {
  width: 92%;
  margin: 0 auto;
  height: 100px;
  background: white;
  line-height: 100px;
  //    align-items: center;
  .ziliao {
    width: 34px;
    height: 39px;
    float: left;
    margin-left: 43px;
    margin-top: 30px;
  }
  .ziliao + div {
    font-size: 28px;
    float: left;
    margin-left: 30px;
    color: #3d444d;
  }

  .icon_left {
    width: 12px;
    height: 22px;
    float: right;
    margin-top: 35px;
    margin-right: 30px;
  }
}
</style>
<!-- 修改组件样式 -->
<style>
</style>