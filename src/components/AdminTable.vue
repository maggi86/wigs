<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Image</th>
        <th>Wig Name</th>
      </tr>
    </thead>
    <tbody v-if="wigs">
        <tr v-for="wig in wigs" :key="wig.id">
            <td>{{ wig.id }}</td>
            <td><img :src="wig.images" alt="" width="200" height="200"></td>
            <td>{{ wig.name }}</td>
        </tr>
    </tbody>
    <div v-else><h1>No data to display in Admin</h1></div>
  </table>
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
