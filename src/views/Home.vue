<template>
  <section class="home vh-100">
    <div class="logo">
      <img src="../Wig-Images/WigNation-Logo.png" />
    </div>
    <div class="text-header">
      <p>Beauty is our</p>
      <p>Duty</p>
    </div>
    <div id="link-btns">
      <router-link :to="{ name: 'Wigs' }">
        <button id="button">View Our products</button>
      </router-link>
      <router-link :to="{ name: 'about' }">
        <button id="button">About Us</button>
      </router-link>
    </div>
  </section>

  <!-- <section id="about">
    <About />
  </section> -->

  <!-- <Foot class="footer" /> -->
</template>

<script>
import Foot from "../components/Foot.vue";
// import About from "../views/About.vue";

export default {
  components: {
    // Foot,
    // About,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
.home {
  margin: 0;
  padding: 0;
  background: 
      /* top, transparent red, faked with gradient */ linear-gradient(
      rgba(57, 53, 53, 0.46),
      #a35203
    ),
    /* bottom, image */ 
    
    url(../Wig-Images/anotherwallpaper.webp);
  background-position: center;
  background-size: cover;
  background-repeat:no-repeat ;
  background-attachment: fixed;
}
.logo {
  /* margin-right: 13%; */
  position: relative;
}
.logo img {
  padding-top: 7%;
}
/* Button */
#button {
  background-color: rgba(213, 181, 93, 0.888);
  border: #ffffff;
  color: rgb(255, 255, 255);
  padding: 16px 30px;
  text-align: center;
  font-size: 30px;
  font-family: "Acme", sans-serif;
  text-decoration: solid;
  margin-right: 13%;
  transition: 0.3s;
  border-radius: 20px;
}
#link-btns {
  margin: 100px 0 0 0;
}
#button:hover {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
}
/* Heading  */
.text-header {
  position: absolute;
  /* float: right; */
  /* display: flex; */
  /* margin-top: 120px; */
  /* margin-right: 70px; */
  /* font-size: 90px; */
  top: 380px;
  left: 660px;
  /* padding: 0 0 0 0; */
  color: rgb(255, 255, 255);
  font-family: "Acme", sans-serif;
}
.text-header h1 {
  color: black;
}
p {
  font-size: 50px;
  color: black;
}
</style>
