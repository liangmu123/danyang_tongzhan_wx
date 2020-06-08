<!-- 问卷调查 -->
<template>
  <div class="questionDetail">
    <div class="toptitle">{{toptitle}}</div>
    <!-- 题目区域 -->
    <div class="subject">
      <div v-for="(item,index) in datalist" :key="item.id" class="ti_border">
        <p class="Ttitle">{{index+1}}. {{item.question}}</p>
        <van-radio-group v-model="option[index]" >
          <p class="answer-list"
          v-for="(data,indexx) in item.options"
          :key="data.id"
          :class="{activeclass:option[index]==(item.id+'-'+ String.fromCharCode(indexx+65)) ? true : false}"> 
            <van-radio
              checked-color="#16BA42"
              :name="item.id+'-'+String.fromCharCode(indexx+65)"
            >{{String.fromCharCode(indexx+65) + ' &nbsp; &nbsp; ' + data['option' + String.fromCharCode(indexx+65)]}}</van-radio>
          </p>
        </van-radio-group>
      </div>
    </div>
    <div class="tijiao_border">
      <van-button class="tijiao" type="info" @click="tijiao()">提交</van-button>
    </div>
  </div>
</template>

<script>
import { get_questionList, get_answer } from "@/api/api";
export default {
  components: {},
  data() {
    return {
      datalist: {},
      option: [],
      answeArr: [],
      toptitle: this.$route.query.title
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {
    tijiao() {
      let i = 0;
      this.option.forEach(item => {
        i++;
        this.answeArr.push(item);
      });
      // console.log(this.answeArr, "--------");
      let length = Number(this.datalist.length);
      // console.log(length, "--", i);
      if (i < length) {
        this.$toast.fail("您还有未回答的题目哦");
        this.answeArr = [];
        return;
      }
      // console.log(this.answeArr, "------");
      this.get_answerdata();
    },
    // 提交接口
    get_answerdata() {
      let params = {
        post_result: this.answeArr.toString(),
        token: window.localStorage.getItem("access_token")
      };
      console.log(params, "-----");
      get_answer(params).then(res => {
        console.log(res, "---jieguo ---");
        if ([0, 200].includes(res.code)) {
          this.$toast.success("提交成功");
          setTimeout(function() {
            this.$router.replace({ path: "/wenjuanList" });
          }, 1500);
        }
      });
    },
    //   获取题目
    get_questionListdata() {
      let params = {
        cid: this.$route.query.id,
        pagesize: 100
      };
      get_questionList(params).then(res => {
        console.log(res.data.items, "-----获取题目------");
        this.datalist = res.data.items;
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.get_questionListdata();
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
.questionDetail {
  width: 100%;
  //   min-height: 100%;
  //   background: white;
  padding-bottom: 100px;

  .toptitle {
    width: 100%;
    // height: 100px;
    font-size: 36px;
    text-align: center;
    padding: 20px 0;
  }
  .subject {
    width: 92%;
    margin: 0 auto;
  }
  .Ttitle {
    width: 100%;
    font-size: 32px;
  }
  .answer-list {
    background: rgb(231, 251, 255);
    padding: 0 40px;
    border-radius: 20px;
  }
  .van-radio {
    height: 60px;
    line-height: 60px;
    border-radius: 20px;
  }
  .ti_border {
    background: white;
    border-radius: 20px;
    padding: 20px;
    margin: 26px 0;
  }
  .tijiao {
    width: 100%;
  }
  .tijiao_border {
    width: 25%;
    margin: 0 auto;
  }
  .activeclass{
    background: #C1FFD1;
  }
}
</style>
<style>
</style>