<!-- 资讯列表 -->
<template>
  <div class="InformationList">
    <div class="news_border">
      <load-list :page="page" :totalpage="totalpage" @loadlist="getnewsListdata">
        <infoList v-for="(item,index) in list" :key="index" :details="item"></infoList>
        <!-- <div v-for="(item,index) in list" :key="index">
          <p>111</p>
        </div>-->
      </load-list>
    </div>
    <div v-show="content" class="nonecontent">
      <div class="no-icon">
        <img src="../assets/images/none.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { articleList } from "@/api/api";
import LoadList from "@/components/LoadList";
import infoList from "@/components/infoList";
export default {
  components: { LoadList, infoList },
  data() {
    return {
      id: this.$route.query.id,
      page: 1,
      pagesize: 10,
      totalpage: 1,
      list: [],
      content: false
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  watch: {},
  methods: {
    // 获取资讯
    getnewsListdata() {
      let params = {
        cid: this.id,
        // type: this.id,
        page: this.page,
        pagesize: this.pagesize
      };
      articleList(params).then(res => {
        console.log(res.data, "-----获取资讯------");

        if (res.data.items == "") {
          console.log("asdada");
          this.content = true;
        } else {
          this.content = false;
          this.list = [...this.list, ...res.data.items];
          this.totalpage = res.data.totalpage;
          this.page++;
        }
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    document.title = this.$route.query.title;
    this.getnewsListdata();
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {} //生命周期 - 销毁完成
};
</script>
<style lang='less' scoped>
.news_border {
  margin-bottom: 100px;
}
.nonecontent{
  width: 100%;
  min-height: 100%;
  position: fixed;
  .no-icon {
    width: 278px;
    height: 343px;
        margin: 60px auto;
    // width: 80%;
    // height: 400px;
    // margin: 0 auto;
    > img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
<style>
</style>