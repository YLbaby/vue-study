<template>
  <div>
    <Test2 />
    <Test3 />
  </div>
</template>

<script>
  import Test2 from './components/Test2'
  import Test3 from './components/Test3'
  export default {
    name: 'App',
    components: {Test2, Test3},
    data() {
      return {
        msg: '你好啊'
      }
    }
  }
</script>