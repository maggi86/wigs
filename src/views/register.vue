<template>
<div class="container">
<h2> Registration  to join the Wig Nation </h2>
<form @submit.prevent="register({username, email, password, password2, errors})">
<input type="text"  placeholder="Please enter username " v-model="username" >
<br>
<input type="text"   v-model="email" placeholder="please  enter email" >

<br>
<input type="password"   v-model="password" placeholder="please enter password" >

<br>
<input type="password" v-model="password2"  placeholder="please confirm password" >

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


<style scoped>
.container{
    box-shadow: 0  15px 30px rgb(02,12,12);
background-color: aliceblue;
    width:350px;
    padding: 30px 40px;
    position:absolute;
    transform: translate(-50%,-50%);
    left:150%;
    top:50%;
    animation: show 3s linear forwards;

}


@keyframes show {
    from {
        left:150%;
    }
    to {
        left:50%
    }
}
.btn{
    background-color: aqua;
    size: 40px;
}
</style>