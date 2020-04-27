<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avator_box">
        <img src="../assets/logo.png" />
      </div>
      <el-form ref="loginFormRef" :model="loginForm" :rules="rules" class="login_item">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password"></el-input>
        </el-form-item>
        <el-form-item class="login_btn">
          <el-button type="primary" @click="submitForm('loginFormRef')">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 1, max: 12, message: "长度在 0 到 16 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 0 到 16 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          //1 基本用法
          // this.$http.post('login', this.loginForm).then(data =>{
          //   console.log(data.data)
          //   }
          // )
          //2 async await用法
          const params = new URLSearchParams();
          params.append('username', this.loginForm.username);
          params.append('password', this.loginForm.password);
          const result = await this.$http.post("login", params);
          if (result.data.code == 200) {
            // 保存token
            window.sessionStorage.setItem("token", result.data.data.token);
            //跳转主页
            this.$router.push("/home");
          } else {
            // this.$message({message: '用户名或密码错误', type: 'error'})
            this.$message.error("用户名或密码错误");
          }
        }
      });
    },
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    }
  }
};
</script>


<style lang="less" scoped>
.login_container {
  background: url(../assets/wallpaper.jpg) no-repeat center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
}

.login_box {
  width: 430px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 10px;
  position: absolute;
  left: 70%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avator_box {
    height: 130px;
    widows: 130px;
    border: 1px solid #eeeeee;
    border-radius: 100%;
    padding: 5px;
    box-shadow: 0 0 10px #dddddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    img {
      height: 100%;
      widows: 100%;
      border-radius: 50%;
      background-color: #eeeeee;
    }
  }
}

.login_item {
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}

.login_btn {
  display: flex;
  justify-content: flex-end;
}
</style>