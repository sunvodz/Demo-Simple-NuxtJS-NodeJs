<template>
  <div>
    <div>
      <select v-model="room">
        <option v-for="r in roomList" :value="r" :key="r">Room {{ r }}</option>
      </select>
    </div>
    <nuxt-link to="/customer-list3">Customer List3</nuxt-link><br />
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
    //ใช้ข้อมูลจาก store
    customers() {
      return this.$store.state.customers;
    },
    roomList() {
      return Object.keys(
        this.customers.reduce((p, c) => {
          p[c.room] = c.room;
          return p;
        }, {})
      );
    },
    customers2() {
      return this.customers.filter(c => c.room === this.room);
    }
  }, //computed

  // created() {
  //   //ควร ย้าย created ไป store แทน
  //   //fuction นี้จะถูกเรียกช้งานเมื่อ component ถูกเรียกใช้งานครั้งแรก อัตโนมัติ ทำงานตอนเรียก customers-list ทันที ขั้นแรกเลย
  //   let customers = [];
  //   for (let i = 1; i <= 100; i++) {
  //     customers.push({
  //       id: ("" + i).padStart(3, "0"),
  //       name: `Name ${i}`,
  //       room: "" + Math.ceil(i / 30)
  //     });
  //   }
    //นำข้อมูลไปเก็บไว้ store
    // this.$store.commit("setCustomers", customers);
    //กำหนดเวลา 5วิ ค่อยทำงาน
    // setInterval(() => {
    //   this.$store.commit("setCustomers", customers);
    // }, 2000);
  // } //created
};
</script>
