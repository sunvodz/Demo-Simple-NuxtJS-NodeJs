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
    //ใช้ข้อมูลจาก store
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
  }, //computed
  created() {
    //fuction นี้จะถูกเรียกช้งานเมื่อ component ถูกเรียกใช้งานครั้งแรก อัตโนมัติ ทำงานตอนเรียก user-list ทันที ขั้นแรกเลย
    let users = [];
    for (let i = 1; i <= 100; i++) {
      users.push({
        id: ("" + i).padStart(3, "0"),
        name: `Name ${i}`,
        room: "" + Math.ceil(i / 30)
      });
    }
    //นำข้อมูลไปเก็บไว้ store
    this.$store.commit("setUsers", users);
    
    //กำหนดเวลา 5วิ ค่อยทำงาน
    // setInterval(() => {
    //   this.$store.commit("setUsers", users);
    // }, 5000);
  } //created
};
</script>
