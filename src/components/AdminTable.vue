<template>
  <body>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Wig Name</th>
          <th>Wig Price</th>
          <th>Wig Description</th>
          <th>Wig Lifespan</th>
          <th>Wig Processing Time</th>
          <th>Wig Shipping Time</th>
          <th>Wig Rating</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody v-if="wigs">
        <tr v-for="wig in wigs" :key="wig.id">
          <td>{{ wig.id }}</td>
          <td><img :src="wig.images" alt="" width="200" height="200" /></td>
          <td>{{ wig.name }}</td>
          <td>R {{ wig.price }}</td>
          <td>{{ wig.description }}</td>
          <td>{{ wig.lifespan }}</td>
          <td>{{ wig["processing time"] }}</td>
          <td>{{ wig["shipping time"] }}</td>
          <td>{{ wig.rating }}</td>
          <td><button><i class="bi bi-pencil-square"></i></button></td>
          <td><button><i class="bi bi-trash-fill"></i>  </button></td>
        </tr>
      </tbody>
      <div v-else><h1>No data to display in Admin</h1></div>
    </table>
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
body {
  /* background: linear-gradient(100deg, rgba(63, 63, 63, 0.8) 0%, rgba(255, 255, 255, 0) 25%); */
  background: linear-gradient(
    100deg,
    yellow 0%,
    brown 25%,
    purple 50%,
    green 75%,
    orange 100%
  );
}
table,
th,
td {
  border: 1px solid black;
}
table {
  text-align: center;
  align-items: center;
  border: 2px solid black;
  border-collapse: collapse;
  color: white;
}
td {
  padding: 10px;
}
img {
  border-radius: 30px;
}
</style>
