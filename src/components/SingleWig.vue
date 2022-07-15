<template>
  <h1>{{ id }}</h1>
  <div v-if="singleWig">
    <img :src="singleWig.images" alt="" width="300" height="200" />
    <!-- <h2>{{singleWig.images}}</h2> -->
    <h2>{{ singleWig.name }}</h2>
    <h2>{{ singleWig["shipping time"] }}</h2>
    <h2>R {{ singleWig.price }}</h2>
    <h2>Rating: {{ singleWig.rating }}*</h2>
    <h2>{{ singleWig.description }}</h2>
    <h2>Life Span: {{ singleWig.lifespan }}</h2>
  </div>
  <div v-else>Error</div>
</template>
<script>
export default {
  props: ["id"],
  data(){
    return {
      wig:{}
      }
  },
  mounted(){
    this.$store.dispatch('fetchSingleWig', this.id)
  },
  computed:{
    singleWig(){
      return this.$store.state.wig
    }
  }
}
</script>
<style scoped>
h1{
  margin-top: 30px;
}
</style>
