<template>
  <body>
    <h1>Click on Image for more details</h1>
    <ul>
      <li>
        <button @click="sortPrice" id="sort-price">sort by price</button>
      </li>
      <li>
        <input
          type="text"
          id="search"
          v-model="search"
          placeholder="Search...."
        />
      </li>
      <li>
        <select name="" id="select-wig-rating" v-model="rating">
          <option class="option-wig-rating" value="All">All</option>
          <option class="option-wig-rating" value="5 stars">5</option>
          <option class="option-wig-rating" value="4 stars">4</option>
        </select>
      </li>
    </ul>
    <br />
    <br />
    <div v-if="wigs">
      <div class="row">
        <div class="col-12 col-md-4" v-for="wig in wigs" :key="wig.id">
          <div class="wigCard">
            <!-- <h1>Hover The Card</h1> -->
            <div class="card-wrapper">
              <div class="user-pic">
                <router-link
                  :to="{ name: 'singleWig', params: { id: wig.id } }"
                >
                  <img :src="wig.images" alt="" class="img-fluid" />
                </router-link>
              </div>
              <!-- <div class="card-deatils"> -->
              <div class="name">
                <h3>{{ wig.name }}</h3>
                <h4>R {{ wig.price }}</h4>
              </div>
              <div class="wig-details">
                <div class="wig-hair">
                  <p>Hair type</p>
                  <h3>{{ wig.hair }}</h3>
                </div>
                <div class="wig-rating">
                  <p>Rating</p>
                  <h3>{{ wig.rating }}</h3>
                </div>
                <!-- <div class="wig-lifespan">
                  <p>Life Span</p>
                  <h3>{{ wig.lifespan }}</h3>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </body>
  <AboveFooter />
</template>
<script>
import AboveFooter from "../components/AboveFooter.vue";

export default {
  components: {
    AboveFooter,
  },
  data() {
    return {
      search: "",
      rating: "All",
    };
  },
  mounted() {
    this.$store.dispatch("fetchAllWigs");
  },
  methods: {
    sortPrice() {
      this.$store.commit("sortPrice");
    },
  },
  computed: {
    // wigs() {
    //   return this.$store.state.wigs;
    // },
    wigs() {
      return this.$store.state.wigs?.filter((wigs) => {
        let isMatch = true;
        if (!wigs.name?.toLowerCase().includes(this.search.toLowerCase())) {
          isMatch = false;
        }
        if (this.rating !== "All" && this.rating !== wigs.rating) {
          isMatch = false;
        }
        return isMatch;
      });
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
/* .col-md-4{
  margin: 100px 0 0 0;
} */
body {
  font-family: "Poppins", sans-serif;
  background: linear-gradient(90deg, rgba(57, 53, 53, 0.46), #a35203);
  /* background: grey; */
}
h1 {
  padding: 50px;
}
h3 {
  font-size: 25px;
  /* color: black; */
  color: black;
  /* text-decoration: underline;  */
}
h4 {
  font-size: larger;
  /* color: black; */
  color: black;
}
p {
  color: black;
  text-decoration: underline;
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
  /* background: linear-gradient(100deg, rgba(57, 53, 53, 0.46), #a35203); */
  background-color: rgba(227, 207, 155, 0.888);

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
  margin-top: 70px;
  height: 170px;
  width: 160px;
  transition: 0.8s;
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
  /* margin-top: 55px; */
  width: 100%;
  height: 100%;
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
.wig-details {
  position: relative;
  top: 100px;
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 30px;
  opacity: 0;
  transition: 0.5s;
}
.card-wrapper:hover .wig-details {
  opacity: 1;
  position: relative;
  top: 170px;
  text-align: center;
  /* margin-right: 1; */
}
#sort-price {
  margin: 10px 0 10px 0;
  border-radius: 30px;
  background-color: rgba(202, 178, 116, 0.888);
  transition: 0.5s;
  padding: 10px;
}
#sort-price:hover {
  transform: scale(1.2);
}
#search {
  border-radius: 30px;
  padding: 10px 20px;
}
#select-wig-rating{
  border-radius: 30px;
  padding: 10px 20px;
}
ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
li {
  padding: 0 30px;
}
</style>
