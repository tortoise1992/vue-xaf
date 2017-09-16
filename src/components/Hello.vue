<template>
    <!-- <el-table
      :data="tableData"
      style="width: 100%">
      
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>     
      <el-table-column
        prop="age"
        label="年龄"
        width="180">
      </el-table-column>    
    </el-table> -->
    <div>
      111
    </div>
  </template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData:[]
    }
  },
  created () {
    this.$http.get(this.$mock+'/test').then((data)=>{
      if(data){
        this.tableData=data.data.test
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
