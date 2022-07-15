<template>
<!-- Right side -->
 <div id="contact-form">
    <h1>Contact us for your wigs</h1>
  <img src="../assets/WigNation-Logo.png" alt="" id="wig-logo">


  <form action="https://formspree.io/f/moqrywdp" method="POST">
    <div id="Name-Email">
        <label for="name">Name:</label>
      <input
        type="name"
        name="name"
        id="form-name"
        v-model="name"
        placeholder="Steve"
        required
      />
        <label for="email">Email:</label>
      <input
        type="email"
        name="email"
        id="form-email"
        v-model="email"
        placeholder="eg@gmial"
        required
      />
    </div>
    <div>
      <label for="password">Password:</label>
    <input
      type="password"
      name="password"
      id="form-password"
      v-model="password"
      placeholder="1234abcd"
      maxlength="20"
      required
    />

    <label for="gender">Gender</label>
    <select name="Gender" id="unisex" v-model="gender">
        <option value="All">All</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
    </select>
    </div>

    <div class="terms">
        <input type="checkbox" required v-model="terms">
        <label>Accept Terms and Conditions</label>
    </div>
    <button type="submit">Submit</button>
  </form>
  <div id="form">
    <p>Name: {{ name }}</p>
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Gender: {{ gender }}</p>
    <p>Terms and Conditions: {{ terms }}</p>
  </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      gender: "All",
      terms: false
    };
  },
};
</script>
<style scoped>
#Name-Email{
  padding: 30px 10px;
}
#Name-Email input{
  margin: 0 10px;
}
#wig-logo img{
  height: 700px;
  width: 700px;
}
#contact-form{
  text-align: center;
  margin-left:15% ;
}
</style>