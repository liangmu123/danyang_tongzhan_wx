<!-- 绑定页 -->
<template>
  <div class="bindInfo">
    <div class="main">
      <van-form validate-first @submit="onSubmit">
        <!-- 通过 validator 进行函数校验 -->
        <van-field
          v-model="ruleForm.name"
          required
          label="用户名"
          name="name"
          placeholder="请输入您的名称"
          :rules="[{ validator:name, message: '请输入2-4位的中文汉字' }]"
        />
        <van-field
          v-model="ruleForm.cardid"
          required
          label="身份证号"
          name="cardid"
          placeholder="请在此输入您的身份证号"
          :rules="[{ validator:cardid, message: '请输入正确格式的身份证号' }]"
        />
        <van-field
          v-model="ruleForm.phone"
          required
          center
          name="phone"
          clearable
          label="手机"
          placeholder="请输入手机号"
          :rules="[{ validator:phone, message: '请输入正确格式的手机号码' }]"
        >
          <template #button>
            <van-button size="small" type="primary" @click="send($event)">发送验证码</van-button>
          </template>
        </van-field>
        <van-field
          v-model="ruleForm.captcha"
          required
          label="验证码"
          name="captcha"
          placeholder="请输入验证码"
          :rules="[{ required: true, message: '请输入验证码' }]"
        />
        <van-field v-model="ruleForm.office" label="工作单位" name="office" placeholder="请在此输入您的工作单位" />
        <van-field
          readonly
          clickable
          name="team"
          :value="teamTitle"
          label="统战团体"
          placeholder="选择统战团体"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
        <van-field
          readonly
          clickable
          name="area"
          :value="ruleForm.area.text"
          label="统战区域"
          placeholder="选择区域"
          @click="showPicker2 = true"
        />
        <van-popup v-model="showPicker2" position="bottom">
          <van-picker
            show-toolbar
            :columns="arealist"
            @confirm="onConfirm2"
            @cancel="showPicker2 = false"
          />
        </van-popup>

        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { get_send, objCategoryList, objAreaList, get_check,becomeTzObject } from "@/api/api";

export default {
  components: {},
  data() {
    return {
      ruleForm: {
        name: "",
        phone: "",
        code: "",
        office: "",
        cardid: "",
        captcha: "",
        team: "",
        area: ""
      },
      time: 0,
      columns: [],
      arealist: [],
      showPicker: false,
      showPicker2: false
    };
  },
  //监听属性 类似于data概念
  computed: {
    teamTitle() {
      let id = this.ruleForm.team.id;
      let obj = this.columns.find(item => {
        return item.id == id;
      });
      return obj?.text || "";
    }
  },
  //监控data中的数据变化
  watch: {},
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    name(val) {
      return /^[\u4e00-\u9fa5]{2,4}$/.test(val);
    },
    cardid(val) {
      return /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(val);
    },
    phone(val) {
      return /^1[2|3|4|5|6|7|8|9][0-9]{9}$/.test(val);
    },
    //
    onConfirm(value) {
      console.log(value, "--");
      this.ruleForm.team = value;
      this.showPicker = false;
    },
    onConfirm2(value) {
      console.log(value, "--");
      this.ruleForm.area = value;
      this.showPicker2 = false;
    },
    // 获取统战团体
    get_objCategoryList() {
      let params = {
        page: 1,
        pagesize: 100
      };
      objCategoryList(params).then(res => {
        // console.log(res.data, "-----获取统战团体------");
        this.columns = res.data.items;
      });
    },
    // 获取统战区域
    get_objAreaList() {
      let params = {
        page: 1,
        pagesize: 100
      };
      objAreaList(params).then(res => {
        // console.log(res.data, "-----获取统战区域------");
        this.arealist = res.data.items;
      });
    },
    // 发送验证码
    send(e) {
      e.preventDefault();
      if (e.target.dataset.prevent) {
        return;
      }
      if (!this.ruleForm.phone) {
        this.$toast.fail({ message: "请输入手机号" });
        return;
      }
      let myreg = /^1[2|3|4|5|6|7|8|9][0-9]{9}$/;
      if (!myreg.test(this.ruleForm.phone)) {
        this.$toast.fail({ message: "请输入正确格式的手机号码" });
        return;
      } else {
        let params = {
          mobile: this.ruleForm.phone
        };
        get_send(params).then(res => {
          console.log(res, "-----获取验证码------");
          if ([0, 200].includes(res.code)) {
            this.$toast.success(res.message);
          }
        });
      }
      //   console.log(phone, "----");
    },
    //检测验证码
    get_checkdata() {
      let params = {
        mobile: this.ruleForm.phone,
        captcha: this.ruleForm.captcha
      };
      get_check(params).then(res => {
        console.log(res, "-----检测验证码------");
        if(res.message=="成功"){
           this.get_bindMoblie();
        }else{
            console.log('no-----------')
            this.$toast.fail({ message: res.message });
        }
      });
    },
    // 绑定接口
    get_bindMoblie(){
         let params = {
        mobile: this.ruleForm.phone,
        name: this.ruleForm.name,
        work: this.ruleForm.office,
        card: this.ruleForm.cardid,
        obj_cate: this.ruleForm.team.id,
        area_id: this.ruleForm.area.id,
        token: window.localStorage.getItem("access_token")
      };
      console.log(params, "传到的参数");
       
      becomeTzObject(params).then(res=>{
          console.log(res, "-----绑定成功与否------");
           this.$toast({ message: "您已成功绑定个人信息" });
           setTimeout(function(){
               this.$router.go(-1)
           },2000)
      })
    },
    // 提交表单按钮
    onSubmit() {
      //   console.log("submit", this.ruleForm);
      this.get_checkdata();
     
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.get_objCategoryList();
    this.get_objAreaList();
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
</style>
<style>
</style>