<template>
  <div>
  <h1>Test 3 : {{name}}</h1>
  <h2>{{upperName}}</h2>
  <input type ="text" :value="name">
  <input type ="text" v-model="name">
  </div>
</template>
<script>
export default {
  data(){
    return {
      id: 1,
      name: 'SunvoDz',
      age: 23,
      // salary: 10000,
    }
  },
  computed: {
    upperName() {
      return this.name.toUpperCase()
    },
    // tax(){
    //   var income = this.salary * 12
    //   income -= 10000
    //   income -= 2000
    //   if (income < 1000){
    //     return 0
    //   }else{
    //     return (income - 20 )
    //   }
    //   return 0
    // }
  },
}
</script>
