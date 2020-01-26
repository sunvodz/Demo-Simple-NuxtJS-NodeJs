export const state = () => ({
  online: false,
  drawer: false,
  users: []
});
// mutations แก้ไขข้อมูล ทันที Synchronous
export const mutations = {
  setOnline(state, status) {
    state.online = status;
  },
  setDrawer(state, status) {
    state.drawer = status;
  },
  setUsers(state, data) {
    state.users = data;
  }
};

export const actions = {};
