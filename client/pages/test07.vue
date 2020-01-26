<template>
  <div>
    <h1>Name List</h1>
    <input type="text" v-model="username" />
    <input type="email" v-model="email" />
    <button @click="doAdd">Add Customer</button>
    <ul>
      <li v-for="c in customers" :key="c.id">
        <span>{{ c.id }}</span>
        <span>{{ c.username }}</span>
        <span>{{ c.email }}</span>
      </li>
    </ul>
    <br /><br />
    <!-- tbody>tr>td*3 || tbody>tr*5>td*3 -->
    <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Username</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="c in customers"
          :key="c.id"
          :class="{ gray: c.id % 2 === 0}"
          class="text"
        >
          <td>{{ c.id }}</td>
          <td>{{ c.username }}</td>
          <td>{{ c.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      customers: [
        { id: 1, username: "sunvodz1", email: "sunvo1@sunvo.sun" },
        { id: 2, username: "sunvodz2", email: "sunvo2@sunvo.sun" },
        { id: 3, username: "sunvodz3", email: "sunvo3@sunvo.sun" }
      ]
    };
  },
  methods: {
    doAdd() {
      let id = this.customers.length + 1;
      this.customers.push({
        id: id,
        username: this.username,
        email: this.email + "@sunvo.sun"
      });
    }
  }
};
</script>
<style>
.text {
  color: blue
}
.gray {
  background-color: silver
}
</style>