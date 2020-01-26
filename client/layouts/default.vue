<template>
  <v-app>
    <h3>
      <nuxt-link to=/>Home</nuxt-link>
      Login
      Register
    </h3>
    <nuxt/>
  </v-app>
</template>
<script>
export default {
  // ย้าย created ไป store แทน
   created() {
     //เรียกใช้ getCustomers
     // ส่งค่าโดย this.$store.dispatch('getCustomers','ค่าที่ส่งไป')
     this.$store.dispatch('getCustomers')
  //    let customers = [];
  //   for (let i = 1; i <= 100; i++) {
  //     customers.push({
  //       id: ("" + i).padStart(3, "0"),
  //       name: `Name ${i}`,
  //       room: "" + Math.ceil(i / 30)
  //     });
  //   }
  //   this.$store.commit("setCustomers", customers);
  } //created
}

</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

