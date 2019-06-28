<template>
  <div>
    <!-- 内容占位组件 -->
    <Header />
    
    <nuxt />
    <Footer />
  </div>
</template>

<script>
// 引入头部组件
import Header from '@/components/header'
// 引入脚部组件
import Footer from '@/components/footer'

export default {
  // 注册组件
  components:{
    Header,
    Footer
  }
}
// 
</script>

<style >
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  color: black
}
em,i{
  font-style: normal;
}
</style>