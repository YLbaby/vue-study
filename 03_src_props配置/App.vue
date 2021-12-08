<template>
  <div>
    <Student name="李四" gender="女" :age="18"/>
    <hr>
    <Student name="李奕龙" gender="男" :age="19" />
    <hr>
    <Student name="李晓东" gender="男" :age="1" />
  </div>
</template>

<script>
  // 引入Student组件
  import Student from './components/Student.vue'
  export default {
    name: 'App',
    components: {Student}
  }
</script>