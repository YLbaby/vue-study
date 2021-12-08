export const mixin1 =  {
  methods: {
    showName(){
      alert(this.name)
    }
  },
  mounted(){
    console.log('你好啊！');
  }
}

export const mixin2 = {
  data() {
    return {
      name: '混合名字',
      x: 100,
      y: 200
    }
  }
}