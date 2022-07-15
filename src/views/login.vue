<template>
<body>
  <div id="popup">
    <h4>Login</h4>
    <form @submit.prevent="login">
      <input type="text" placeholder="Please enter email " v-model="email" />
      <br /><br>
      <input
        type="password"
        placeholder="Please enter password"
        v-model="password"
      />
      <br />
      <br>
      <div>
        <button class="btn form-control">Login</button>
      </div>
    </form>
  </div>

  <div v-if="user">Welcome {{ user.username }}</div>
  <!-- <div v-else>Error</div> -->
  </body>
    <footer id="footer">
    <p>@copy 2022 WigNation copyright</p>
  </footer>
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

<style scoped>
body{
  background: 
      linear-gradient(
      rgba(224, 202, 130, 0.46),
      #a35203
    ),
    /* bottom, image */ 
    url(../Wig-Images/peakpx.jpg);
    background-size: cover;
  background-repeat:no-repeat ; 
  
}
#popup {
  box-shadow: 0  15px 30px #a35203;
  background-color:rgba(227, 207, 155, 0.888);
  width: 450px;
  padding: 30px 40px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: -50%;
  top: 50%;
  border-radius: 8px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  animation: show 3s linear forwards;
  z-index: 40;
  height: 40vh;
  /* display: none; */
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
    left: -50%;
  }
  to {
    left: 50%;
  }
}
</style>
