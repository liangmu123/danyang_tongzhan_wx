<!--  -->
<template>
  <div class="yhy_word">
    <router-link :to="route + '?id=' + details.id">
    <!-- <router-link :to="{path:'/articleDetails',query:{id:details.id}}"> -->
      <div class="border">
        <div class="left">
         <img class v-lazy="IMG_PATH + details.img"  alt="缩略图" />
        </div>
        <div class="right">
          <div>{{details.title}}</div>
        </div>
      </div>

      <div class="bottom">
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
  name: "wordComponent",
  props: {
    details: {
      type: Object
    }
  },
  components: {},
  data() {
    return {
      route: "",
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
      this.route = this.$route.matched[0].path + "/articleDetails";
    } else {
      this.route = "/articleDetails";
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
.yhy_word {
  background: white;
  margin: 24px 0;
  padding: 28px 20px;

  .border {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .left {
    width: 35%;
    height: 133px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
  .right {
    width: 65%;
    height: 133px;
    > div {
      padding: 0 20px;
      color: #333333;
      font-size: 30px;
      line-height: 45px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }
  .bottom {
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
}
</style>
<style>
</style>