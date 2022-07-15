<template>
<div class="container">
<h2> Registration  to join the Wig Nation </h2>
<form @submit.prevent="register({username, email, password, password2, errors})">
<input type="text"  placeholder="Please enter username " v-model="username"  required>
<br>
<br>
<input type="text"   v-model="email" placeholder="please  enter email"  required>
<br>
<br>
<input type="password"   v-model="password" placeholder="please enter password" required >
<br>
<br>
<input type="password" v-model="password2"  placeholder="please confirm password" required >
<br>
<br>
<div>
    <button class="btn form-control"> register</button>
</div>
</form>
</div>
    <footer id="footer">
    <p>@copy 2022 WigNation copyright</p>
  </footer>
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
    box-shadow: 0  15px 30px #a35203;
 background-color:rgba(227, 207, 155, 0.888);
    width:450px;
    padding: 30px 40px;
    position:absolute;
    transform: translate(-50%,-50%);
    left:150%;
    top:50%;
    animation: show 3s linear forwards;
    height: 60vh;

}


#footer {
 background-color:rgba(227, 207, 155, 0.888);
  width: 100%;
  height: 70px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(0, 0, 0);
  text-align: center;
  position: fixed;
  bottom: 0;
}
#footer p {
  background-color:rgba(202, 178, 116, 0.888);
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
    background-color:burlywood;
    size: 40px;
}
</style>