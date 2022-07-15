import { createStore } from "vuex";
import router from "@/router";
export default createStore({
  state: {
    user: null,
    wigs: null,
    wig: {},
    asc: true,
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
    setUser(state, User) {
      state.user = User;
    },
    sortPrice: (state) => {
      state.wigs.sort((a, b) => {
        return a.price - b.price;
      });
      if (!state.asc) {
        state.wigs.reverse();
      }
      state.asc = !state.asc;
    },
  },
  actions: {
    logout: async (context) => {
      context.commit("setUser", null);
      router.push("/");
    },
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
    login: async (context, payload) => {
      const { email, password } = payload;
      const response = await fetch(
        `  http://localhost:3000/users?email=${email}&password=${password}`
      );
      const userData = await response.json();
      context.commit("setUser", userData[0]);
      router.push("/");
    },
    updateWigs: async (context, id) => {
      fetch(`http://localhost:3000/wigs/` + id, {
        method: "PUT",
        body: JSON.stringify({
          name: document.getElementById("add-Name").value,
          price: document.getElementById("add-Price").value,
          lifespan: document.getElementById("add-LifeSpan").value,
          rating: document.getElementById("add-Rating").value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      then((res) => res.json())
      .then(() => context.dispatch("fetchAllWigs"));
    },
    deleteWig: async (context, id) => {
      fetch(`http://localhost:3000/wigs/` + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => context.dispatch("fetchAllWigs"));
    },
    addWig: async (context) => {
      fetch("http://localhost:3000/wigs", {
        method: "POST",
        body: JSON.stringify({
          images: "https://i.postimg.cc/WbsD7JC1/p1.jpg",
          name: document.getElementById("add-Name").value,
          price: document.getElementById("add-Price").value,
          lifespan: document.getElementById("add-LifeSpan").value,
          rating: document.getElementById("add-Rating").value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("fetchAllWigs"));
    },
    register: async (context, payload) => {
      const { username, email, password } = payload;
      let response = await fetch("  http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const userData = await response.json();
      context.commit("setUser", userData);
      console.log(userData);
      router.push("/login");
    },
  },
  modules: {},
});
