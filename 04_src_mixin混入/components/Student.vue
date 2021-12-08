<template>
  <div class="school">
    <h2 @click="showName">学生姓名:{{name}}</h2>
    <h2>学校性别:{{gender}}</h2>
  </div>
</template>

<script>
  import {mixin1, mixin2} from '../mixin'
  export default {
    name: 'Student',
    data() {
      return {
        name: '张三',
        gender: '男'
      }
    },
    mixins: [mixin1, mixin2]
  }
</script>