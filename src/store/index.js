import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    wigs: null,
    wig: {}
  },
  getters: {
    wigs(state){
      return state.wigs
    }
  },
  mutations: {
    setWigs(state, wigs){
      state.wigs = wigs
    }
  },
  actions: {
    fetchAllWigs(context){
      fetch('http://localhost:3000/wigs')
      .then(res => res.json())
      .then(data => context.state.wigs = data)
    },
    fetchSingleWig(context, id){
      fetch('http://localhost:3000/wigs/' + id)
      .then(res => res.json())
      .then(data => context.state.wig = data)
    }
  },
  modules: {
  }
})
