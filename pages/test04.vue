<template>
  <div>
  <h1>Test 4 : {{name}}</h1>
  <h2>{{upperName}}</h2>
  <input type ="text" v-model="name">
  <button @click="doSave">SAVE</button>
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
  },
  methods: {
    doSave(){
      console.log('SAVE',this.name)
    }
  },
}
</script>
