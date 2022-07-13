import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    wigs: null,
    wig: {},
  },
  getters: {
    wigs(state) {
      return state.wigs;
    },
  },
  mutations: {
    setWigs(state, wigs) {
      state.wigs = wigs;
    },
    deleteWig(context, id) {
      fetch(`http://localhost:3000/wigs/`+ id , {
        method: "DELETE",
      })
        // .commit('removeWig',id)
    },
    addWig(context) {
      fetch("http://localhost:3000/wigs/" ,{
        method: "POST",
        body: JSON.stringify({
          name: "foo",
          rating: "1 star",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => (context.state.wigs = data));
    }
    // removeWig(state,id){
    //   state.wigs = state.wigs.filter(wig => wig.id !== id)
    // }
  },
  actions: {
    fetchAllWigs(context) {
      fetch("http://localhost:3000/wigs")
        .then((res) => res.json())
        .then((data) => (context.state.wigs = data));
    },
    fetchSingleWig(context, id) {
      fetch("http://localhost:3000/wigs/" + id)
        .then((res) => res.json())
        .then((data) => (context.state.wig = data));
    },
  },
  modules: {},
});
