<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition-group name="hello" appear>
      <h1 v-show="isShow" v-for="(item) in list" :key="item.id">你好啊！</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test2",
  data() {
    return {
      isShow: true,
      list: [
        {id: 1, name:'lyl'},
        {id: 2, name:'lxd'},
        {id: 3, name:'zxl'}
      ]
    }
  }
}
</script>

<style scoped>
  h1{
    background-color: orange;
  }

  /*.hello-enter-active {*/
  /*  animation: atguigu 0.5s linear;*/
  /*}*/

  /*.hello-leave-active{*/
  /*  animation: atguigu 0.5s linear reverse;*/
  /*}*/

  /*@keyframes atguigu {*/
  /*  from{*/
  /*    transform: translateX(-100%)*/
  /*  }*/
  /*  to{*/
  /*    transform: translateX(0px);*/
  /*  }*/
  /*}*/

  /* 进入的起点 */
  .hello-enter, .hello-leave-to{
    transform: translateX(-100%);
  }
  /* 进入的终点 */
  .hello-enter-to, .hello-leave{
    transform: translateX(0);
  }
  .hello-enter-active, .hello-leave-active{
    transition: 0.5s linear;
  }
</style>