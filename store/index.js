//เก็บข้อมูล
export const state = () => ({
  online: false,
  drawer: false,
  customers: []
});

//แก้ไข
export const mutations = {
  setOnline(state, status) {
    state.online = status;
  },
  setDrawer(state, status) {
    state.drawer = status;
  },
  setCustomers(state, data) {
    state.customers = data;
  }
};

//สั่งงาน
export const actions = {
  getCustomers(store) {
    // //ยิง api ให้ได้ข้อมูลมา แล้ว commit
    // let customers = [];
    // store.commit("setCustomers", customers);

    //1.โหลดข้อมูลเก่าจาก localStrotage ก่อน
    //จะได้เป็น string เสมอ
    //JSON.parse cover string to opject
    let customers = JSON.parse(
      window.localStorage.getItem("customers") || "[]"
    );
    //2. commit
    store.commit("setCustomers", customers);
    setInterval(() => {
      //3.ยิง api เพื่อขอข้อมูลใหม่ จาก server
      let newData = [];
      for (let i = 1; i <= 100; i++) {
        newData.push({
          id: ("" + i).padStart(3, "0"),
          name: `Name ${i}`,
          room: "" + Math.ceil(i / 30)
        });
      }

      //4.commit
      store.commit("setCustomers", newData);
      //5.เก็บข้อมูลลง localStrotage
      //JSON.stringify(newData) cover type to string
      window.localStorage.setItem("customers", JSON.stringify(newData));
    }, 2000);
  }
};
