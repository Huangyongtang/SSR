<template>
    <div class="container">
        <el-row class="main"
        type="flex"
        justify="center"
        align="middle"
        >
            <div class="banner_tab">
                <el-row type="flex" justify="center" class="tabs">
                    <span v-for="(item,index) in ['登陆','注册']"
                    :key="index"
                    :class="{active:currentTab===index}"
                    @click="handleChangeTab(index)">
                    {{item}} </span>
                </el-row> 
                    <!-- 登录功能组件 -->
                <LoginForm v-if="currentTab == 0"/>

                <!-- 注册功能组件 -->
                <!-- <RegisterForm v-if="currentTab == 1"/> -->
            </div>
        </el-row>
             


 

    </div>
</template>

<script>
    import LoginForm from '@/components/user/loginForm.vue'
export default {
   components:{
       LoginForm
   },
    data(){
        return{
            currentTab:0
        }
    },
    methods:{
        handleChangeTab(index){
            this.currentTab=index
            // console.log(this.currentTab);
        }
    }
}
</script>

<style scoped lang='less'>
    .container{
        background: url(http://157.122.54.189:9095/assets/images/th03.jfif) center 0 ;
        height: 700px;
        min-width: 1000px;
        .main{
            width: 1000px;
            height: 100%;
            margin: 0 auto;
           position: relative;
        }
        .banner_tab{
            width: 400px;
            // height: 200px;
            margin: 0 auto;
            background-color: #ddd;
            box-shadow: 2px 2px 0 rgba(0,0,0,0.1);
            overflow: hidden;
        }
          .tabs{
                span{
                    display: block;
                    width:50%;
                    height: 50px;
                    box-sizing: border-box;
                    border-top:2px #eee solid;
                    background:#eee;
                    line-height: 48px;
                    text-align: center;
                    cursor: pointer;
                    color:#666;

                    &.active{
                        color:orange;
                        border-top-color: orange;
                        background:#fff;
                        font-weight: bold;
                    }
                }
    }
    }
    
</style>
