<template>
<h4>Register Queen </h4>
<form @submit.prevent="registerUser({username, email, password, password2, errors})">
<input type="text" :class="`form-control ${errors.username !== ''  ? 'isInvalid' :''}`" placeholder="Please enter username " v-model="username">
<div class="invalid">{{errors.username}}</div>
<br>
<input type="text"  :class="`form-control ${errors.email !== '' ? 'isInvalid' :''}`" placeholder="Please enter email" v-model="email">
<div class="invalid">{{errors.email}}</div>
<br>
<input type="password"  :class="`form-control ${errors.password !== '' ? 'isInvalid' :''}`" placeholder="Please enter password" v-model="password">
<div class="invalid">{{errors.password}}</div>
<br>
<input type="password" :class="`form-control ${errors.password2 !== ''  ? 'isInvalid' :''}`" placeholder="Please Confirm password" v-model="password2">
<div class="invalid">{{errors.password2}}</div>
<br>
<div>
    <button class="btn form-control"> register</button>
</div>
</form>
</template>

<script>
// import validationRegisterUserinput from '../validation/validationRegisteruser'
// import store from '../store/index'
import { mapActions } from 'vuex';
export default{
data() {
    return{
        username:"",
        email:"",
        password:"",
        password2:"",
        errors:{},
        users:[],
     };
    },
    methods:{
        // store.dispatch()
        ...mapActions(['registerUser'])
        // registerUser(){
        //     let user ={
        //         username:this.username,
        //         email:this.email,
        //         password:this.password,
        //          password2:this.password2,
        // };
        // console.log(user);
        // const {isInvalid,errors}= validationRegisterUserinput(user);
        // console.log(isInvalid)

        // if(isInvalid){
        //     this.errors = errors;
        //     console.log(this.errors.username)
        // } else  {
        //     this.errors = {}
        //     // store user in local Storage
        //     if(localStorage.users){
        //        let isUsers=localStorage.users; 
        //        this.users=JSON.parse(isUsers);
        //     }
        //     this.users.push(user);
        //     localStorage.setItem('users',JSON.stringify(this.users));
        //     this.username="";
        //     this.email="";
        //     this.password="";
        //     this.password2="";
        //     this.$router.push("./login");

        // }
    },

}




</script>


<style>

</style>