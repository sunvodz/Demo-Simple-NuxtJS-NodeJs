<template>
  <section class="container">
    <div>
      <div class="container">
        <form>
          <h1 align="center">Login</h1>
          <div>
            <label>Username:</label>
            <input type="text" v-model="form.login"/>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" v-model="form.pass" />
          </div>
          <button @click="doLogin">Login</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
let blankfrom = {
  login: "",
  pass: "",
};
export default {
    layout: 'public',
  data() {
    return {
      form: JSON.parse(JSON.stringify(blankfrom)),
    };
  },
  methods: {
    async doLogin() {
      let res = await this.$http.post('/login', this.form)
      if(!res.data.ok){
        return 
      }
      //จำ user
      windows.localStorage.setItem('user', JSON.stringify(res.data.user))
      console.log("Login Complete")
      //ไปหน้า home
      this.$router.push('./home');
    }
  },
  components: {
    AppLogo
  }
};
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
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
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
