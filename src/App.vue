<template>
<div class="">
  <div id="navbar">
  <Navbar/>
</div>
<router-view />
<!-- <v-footer app bottom fixed padless id="footer">
<Foot/>
</v-footer> -->



</div>
</template>

<script>
// @ is an alias to /src
import Navbar from "./components/Navbar.vue";


export default {
  components: {
    Navbar
  },
};
</script>
<style >
/* *{
        overflow: hidden !important;
} */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x:hidden ;
}


</style>
