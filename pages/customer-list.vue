<template>
  <div>
    <div>
      <select v-model="room">
        <!--
        <option value="1">Room 1</option>
        <option value="2">Room 2</option>
        <option value="3">Room 3</option>
        <option value="4">Room 4</option> -->
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
    //สร้างข้อมูลผู้ใช้มา 100คน
    let customers = [];
    for (let i = 1; i <= 100; i++) {
      customers.push({
        // (''+i) = cover number to string , padStart(3,"0") = 001
        id: ("" + i).padStart(3, "0"),
        name: `Name ${i}`,
        // หารปัดขึ้น
        room: "" + Math.ceil(i / 30)
      });
    }
    return {
      //customers: customers,
      customers,
      room: "1"
    };
  },
  computed: {
    roomList() {
      //ย่อๆจากล่างๆ
       return Object.keys(this.customers.reduce((p, u) => {
       p[u.room] = u.room
        return p
      }, {}))

      // return this.customers.reduce((p, u) => {
      //  p[u.room] = u.room
      //   return p
      // }, {});

      //ใช้ opject
      // return this.customers.reduce((p, u) => {
      //   //ถ้ายังไม่มีห้อง1
      //   if(!p[u.room]){
      //     //ให้เพิ่มห้อง1ลงไป
      //     p[u.room] = u.room
      //   }
      //   return p
      // }, {});

      //ใช้ array
      // // reduce วนรูป
      // //prev คือ ค่าจากรอบที่แล้ว
      // return this.customers.reduce((prev, u) => {
      //   //เอา prev หาห้องจะเจอมั้ย
      //   if (prev.indexof(u.room) === -1) {
      //     //เอาเลขห้องไปเก็บไว้ใน prev = ['1'=>'4']
      //     prev.push(u, room);
      //   }
      //   return prev //return prev เพื่อเอาไปใช้ในรอบถัดไป
      // }, [] /*[] คือ ค่าตั้งต้น*/);

      // let out = [];
      // for (let i = 0; i < this.customers.length; i++) {
      //   if (out.indexOf(this.customers[i].room) === -1) {
      //     out.push(this.customers[i].room);
      //   }
      // }

      //วิธีที่ดี
      // let out = {};
      // //วนตามจำนวนผู้ใช้
      // for (let i = 0; i < this.customers.length; i++) {
      // //ถ้าผู้ใช้คนที่ i มีห้องตามที่เลือก ให้เก็บค่าห้องไว้ใน out = {'1','2','3','4'}
      //   if (!out[this.customers[i].room]) {
      //     // out = {'1':true,'2':true,'3':true,'4':true}
      //     out[this.customers[i].room] = true;
      //     // out[this.customers[i].room] = this.customers[i].room;
      //   }
      // }
      // // return out;
      // // Object.value(out); =[true,true,true,true]
      // // Object.keys(out); = ['1','2','3','4']
      // return Object.keys(out);
    },
    customers2() {
      //หรือ ย่อได้อีก ตัวแปลเดียวไม่ต้องใส่วงเล็บ ค่าว่างและมีมากว่า1ต้องใส่วงเล็บ
      return this.customers.filter(c => c.room === this.room);

      // let out = [];
      // for (let i = 0; i < this.customers.length; i++) {
      //   /// '===' is 1 = '1'
      //   if (this.customers[i].room === this.room) {
      //     out.push(this.customers[i]);
      //   }
      // }
      // return out;

      //หรือ จะค้นหา room ตาม thisroom ที่เลือก
      /* return this.customers.filter(u => {
        return u.room === this.room;
      }); */

      //หรือ ย่อได้อีก
      //return this.customers.filter(u => u.room === this.room )
    }
  }
};
</script>
