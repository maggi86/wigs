<template>
  <!-- Right side -->
  <div id="contact-form">
    <h1>Contact us for your wigs</h1>
    <img
      src="../assets/WigNation-Logo.png"
      class="image"
      alt=""
      id="wig-logo"
    />

    <form action="https://formspree.io/f/moqrywdp" method="POST" id="Form-edit" target="_blank">
      <div id="Name-Email">
        <div class="form-group" id="mes-area">
          <label for="exampleFormControlInput1">Name:</label>
          <input
            type="name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your Name"
            required maxlength="20"
          />
        </div>
        <div class="form-group" id="mes-area">
          <label for="exampleFormControlInput1">Email address:</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            required
          />
        </div>
      </div>
      <div>
        <div class="form-group" id="mes-area">
          <label for="exampleFormControlTextarea1">Message WigNation</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <label for="gender">Gender</label>
        <select name="Gender" id="unisex" v-model="gender">
          <option value="All">All</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
      </div>

      <div class="terms">
        <input type="checkbox" required v-model="terms" />
        <label>Accept Terms and Conditions</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>

  <Foot />
</template>

<script>
import Foot from "@/components/Foot.vue";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      gender: "All",
      terms: false,
    };
  },
  components: {
    Foot,
  },
};
</script>
<style scoped>
h1{
  margin-top: 40px;
}
#Form-edit {
  background-color: rgba(213, 181, 93, 0.888);
  width: 600px;
  margin: auto;
  border-radius: 30px;
}
#Name-Email {
  padding: 30px 10px;
}
#Name-Email input {
  margin: 0 10px;
}
#wig-logo img {
  height: 20px;
  width: 130px;
}
.image {
  width: 500px !important;
}
#contact-form {
  text-align: center;
  margin-bottom: 50px;
}
#mes-area {
  width: 500px;
  margin: auto;
}
</style>
