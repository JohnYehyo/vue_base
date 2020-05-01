<template>
  <el-container>
    <el-header>
      <div>
        <!-- <img src="" alt=""> -->
        <span>原型管理系统</span>
      </div>
      <el-button type="primary" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#008080"
          text-color="#fff"
          active-text-color="#003333"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>子导航一</span>
              </template>
              <el-menu-item index="1-1-1">
                <i class="el-icon-location"></i>
                <template slot="title">菜单一</template>
              </el-menu-item>
            </el-submenu>
          </el-submenu>
          <!-- <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>-->
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>


<script>
export default {
  created(){
    this.menus()
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    handleOpen(){

    },
    handleClose(){

    },
    async menus(){
   
     const result =  await this.$http.get("sys/menu");
     console.log(result)
    }
  }
};
</script>


<style lang="less" scoped>
.el-container {
  height: 100%;
}

.el-header {
  background-color: #2f4f4f;
  display: flex;
  justify-content: space-between;
  padding-left: 35px;
  align-items: center;
  color: #ffffff;
  font-size: 25px;
}

.el-aside {
  background-color: #008080;
}
.el-main {
  background-color: #f5fffa;
}
</style>