<template>
  <div>
      {{$route.params.name}}
      {{$route.params.id}}
      {{msg}}
  </div>
</template>
<script>
    export default {
        data(){
            return{
                msg:'hello'
            }
        }
    }
</script>