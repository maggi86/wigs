<template>
  <nav class="navbar">
    <div v-if="user">
      <router-link to="/" class="active">Home</router-link> |
      <router-link to="/About" class="active">About</router-link> |
      <router-link to="/wigs">Products</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <h2>
        {{ user.username }}
      </h2>
      <button class="btn btn-danger" @click="logout">Logout</button>
    </div>
    <div v-else><router-link to="/login">Login</router-link> |</div>
  </nav>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}
</script>

<style scoped>
.navbar {
  overflow: hidden;
  background-color: #333;
  opacity: 70%;
  position: fixed;
  top: 0;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar a {
  float: center;
  color: #f2f2f2;
  text-align: center;
  padding: 0 30px;
  text-decoration: none;
  font-size: 17px;
  transition: transform 0.5s;
}

.navbar a:hover {
  transform: scale(1.3);
  text-decoration: underline;
  text-decoration-color: #00ffff;
}
</style>
