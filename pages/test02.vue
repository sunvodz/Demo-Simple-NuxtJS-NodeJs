<template>
  <div>
  <h1>Test 2 : {{name}}</h1>
  <h1>Age : {{age}}</h1>
  <input type ="text" :value="name">
  <input type ="text" v-model="name">
  </div>
</template>
<script>
export default {
  //data: function(){
  data(){
    // setInterval(() => {
    //   this.name += '+'
    // },2000)

    return {
      id:1,
      name:'SunvoDz',
      age:23,
    }
  },
}
</script>
