// 人员管理功能相关的模块
import axios from "axios";
import {nanoid} from "nanoid";

export default {
    // 设置为true后...mapState才认识
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if(value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert("添加的人必须姓王！")
            }
        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', {id:nanoid(), name: response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log("mutations中的ADD_PERSON被调用了")
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            {id: '001', name: '张三'}
        ]
    },
    getters: {
        // 拿到的是自己的state
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}