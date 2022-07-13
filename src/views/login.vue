<template>
  <h4>Login</h4>
  <form @submit.prevent="login">
    <input type="text" placeholder="Please enter email " v-model="email" />
    <br />
    <input
      type="password"
      placeholder="Please enter password"
      v-model="password"
    />
    <br />

    <br />
    <div>
      <button class="btn form-control">Login</button>
    </div>
  </form>
  <div v-if="user">
    Welcome {{user.username}}
  </div>
  <div v-else>
    Error
  </div>


</template>

<script>
// import store from '../store'
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style></style>
