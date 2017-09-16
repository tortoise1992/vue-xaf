<template>
  <div>
    <div class="side-nav">
      <p>测试一下</p>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.side-nav{
  width: 200px;
}
</style>
