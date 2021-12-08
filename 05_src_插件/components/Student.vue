<template>
  <div class="school">
    <h2>学生姓名:{{name}}</h2>
    <h2>学校性别:{{gender}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        name: '张三',
        gender: '男'
      }
    },
  }
</script>