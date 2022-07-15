<template>
<div class="">
  <div id="navbar">
  <Navbar/>
</div>
<router-view />
<v-footer app bottom fixed padless id="footer">
<Foot/>
</v-footer>

</div>
</template>

<script>
// @ is an alias to /src
import Navbar from "./components/Navbar.vue";
import Foot from "./components/Foot.vue";

export default {
  components: {
    Navbar,
    Foot
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x:hidden ;
}
#footer{
    /* background-color: rgba(213, 181, 93, 0.888); */
  background-color: black;
  /* position: fixed; */
  bottom: 0;
  /* width: 100%; */
  color: rgb(0, 0, 0);
  text-align: center;
}
</style>
