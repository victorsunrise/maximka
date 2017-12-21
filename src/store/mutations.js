import Vue from 'vue'

export default {
  SET_ACTIVE_TYPE: (state, { type }) => {
    state.activeType = type
  },

  SET_LIST: (state, { type, ids }) => {
    state.lists[type] = ids
  },

  SET_ITEMS: (state, { items }) => {
    items.forEach(item => {
      if (item) {
        Vue.set(state.items, item.id, item)
      }
    })
  },

  SET_USER: (state, { id, user }) => {
    Vue.set(state.users, id, user || false) /* false means user not found */
  },

  GET_NEW_ITEM: (state, { data }) => {
       state.repos = [{name: 'no such repo'}];
      state.item = data;
  },
  GET_ERROR_ITEM: (state) => {
      state.item = {login: 'no such user'};
      state.repos = [{name: 'no such repo'}];
  },
  SET_MOUNT_ITEM: (state) => {
    state.item = {login: 'no such user'};
    state.repos = [{name: 'no such repo'}];
  },
  GET_REPO: (state, {data}) => {
      state.repos = data;
  },
   GET_ERROR_REPO: (state) => {
      state.repos = [];
  }
}
