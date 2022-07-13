<template>
  <div class="navbar">
    <!-- <img src="./assets/logo.png" alt="" class="logo"> -->
    <router-link to="/" class="active">Home</router-link> |
    <a href="#about"> About </a> |
    <router-link to="/about">Products</router-link> |
    <router-link to="/about">Admin</router-link> |
    <router-link to="/about">Contact</router-link> |
  </div>
</template>

<script>
export default {};

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
  /* position: static; */
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