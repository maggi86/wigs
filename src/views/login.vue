<template>
<h4>Login </h4>
<form @submit.prevent="registerUser({username, email, password, password2, errors})">
<input type="text" :class="`form-control ${errors.username !== ''  ? 'isInvalid' :''}`" placeholder="Please enter username " v-model="username">
<div class="invalid">{{errors.username}}</div>
<br>
<input type="password"  :class="`form-control ${errors.password !== '' ? 'isInvalid' :''}`" placeholder="Please enter password" v-model="password">
<div class="invalid">{{errors.password}}</div>
<br>

<br>
<div>
    <button class="btn form-control"> Login</button>
</div>
</form>

</template>

<script>
import validationLogin from '../validation/validationLogin';
export default{
    data(){
        return{
            username:"",
            password:"",
            errors:{}
        };
    },
    methods:{
       

          
    }
}
</script>

<style>

</style>