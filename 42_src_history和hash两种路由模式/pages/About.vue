<template>
  <h2>我是About内容</h2>
</template>

<script>
export default {
  name: "About",
  beforeDestroy() {
    console.log('About组件即将被销毁了')
  },
  mounted() {
    console.log('About组件挂载了')
  },
  // 通过路由规则，进入该组件被调用
  beforeRouteEnter(to, from, next) {
    console.log('About---beforeRouteEnter', to, from)
    if(to.meta.isAuth) {
        if(localStorage.getItem('school') === 'atguigu') {
            next()
        } else {
            alert('学校名不对，无权限查看！')
        }
    } else {
        next()
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log('About---beforeRouteleave')
    next()
  }
}
</script>

<style scoped>

</style>