<template>
  <div class="login">
      <h2>我是登录页面</h2>
    <div>
        <input type="text" v-model="username" placeholder="请输入用户名">
        <input type="password" v-model="password" placeholder="请输入密码">

        <button @click="login">登录</button>
    </div>

  </div>
</template>


<script>
    export default {
        data(){
            return{
                username:'',
                password:''
            }
        },
        methods:{
            login(){
                var token=this.username+'--->'+this.password
                this.$store.commit('login',token)
                console.log('>>>>>>'+this.$store.state.token)
            }
        }
    }
</script>