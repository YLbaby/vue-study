<template>
  <div>
    <h1 v-text="msg" ref="title"> </h1>
    <button @click="showDOM">点我输出上方的DOM元素</button>
    <School />
  </div>
</template>

<script>
  // 引入School组件
  import School from './components/School.vue'
  export default {
    name: 'App',
    data(){
      return {
        msg:'欢迎学习Vue'
      }
    },
    methods:{
      showDOM(){
        console.log(this.$refs.title);
      }
    },
    components: {School}
  }
</script>