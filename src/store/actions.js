export default {
  GET_ITEM: ({ commit, state }, { value, id }) => {
    axios.get(`https://api.github.com/users/${value}`)
    .then((responce) => {
      commit('GET_NEW_ITEM', { data: responce.data });
      console.log(responce.data.repos_url);
      if(responce && responce.data && responce.data.repos_url) {
          axios.get(responce.data.repos_url)
          .then((resp) => commit('GET_REPO', { data: resp.data }))
          .catch(() => commit('GET_ERROR_REPO'))
      } else {commit('GET_ERROR_REPO')};
    })
    .catch(() => {
    console.log('dddd');
      commit('GET_ERROR_ITEM');
    });
  },
  MOUNT_ITEM: ({ commit, state }) => {
    commit('SET_MOUNT_ITEM');
  }
}
