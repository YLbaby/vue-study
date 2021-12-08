<template>
  <div class="todo-footer" v-show="todos.length">
    <label>
      <input type="checkbox" :checked="isAll" @click="checkAll"/>
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" @click="clearDone">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    name: 'MyFooter',
    props: ['todos', 'deleteDone', 'checkAllTodo'],
    computed: {
      doneTotal(){
        return this.todos.filter(todo => todo.done == true).length
      },
      isAll() {
        return this.doneTotal == this.todos.length
      }
    },
    methods:{
      clearDone(){
        this.deleteDone()
      },
      checkAll(e){
        this.checkAllTodo(e.target.checked)
      }
    }
  }
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>