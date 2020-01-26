//เก็บข้อมูล
export const state = () => ({
  online: false,
  drawer: false,
  users: [],
})

//แก้ไข
export const mutations = {
  setOnline(state, status) {
    state.online = status
  },
  setDrawer(state, status) {
    state.drawer = status
  },
  setUsers(state, data) {
    state.users = data;
  },
}

//สั่งงาน
export const actions = {

}
