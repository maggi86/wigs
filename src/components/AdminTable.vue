<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Add Wig
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Lets Add your wig</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div>
            <label for="name">Name: </label>
            <input type="name" maxlength="20" required id="add-Name"/>
          </div>
          <div>
            <label for="price">Price: </label>
            <input type="number" required id="add-Price"/>
          </div>
          <div>
            <label for="name">Life Span: </label>
            <input type="text" required id="add-LifeSpan"/>
            <label for="name">Rating: </label>
            <input type="number" required id="add-Rating"/>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" id="closeBtn" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" id="addWig-Btn" data-bs-dismiss="modal" @click="$store.dispatch('addWig')">
            <i class="bi bi-plus-circle"></i>
            Add Wig
          </button>
        </div>
      </div>
    </div>
  </div>

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
          <th>Delete</th>
        </tr>
      </thead>
      <tbody v-if="wigs">
        <tr v-for="wig in wigs" :key="wig.id">
          <td>{{ wig.id }}</td>
          <td><img :src="wig.images" alt="" class="img-fuild" /></td>
          <td>{{ wig.name }}</td>
          <td>R {{ wig.price }}</td>
          <td>{{ wig.description }}</td>
          <td>{{ wig.lifespan }}</td>
          <td>{{ wig["processing time"] }}</td>
          <td>{{ wig["shipping time"] }}</td>
          <td>{{ wig.rating }}</td>
          <td>
            <!-- <i
              @click="$store.commit('deleteWig', wig.id)"
              class="bi bi-trash-fill"
            ></i> -->
            <i
              @click="$store.dispatch('deleteWig', wig.id)"
              class="bi bi-trash-fill"
            ></i>
          </td>
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
  background: linear-gradient(
    100deg,
    yellow 0%,
    brown 25%,
    purple 50%,
    green 75%,
    orange 100%
  );
  width: 100vw;
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
  width: 100px;
  height: 100px;
}
#addWig-Btn {
  border-radius: 30px;
  font-size: 20px;
}
#closeBtn {
  border-radius: 30px;
  font-size: 20px;
}
</style>
