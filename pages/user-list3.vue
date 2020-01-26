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
      <tr v-for="u in users2" :key="u.id">
        <td>{{ u.id }}</td>
        <td>{{ u.name }}</td>
        <td>{{ u.room }}</td>
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
    users() {
      return this.$store.state.users;
    },
    roomList() {
      return Object.keys(
        this.users.reduce((p, u) => {
          p[u.room] = u.room;
          return p;
        }, {})
      );
    },
    users2() {
      return this.users.filter(u => u.room === this.room);
    }
  } //computed
};
</script>
