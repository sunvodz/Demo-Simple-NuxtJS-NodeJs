<template>
  <div>
    <div>
      <select v-model="room">
        <option v-for="r in roomList" :value="r" :key="r">Room {{ r }}</option>
      </select>
    </div>
    <table>
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Room</td>
      </tr>
      <tr v-for="c in customers2" :key="c.id">
        <td>{{ c.id }}</td>
        <td>{{ c.name }}</td>
        <td>{{ c.room }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      room: "1"
    };
  }, //data
  computed: {
    customers() {
      return this.$store.state.customers;
    },
    roomList() {
      return Object.keys(
        this.customers.reduce((p, u) => {
          p[u.room] = u.room;
          return p;
        }, {})
      );
    },
    customers2() {
      return this.customers.filter(u => u.room === this.room);
    }
  }, //computed
};
</script>
