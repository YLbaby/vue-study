// 该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
// 准备actions --> 用于响应组件中的动作
const actions = {
    jia(context, value) {
        console.log('actions中的jia被调用', context, value)
        context.commit('JIA', value)
    },
    jian(context, value){
        console.log('actions中的jian被调用', context, value)
        context.commit('JIAN', value)
    },
    jiaOdd(context, value) {
        console.log('actions中的jiaOdd被调用', context, value)
        if(context.state.sum % 2){
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        console.log('action中的jiaWait被调用', context, value)
        setTimeout(()=>{
            context.commit('JIA', value)
        }, 500)
    }
}

// 准备mutations  --> 用于操作数据(state)
const mutations = {
    JIA(state, value) {
        console.log('mutation中的JIA被调用了', state, value)
        state.sum += value
    },
    JIAN(state, value) {
        console.log('mutation中的JIAN被调用了', state, value)
        state.sum -= value
    }
}

// 准备state --> 用于存储数据
const state = {
    sum: 0
}


// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})