<!-- 首页 -->
<template>
  <div class="Home">
    <!-- banner -->
    <div class="banner_border">
      <van-swipe :autoplay="5000">
        <van-swipe-item v-for="(image, index) in banner" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- nav-border -->
    <div class="nav_border">
      <van-grid :column-num="5" :border="false" clickable>
        <van-grid-item v-for="(item, index) in navList" :key="index" @click="gozixun(item)">
          <van-image :src="item.img" class="navimage" />
          <div class="nav_title">{{item.title}}</div>
        </van-grid-item>
      </van-grid>
    </div>
    <!--  -->
    <!-- <InformationList></InformationList> -->
    <div class="news_border">
      <load-list :page="page" :totalpage="totalpage" @loadlist="getnewsListdata">
        <infoList v-for="(item,index) in list" :key="index" :details="item"></infoList>
        <!-- <div v-for="(item,index) in list" :key="index">
          <p>111</p>
        </div> -->
      </load-list>
    </div>
  </div>
</template>

<script>
import { articleList } from "@/api/api";
import LoadList from "@/components/LoadList";
import InformationList from "@/components/InformationList";
import infoList from "@/components/infoList";
export default {
  components: { InformationList, LoadList,infoList },
  data() {
    return {
      page: 1,
      pagesize: 10,
      totalpage: 1,
      list: [],
      banner: [require("../assets/images/home/banner1.png")],
      navList: [
        {
          id: "1",
          url: "center",
          title: "时政要闻",
          img: require("../assets/images/home/nav1.png")
        },
        {
          id: "2",
          url: "wenjuanList",
          title: "政策法规",
          img: require("../assets/images/home/nav2.png")
        },
        {
          id: "3",
          url: "",
          title: "多党合作",
          img: require("../assets/images/home/nav3.png")
        },
        {
          id: "4",
          url: "",
          title: "党外知识分子",
          img: require("../assets/images/home/nav4.png")
        },
        {
          id: "5",
          url: "",
          title: "机关党建",
          img: require("../assets/images/home/nav5.png")
        },
        {
          id: "6",
          url: "",
          title: "民族宗教",
          img: require("../assets/images/home/nav6.png")
        },
        {
          id: "7",
          url: "",
          title: "民营经济",
          img: require("../assets/images/home/nav7.png")
        },
        {
          id: "8",
          url: "",
          title: "新的社会阶层",
          img: require("../assets/images/home/nav8.png")
        },
        {
          id: "9",
          url: "",
          title: "港澳台侨",
          img: require("../assets/images/home/nav9.png")
        },
        {
          id: "10",
          url: "",
          title: "关于我们",
          img: require("../assets/images/home/nav10.png")
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {
    // 跳转到资讯详情
    gozixun(item) {
      console.log(item, "----------");
      this.$router.push({ name: item.url, query: { id: item.id } });
    },
    // 获取资讯
    getnewsListdata() {
      let params = {
        cid: 123,
        // type: this.id,
        page: this.page,
        pagesize: this.pagesize
      };
      articleList(params).then(res => {
        console.log(res.data, "-----获取资讯------");
        this.list = [...this.list, ...res.data.items];
        this.totalpage = res.data.totalpage;
        this.page++;
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getnewsListdata();
  },
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
.Home {
  // width: 100%;
  height: 100%;
  padding: 20px 30px;
  // background: pink;
  .banner_border {
    width: 100%;
    height: 280px;
    .van-swipe {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: #fff;
    }
  }
  .nav_border {
    width: 100%;
    height: 340px;
    background: #ffffff;
    margin: 24px 0;
    overflow: hidden;
    .navimage {
      width: 85px;
      height: 85px;
      margin: 14px 0;
      // margin-bottom: 20px;
    }
    .nav_title {
      color: #3a3a3a;
      font-size: 22px;
      margin: 10px 0;
    }
  }
  .news_border {
    margin-bottom: 100px;
  }
}
</style>
<!-- 修改组件样式 -->
<style>
.Home .van-grid-item__content {
  padding: 0;
  height: auto;
}
</style>