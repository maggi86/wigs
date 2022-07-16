<template>
  <div class="row">
    <div class="col-12">
      <h1>Join <span class="font-style">WigNation</span></h1>
      <h3>
        Receive updates on our Special Offers and Articles as they are released.
      </h3>
    </div>
    <div class="col-4"></div>
    <div class="col-4">
      <form
        action="https://formspree.io/f/moqrywdp"
        method="POST"
        target="_blank"
      >
        <div class="form-group" id="mes-area">
          <label for="exampleFormControlInput1">Email address:</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Send us your Email"
            required
          />
        </div>
      </form>
      <button type="submit" id="button">Submit</button>
    </div>
    <div class="col-4"></div>
    <hr />
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
.font-style {
  font-family: "Pacifico", cursive;
}
#button {
  margin: 10px 0 10px 0;
  border-radius: 30px;
  background-color: rgba(202, 178, 116, 0.888);
  transition: 0.5s;
}
#button:hover {
  transform: scale(1.2);
}
label {
  color: black;
  font-size: 20px;
}
.row {
  background-color: rgba(227, 207, 155, 0.888);
}
</style>
