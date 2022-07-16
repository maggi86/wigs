<template>
  <div v-if="singleWig">
    <body class="vh-100">
      <div class="row row-main">
        <div class="row row-head">
          <div class="col-12">
            <h1>Wig ID {{ id }}</h1>
          </div>
        </div>
        <div class="col-6">
          <img :src="singleWig.images" alt="" />
        </div>
        <div class="col-6">
          <div>
            <div class="row">
              <div class="col-3">
                <h2>Wig Name:</h2>
              </div>
              <div class="col-4">
                <h3>{{ singleWig.name }}</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <h2>Shipping Time :</h2>
              </div>
              <div class="col-4">
                <h3>{{ singleWig["shipping time"] }}</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <h2>Wig Price:</h2>
              </div>
              <div class="col-4">
                <h3>R {{ singleWig.price }}</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <h2>Wig Rating:</h2>
              </div>
              <div class="col-4">
                <h3>{{ singleWig.rating }}*</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <h2>Wig description:</h2>
              </div>
              <div class="col-7">
                <h3>{{ singleWig.description }}</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <h2>Life Span:</h2>
              </div>
              <div class="col-4">
                <h3>{{ singleWig.lifespan }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    <!-- <h2>{{singleWig.images}}</h2> -->
  </div>

  <div v-else>Error</div>
  <Foot />
</template>
<script>
import Foot from "../components/Foot.vue";
export default {
  props: ["id"],
  components: {
    Foot,
  },
  data() {
    return {
      wig: {},
    };
  },
  mounted() {
    this.$store.dispatch("fetchSingleWig", this.id);
  },
  computed: {
    singleWig() {
      return this.$store.state.wig;
    },
  },
};
</script>
<style scoped>
body {
  background: linear-gradient(90deg, rgba(57, 53, 53, 0.46), #a35203);
}
.row-head {
  padding: 0 0 10px 0 !important;
  margin: 0 0 20px 0;
  background-color: rgba(227, 207, 155, 0.888);
}
.row-main {
  padding: 20px 0 0 0 !important;
}
.row {
  padding: 20px 0 0 0;
}
.row h2,h3 {
  color: black;
}
img {
  width: 500px;
  height: 500px;
  border-radius: 40px;
  border: 12px solid rgba(227, 207, 155, 0.888)  ;
}
h1 {
  margin-top: 5px;
  color:black;
}
</style>
