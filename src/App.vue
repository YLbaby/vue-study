<template>
  <div>
    <h1>{{msg}}</h1>
    <Student />
    <School />
  </div>
</template>

<script>
  import School from './components/School'
  import Student from './components/Student'
  export default {
    name: 'App',
    components: {School, Student},
    data() {
      return {
        msg: '你好啊'
      }
    }
  }
</script>