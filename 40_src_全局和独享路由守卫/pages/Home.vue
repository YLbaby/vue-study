<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
              replace
              class="list-group-item"
              active-class="active"
              to="/home/news">
            Newsaaa
          </router-link>
        </li>
        <li>
          <router-link
              replace
              class="list-group-item"
              active-class="active"
              to="/home/message"
          >
            Message
          </router-link>
        </li>
      </ul>
      <!--include指的是组件名!-->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeDestroy() {
    console.log('Home组件即将被销毁了')
  },
  mounted() {
    console.log('Home组件挂载完毕了')
  }
}
</script>

<style scoped>

</style>