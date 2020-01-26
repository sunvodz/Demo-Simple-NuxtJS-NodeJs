<template>
  <div>
    <h1>Name List</h1>
    username : <input type="text" v-model="username" /> email :
    <input type="email" v-model="email" />
    <button @click="doAdd">Add Users</button>
    <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Username</td>
          <td>Email</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(u, index) in users" :key="u.id">
          <td>{{ u.id }}</td>
          <td>{{ u.username }}</td>
          <td>{{ u.email }}</td>
          <td>
            <button @click="doEdit">Edit</button
            ><button @click="doDelete(index)">Delete</button>
          </td>
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
      users: []
    };
  },
  methods: {
    //this.$http. this.$axios. ใช้อันไหนก็ได้
    async doAdd() {
      let res = await this.$axios.post("/users/create", {
        username: this.username,
        email: this.email
      });
      if (!res.data) {
        console.log("Error");
      } else {
        console.log("Success");
        let res2 = await this.$axios.get("/users/list", {
        });
        this.users = res2.data
      }
    },
    doEdit() {
      console.log("Edit");
    },
    doDelete(id) {
      console.log("Delete" + id);
      this.$delete(this.users, id);
    }
  }
};
</script>

<!-- <template>
 <div>
    <h1>Name List</h1>
    username : <input type="text" v-model="username" /> email :
    <input type="email" v-model="email" />
    <button @click="doAdd">Add Customer</button>
    <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Username</td>
          <td>Email</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(c, index) incustomers :key="c.id">
          <td>{{ c.id }}</td>
          <td>{{ c.username }}</td>
          <td>{{ c.email }}</td>
          <td>
            <button @click="doEdit">Edit</button><button @click="doDelete(index)">Delete</button>
          </td>
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
        { id: 1, username: "sunvodz1", email: "sunvo1@sunvo.sunvo" },
        { id: 2, username: "sunvodz2", email: "sunvo2@sunvo.sunvo" },
        { id: 3, username: "sunvodz3", email: "sunvo3@sunvo.sunvo" }
      ]
    };
  },
  methods: {
    doAdd() {
      let id = this.customers[this.customers.length - 1].id + 1;
      this.customers.push({
        id: id,
        username: this.username,
        email: this.email + "@sunvo.sunvo"
      });
    },
    doEdit() {
      console.log("Edit");
    },
    doDelete(id) {
      console.log("Delete" + id);
      this.$delete(this.customers, id)
    },

  }
};
</script>
-->
