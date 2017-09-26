import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        token:null
    },
    mutations:{
        login(state,data){
            window.localStorage.setItem('token',data)
            state.token=data
        },
        logout(state){
            window.localStorage.removeItem('token')
            state.token=null
        }
    }
})


export default store