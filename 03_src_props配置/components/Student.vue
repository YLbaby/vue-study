<template>
  <div class="school">
    <h2>{{msg}}</h2>
    <h2>学生姓名:{{name}}</h2>
    <h2>学校性别:{{gender}}</h2>
    <h2>学生年龄:{{age+1}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        msg: '我是一个尚硅谷的学生',
      }
    },

    // 接收的同时对数据进行类型限制
    // props: {
    //   name: String,
    //   age: Number,
    //   gender: String
    // }

    props: {
      name: {
        type: String,  // name的类型是字符串
        required: true  // name是必要的
      },
      age: {
        type: Number,
        default: 99  // 默认值
      },
      gender:{
        type: String,
        required: true
      }
    }
  }
</script>

<style>
  .school{
    background-color: grey;
  }
</style>