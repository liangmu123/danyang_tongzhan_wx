<!--  -->
<template>
  <div class="yhy_video">
    <!-- <router-link  :to="route + '?id=' + details.id"> -->
    <router-link :to="{path:'/videoDetails',query:{id:details.id}}">
      <p>{{details.title}}</p>
      <div class="top">
        <img class v-lazy="IMG_PATH + details.img"  alt="缩略图" />
      </div>
      <img class="position" src="../../assets/images/play.png" alt="播放按钮" />
      <div>
        <span>{{details.add_time}}</span>

        <span>{{details.click_count}}</span>
        <span>
          <img src="../../assets/images/eye.png" alt />
        </span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    details: {
      type: Object
    }
  },
  name: "videoComponent",
  components: {},
  data() {
    return {
      route: "",
      img:'',
      IMG_PATH: process.env.VUE_APP_IMG_PATH
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    if (this.$route.matched[0].path) {
      this.route = this.$route.matched[0].path + "/videoDetails";
    } else {
      this.route = "/videoDetails";
    }
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
.yhy_video {
  padding: 10px 33px;
  position: relative;
  margin: 24px 0;
  background: white;
  p:first-child {
    font-size: 30px;
    line-height: 40px;
    color: #333333;
    // margin-bottom: 20px;
    //   padding: 0 20px;
  }
  .top {
    width: 100%;
    height: 351px;
    margin-bottom: 20px;
    > img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 5px;
    }
  }
  span:first-child {
    font-size: 24px;
    line-height: 33px;
    color: #8b8b8b;
  }
  span:nth-child(2) {
    float: right;
    font-size: 24px;
    line-height: 33px;
    color: #8b8b8b;
    margin: 0 10px;
  }
  span:nth-child(3) {
    float: right;
    font-size: 24px;
    line-height: 33px;
    > img {
      width: 25px;
      height: 17px;
    }
  }
}
// .ysp_video > a > p {
//   font-size: 32px;
//   color: #333333;
// }
.position {
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 82px;
}
</style>
<style>
</style>