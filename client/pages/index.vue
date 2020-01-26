<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        Hello NuxtJS By SunvoDz
      </h1>
      <h2 class="subtitle">
      <nuxt-link to="/about">About</nuxt-link><br/>
      <nuxt-link to="/test01">01:data binding (one way binding)</nuxt-link><br/>
      <nuxt-link to="/test02">02:v-model (two way binding)</nuxt-link><br/>
      <nuxt-link to="/test03">03:computed</nuxt-link><br/>
      <nuxt-link to="/test04">04:methods</nuxt-link><br/>
      <nuxt-link to="/test05">05:v-if,v-show</nuxt-link><br/>
      <nuxt-link to="/test06">06:v-for</nuxt-link><br/>
      <nuxt-link to="/test07">07:css class binding</nuxt-link><br/>
      <nuxt-link to=/>08:nuxt routing</nuxt-link><br/>
      </h2>
      <button @click="goToDo">Go To Do Simple App</button>
      <h3>
        <nuxt-link to="/customer-list">Customer List</nuxt-link><br/>
        <nuxt-link to="/customer-list2">Customer List2</nuxt-link><br/>
        <nuxt-link to="/customer-list3">Customer List3</nuxt-link><br/>
        <nuxt-link to="/customer-list4">Customer List4</nuxt-link><br/>

      </h3>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  methods:{
    goToDo(){
      //push,replace  //no back,go(number)
      //push('/todo'),
      //push({past: '/todo'},
      //push('/todo?id=1')),
      //push({path: '/todo',query:{id:1}})
      this.$router.push('/todo')
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

