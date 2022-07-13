

<template>
  <section class="home vh-100">
    <div class="text-header">
      <h1>Beauty is our</h1>
      <p>Duty</p>
    </div>

    <div class="sam" >
      <img
        src="../Wig-Images/WigNation-Logo-removebg-preview.png"
        height="470px" width="660px"
      />
      <br>
      <button id="button">View Our products</button>
      <button id="button">About Us</button>
      
    </div>

  </section>

  <section id="about">
    <About />
  </section>

  <Foot class="footer" />
</template>


<script>
import Foot from "../components/Foot.vue";
import About from "../views/About";
import About1 from "./About.vue";

export default {
  components: {
    Foot,
    About,
    About1,
  },
};
</script>



<style>
.home {
  margin: 0;
  padding: 0;
  background: 
      /* top, transparent red, faked with gradient */ linear-gradient(
      rgba(57, 53, 53, 0.46),
      #a35203
    ),
    /* bottom, image */ url(../Wig-Images/anotherwallpaper.webp);
  background-size: cover;
  background-attachment: fixed;
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

#button:hover {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
}

/* Footer */

.footer {
  bottom: 100%;
}

/* Heading  */
.text-header {
  float: right;
  /* display: flex; */
  margin-top: 120px;
  margin-right: 70px;
  /* font-size: 90px; */
  color: rgb(255, 255, 255);
  font-family: "Acme", sans-serif;
}
.text-header h1 {
  color: black;
}
p {
  color: black;
}
/* .text {
  font-size: 1.1rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  width: 38%;
  line-height: 1.5;
  margin: 1.6rem 0;
} */

.sam {
    margin-right: 13%;

}
</style>
