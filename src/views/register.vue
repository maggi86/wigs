<template>
<div class="container">
<h2> Registration  to join the Wig Nation </h2>
<form @submit.prevent="register({username, email, password, password2, errors})">
<input type="text"  placeholder="Please enter username " v-model="username" size="50">
<br>
<input type="text"  :class="`form-control ${errors.email !== '' ? 'isInvalid' :''}`" placeholder="Please enter email" v-model="email" size="50" >
<div class="invalid">{{errors.email}}</div>
<br>
<input type="password"  :class="`form-control ${errors.password !== '' ? 'isInvalid' :''}`" placeholder="Please enter password" v-model="password" size="50" >
<div class="invalid">{{errors.password}}</div>
<br>
<input type="password" :class="`form-control ${errors.password2 !== ''  ? 'isInvalid' :''}`" placeholder="Please Confirm password" v-model="password2" size="50" >
<div class="invalid">{{errors.password2}}</div>
<br>
<div>
    <button class="btn form-control"> register</button>
</div>
</form>
</div>
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
        ...mapActions(['register'])
        // registerUser(){
 
  
    },

}




</script>


<style>
.container{
    box-shadow: 0  15px 30px rgb(02,12,12);
    width: 430px;
    height: 300px;
    margin:auto;
    padding: 20px;
    margin-top:110px
}

.btn{
    background-color: aqua;
    size: 40px;
}
</style>