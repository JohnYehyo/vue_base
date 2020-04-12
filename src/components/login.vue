<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avator_box">
        <img src="../assets/logo.png">
      </div>
      <el-form :model="loginForm"  :rules="rules" class="login_item">
        <el-form-item>
          <el-input v-model="loginForm.username"  prefix-icon="el-icon-user-solid" prop="username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.password"  prefix-icon="el-icon-lock" type="password" prop="password"></el-input>
        </el-form-item>
        <el-form-item class="login_btn">
          <el-button type="primary">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          loginForm :{
            username: 'johnyehyo',
            password: '123456'
          },
          rules:{
            username:[
              { required: true, message: '请输入用户名', trigger: 'blur' },
              { min: 0, max: 16, message: '长度在 0 到 16 个字符', trigger: 'blur' }
            ],
            password:[
              { required: true, message: '请输入用户名', trigger: 'blur' },
              { min: 6, max: 16, message: '长度在 0 到 16 个字符', trigger: 'blur' }
            ]
          }
        }
      }
    };
</script>


<style lang="less" scoped>

  .login_container{
    background:url(../assets/wallpaper.jpg) no-repeat center fixed;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-size:cover;
    height: 100%;
  }

  .login_box{
    width: 430px;
    height: 300px;
    background-color: #ffffff;
    border-radius: 10px;
    position: absolute;
    left: 70%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avator_box{
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
      img{
        height: 100%;
        widows: 100%;
        border-radius: 50% ;
        background-color: #eeeeee;
      }

    }
  }

  .login_item{
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .login_btn{
    display: flex;
    justify-content: flex-end;
  }
  
</style>