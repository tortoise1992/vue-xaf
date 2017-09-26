<template>
  <div>
      <button @click="logout">退出登录</button>
  </div>
</template>


<script>
    export default {
        methods:{
            logout(){
                this.$store.commit('logout',null)
                alert('已退出登录')
            }
        }
    }
</script>