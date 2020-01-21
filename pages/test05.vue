<template>
  <div>
  <h1 v-if="ok">Test 5 : {{name}}</h1>
  <h2 v-show="ok">{{upperName}}</h2>
  <input type ="text" v-model="name">
  <button @click="doSave">SAVE</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      ok:true,
      id: 1,
      name: 'SunvoDz',
      age: 23,
    }
  },
  computed: {
    upperName() {
      return this.name.toUpperCase()
    },
  },
  methods: {
    doSave(){
      this.ok = !this.ok
      console.log('SAVE',this.name)
    }
  },
}
</script>
