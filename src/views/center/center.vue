<!-- 个人中心 -->
<template>
  <div class="center">
    <!-- 头部 -->
    <div class="top_border">
      <div class="touxiang_border">
        <img :src=" details.avatar" alt />
      </div>
      <div class="peopleName">{{details.nickname}}</div>
    </div>
    <!-- 积分时长 -->
    <div class="learn_border">
      <div>
        <div>{{details.score}}</div>
        <div>我的积分</div>
      </div>
      <div>
        <div>{{duration}}h</div>
        <div>学习时长</div>
      </div>
    </div>
    <!--  -->
    <!-- <div class="line" v-for="(item,index) in navlist" :key="index">
      <router-link :to="item.link">
        <img class="ziliao" :src="item.src" alt />
        <div class>{{item.title}}</div>
        <img class="icon_left" src="../../assets/images/icon-left.png" alt />
      </router-link>
    </div>-->
    <div class="line" @click="gobind()" v-show="showbind">
      <img class="ziliao" src="../../assets/images/people.png" alt />
      <div class>{{text}}</div>
      <img class="icon_left" src="../../assets/images/icon-left.png" alt />
    </div>
    <div class="line" @click="gomyinfo">
      <img class="ziliao" src="../../assets/images/ziliao.png" alt />
      <div class>个人资料</div>
      <img class="icon_left" src="../../assets/images/icon-left.png" alt />
    </div>
  </div>
</template>

<script>
import { getUserInfo } from "@/api/api";
// is_bind_mobile==1 && is_object==0  审核中
// is_object==2  未通过
export default {
  components: {},
  data() {
    return {
      showbind:true,
      text: "",
      navlist: [],
      details: [],
      IMG_PATH: process.env.VUE_APP_IMG_PATH,
      allList: [
        {
          title: "成为统战人士",
          src: require("../../assets/images/people.png"),
          link: "/bindInfo"
        },
        {
          title: "个人资料",
          src: require("../../assets/images/ziliao.png"),
          link: "/myinfo"
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {
    duration:function(){
      let time= (this.details.duration/3600)
      return Math.round(time*100)/100
    }
  },
  //监控data中的数据变化
  watch: {},
  methods: {
    // 获取个人信息
    getUserInfodata() {
      getUserInfo().then(res => {
        console.log(res.data, "-----获取个人信息------");
        this.details = res.data;
        if (this.details.is_object == 0 && this.details.is_bind_mobile == 1) {
          this.text = "成为统战人士 （审核中）";
        } else if (this.details.is_object == 0 && this.details.is_bind_mobile == 0) {
          this.text = "成为统战人士";
        } else if (this.details.is_object == 1 && this.details.is_bind_mobile == 1) {
          this.showbind=false;
        }
        if (this.details.is_object == 0) {
          this.navlist = this.allList;
        } else {
          this.navlist = this.allList.slice(1);
        }
      });
    },
    gobind() {
      if (this.details.is_object == 0 && this.details.is_bind_mobile == 1) {
           this.$toast.fail({ message: "审核中" });
        } else if (this.details.is_object == 0 && this.details.is_bind_mobile == 0) {
          this.$router.push({ name: "bindInfo" });
        }
      
    },
    gomyinfo() {
      this.$router.push({ name: "myinfo" });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getUserInfodata();
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
  margin: 10px auto;
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