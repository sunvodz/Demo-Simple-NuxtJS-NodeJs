<template>
  <div>
  <h1>Test 1 : {{name}}</h1>
  <input type ="text" :value="name">
  </div>
</template>
<script>
export default {
  //data: function(){
  data(){
    setInterval(() => {
      this.name += '+'
    },2000)

    return {
      id:1,
      name:'SunvoDz',
      age:23,
    }
  },
}
</script>
