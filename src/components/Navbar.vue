<template>
  <!-- <nav class="navbar">
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
    <div v-else>
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
    </div>
  </nav> -->
  <div v-if="user">
  <div class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/About" class="nav-link active">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/wigs" class="nav-link active"
              >Products</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link active"
              >Contact</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link active">Admin</router-link>
          </li>
          <li>
             <!-- <h2> hello {{username}}</h2>  -->
          </li>
          <li class="nav-item">
              <button class="btn" @click="logout">Logout</button>
          </li>
        </ul>
      </div>
    </div>
    </div>

    </div>
    <div v-else>
      <ul class="">
        <li><router-link to="/login" class="nav-link active">Login</router-link></li>
       
      <li><router-link to="/register" class="nav-link active">Register</router-link></li>
      </ul>
    </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
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
    background-color: transparent;
  /* opacity: 80%; */
  top: 0;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
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
.navbar-collapse{
  justify-content: center;
}

 .navbar a:hover {
  transform: scale(1.3);
  text-decoration: underline;
  text-decoration-color: rgba(227, 207, 155, 0.888);
} 
.navbar-nav{
    background-color: rgba(227, 207, 155, 0.888);
}
ul{
  display: flex;  
  justify-content: center;
  background-color: rgba(227, 207, 155, 0.888);
  margin-bottom: 0;
  height: 70px;
  align-items: center;
}
ul li{
  list-style: none;
  padding: 0 30px;
}

.btn{
  margin-right: 20px;
}
</style>
