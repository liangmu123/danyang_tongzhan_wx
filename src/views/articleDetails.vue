<!-- 文章详情 -->
<template>
  <div class="articleDetails">
    <div class="title_border">
      <div class="title_info">{{details.title}}</div>
    </div>
    <van-row class="laiyuan_info">
      <van-col span="12" class="time">{{details.format_add_time}}</van-col>
      <van-col span="12" class="eye_border">
        <img src="../assets/images/eye.png" alt />
        <span>{{details.click_count}}</span>
      </van-col>
    </van-row>
    <!-- 图片 -->
    <div class="img_border" @click="clicks()">
      <img :src="IMG_PATH + details.img" alt />
    </div>
    <!-- 内容 -->
    <div class="content" v-html="details.content">

    </div>
  </div>
</template>

<script>
import { articleDetail } from "@/api/api";
import { ImagePreview } from "vant";

export default {
  components: {},
  data() {
    return {
      show: false,
      id: this.$route.query.id,
      details: [],
      IMG_PATH: process.env.VUE_APP_IMG_PATH
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {
    clicks() {
      ImagePreview({
        images: [
           this.IMG_PATH +  this.details.img
        ],
        closeable: true
      });
    },
    //   获取详情
    articleDetaildata() {
      //   articleDetail
      let params = {
        id: this.id
      };
      articleDetail(params).then(res => {
        console.log(res.data, "-----获取详情------");
        this.details = res.data;
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.articleDetaildata();
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
.articleDetails {
  box-sizing: border-box;
  width: 92%;
  margin: 20px auto;
  background: white;
  min-height: 100%;
  padding: 6px 24px;
  color: #333333;
  .title_border {
    text-align: center;
    width: 100%;
    .title_info {
      font-size: 32px;
      line-height: 50px;
      text-align: left;
      display: inline-block;
    }
  }
  .laiyuan_info {
    margin: 20px 0;
    .time {
      color: #666666;
      font-size: 24px;
    }
    .eye_border {
      text-align: right;
      > img {
        width: 25px;
        height: 17px;
        margin: 0 4px;
      }
    }
  }
  .img_border {
    width: 100%;
    height: 383px;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  .content{
      font-size: 32px;
      line-height: 50px;
  }
}
</style>
<style>
</style>