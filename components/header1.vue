<template>
  <div class="header">
    <!-- 中间的内容 -->
    <el-row type="flex" justify="space-between" class="main">
      <!-- logo -->
      <div class="logo">
        <nuxt-link to="/">
          <img src="http://157.122.54.189:9093/images/logo.jpg" alt>
        </nuxt-link>
      </div>

      <!-- 菜单 -->

    <el-row type="flex" class="navs"> 
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
    </el-row>

      <!-- 登录状态 -->
      <el-row>
        <!-- 下拉菜单 -->
        <el-dropdown v-if="true">
          <span class="el-dropdown-link">
            <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt class="hahaha">

            <span>地球发动机</span>

            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <div v-else>
          <nuxt-link to="/user/login">登录 / 注册</nuxt-link>
        </div>
      </el-row>
    </el-row>
  </div>
</template>

<script>

export default {
 
};
</script>

<style scoped lang='less'>
.header {
    height: 60px;
    line-height: 60px;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    box-shadow: 0 3px 0 #f5f5f5;
     .main{
        width: 1000px; 
        margin: 0 auto;
         .logo img{
        padding-top: 9px;
        width: 156px;
        height: 42px;
    }
    .navs{
   
    flex: 1;
    a{
    display: block;
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
    box-sizing: border-box;
    text-align: center;
         &:hover{
          border-bottom: 5px solid #409eff ;
          color:#409eff;
    }
    }
   
    /deep/ .nuxt-link-exact-active{
                background:#409eff;
                color:#fff!important;
            }
    }

    .el-dropdown-link{
      .hahaha{

        border:2px solid #fff;
        border-radius: 50%;
        &:hover{
           border:2px solid #409eff;
        }
      }

    img{
        vertical-align:middle;
        width: 36px;
        height: 36px;
}
}
   }
   
}






</style>
