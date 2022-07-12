import { createStore } from 'vuex'
import validationRegisterUserinput from '../validation/validationRegisteruser'
import router from '@/router';

export default createStore({
  state: {
  user:[]
  },
  getters: {
  },
  mutations: {
    setUser (state, User){
      state.user = User;
    }

  },
  actions: {
    registerUser(context, payload){
      let user ={
          username:payload.username,
          email:payload.email,
          password:payload.password,
           password2:payload.password2,
  };
  console.log(user);
  const {isInvalid,errors}= validationRegisterUserinput(user);
  console.log(isInvalid)

  if(isInvalid){
      payload.errors = errors;
      console.log(payload.errors.username)
  } else  {
      payload.errors = {}
      // store user in local Storage
      // if(localStorage.users){
      //    let isUsers=localStorage.users; 
      //    payload.users=JSON.parse(isUsers);
      // }
      // payload.users.push(user);
      // localStorage.setItem('users',JSON.stringify(user));
      context.commit('setUser', user)
      // payload.username="";
      // payload.email="";
      // payload.password="";
      // payload.password2="";
      router.push("./login");
      
    let login =await fetch(
    `http://localhost:3000/users?email=${payload.email} password${payload.password}`
  )

  }}


  
  },


  modules: {
  }
})
