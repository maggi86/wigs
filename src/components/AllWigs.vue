<template>
  <!-- <ul>
    <div v-if="wigs">
      <li v-for="wig in wigs" :key="wig">
        <p>{{ wig.name }} R{{ wig.price }}</p>
        <img
          :src="wig.images"
          alt="Wig-Image"
          width="200"
          height="200"
          id="img"
        />
      </li>
    </div>
    <div v-else>Loading...</div>
  </ul> -->
  <body>
    <div v-if="wigs">
    <div class="row">
      <div class="col-md-4" v-for="wig in wigs" :key="wig.id">
        <div class="wigCard">
          <!-- <h1>Hover The Card</h1> -->
          <div class="card-wrapper">
            <div class="user-pic">
              <img :src="wig.images" alt="" class="img-fluid" />
            </div>
            <!-- <div class="card-deatils"> -->
            <div class="name">
              <h3>{{ wig.name }}</h3>
              <p>R{{ wig.price }}</p>
            </div>
            <div class="social-details">
              <div class="post">
                <h3>{{ wig.hair }}</h3>
                <p>Posts</p>
              </div>
              <div class="followers">
                <h3>{{ wig.rating }}</h3>
                <p>Followers</p>
              </div>
              <div class="following">
                <h3>{{ wig.lifespan }}</h3>
                <p>Following</p>
              </div>
            </div>
            <div class="card-btn">
              <button type="button">Follow</button>
              <button type="button">Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>Loading...</div>
  </body>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("fetchAllWigs");
  },
  computed: {
    wigs() {
      return this.$store.state.wigs;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Poppins", sans-serif;
  background-color: black;
}
h3 {
  font-size: larger;
  color: rgb(66, 66, 66);
}
p {
  color: rgb(136, 136, 136);
}
.wigCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  overflow: hidden;
}
.wigCard h1 {
  position: absolute;
  color: white;
  font-size: 150px;
  opacity: 0.2;
}
.card-wrapper {
  position: relative;
  height: 180px;
  width: 300px;
  background-color: #613613;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: 0.5s;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
}
.card-wrapper:hover {
  height: 340px;
  width: 330px;
  transition: 0.5s;
}
.card-wrapper:hover .user-pic {
  height: 230px;
  width: 220px;
  transition: 0.5s;
}
.user-pic {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: auto;
  top: -75px;
  width: 150px;
  height: 150px;
  /* background-color: #613613; */
  border-radius: 10px;
  box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  transition: 0.5s;
}
.user-pic img {
  margin-top: 55px;
  width: 100%;
  height: 200px;
  display: block;
  border-radius: 30px;
  /* object-position: 100px 0 !important; */
  /* margin-left: -25%; */
}
.name {
  text-align: center;
  position: relative;
  top: 85px;
  transition: 0.5s;
}
.card-wrapper:hover .name {
  top: 170px;
}
.social-details {
  position: relative;
  top: 100px;
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 30px;
  opacity: 0;
  transition: 0.5s;
}
.card-wrapper:hover .social-details {
  opacity: 1;
  position: relative;
  top: 170px;
  text-align: center;

  /* margin-right: 1; */
}
.card-btn {
  position: relative;
  top: 200px;
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
  padding: 0 50px;
  opacity: 0;
  transition: 0.1s;
}
.card-wrapper:hover .card-btn {
  opacity: 1;
  transition-delay: 0.3s;
}
.card-btn button {
  width: 100px;
  padding: 5px 10px;
  font-size: medium;
  font-family: "Poppins", sans-serif;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgb(136, 136, 136);
  color: rgb(136, 136, 136);
  transition: 0.3s;
}
.card-btn button:hover {
  color: white;
  background-color: #c850c0;
  transition: 0.3s;
  border: 1px solid white;
}
</style>
