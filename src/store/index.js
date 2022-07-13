import { createStore } from 'vuex'
import validationRegisterUserinput from '../validation/validationRegisteruser'
import router from '@/router';
import { ssrContextKey } from 'vue';

export default createStore({
  state: {
  user:null,

  },
  getters: {
  },
  mutations: {
    setUser (state, User){
      state.user = User;
    }

  },
  actions: {
    login: async (context, payload) => {
      const {email, password} = payload;
      const response = await fetch(`  http://localhost:3000/users?email=${email}&password=${password}`)
      const userData =await response.json();
      context.commit("setUser",userData[0])
      router.push("./home")
    },

    register: async (context,payload) => {
      const {username,email,password} = payload;
      let response = await fetch("  http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          email: email,
          password: password
        }),
        headers: { 'Content-type': 'application/json; charset=UTF-8',}
      })
      const userData =await response.json();
      context.commit("setUser",userData)
      console.log(userData);
      router.push("./login")

    }
  },


  
  modules: {
  }

})
