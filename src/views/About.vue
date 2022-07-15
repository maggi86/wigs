<template>
  <div class="header"></div>
  <section class="allabt">
    <div class="container">
      <div class="about">
        <div class="left">
          <h1>About Us</h1>
          <hr />
          <p>
            For twenty years now, I have dedicated my life to beauty, to
            discovering my inner beauty and making my inner self shine, and to
            help other people around me achieving the same. I started as a
            fashion model when I still was a teenager, I became Miss Tourism
            Tanzania in 2007, and I was a finalist of MIss Tanzania one year
            later. This opened the door for me to the fashion and entertainment
            industry, and until today I have many, very good friends in the
            fashion industry.
          </p>
        </div>

        <div class="right">
          <img src="../Wig-Images/hair-different-shades-human.jpg" alt="" />
        </div>
        <div class="mission">
          <div class="left">
            <img src="../Wig-Images/wavw_wig.jpg" alt="" />
          </div>

          <div class="right">
            <h1>Our Products</h1>
            <hr />

            <p>
              After moving to Europe I started developing my own fashion and
              beauty brand which I launched on this website. I invested a lot of
              time and money to get here. I travelled myself to India and China
              to understand and investigate supply chains, and I have very
              carefully and selectively picked my family owned suppliers to make
              sure that everybody along the supply chain benefits, but that I
              can also offer and guarantee you the highest product quality. All
              our items are carefully selected and double-checked for quality
              assurance. All our products are hand made, and each item has to
              pass through my hands and will be prepared carefully before its is
              shipped to you. I want you to be happy.
            </p>
          </div>
        </div>
      </div>

      <div class="team">
        <h1>Meet the team</h1>

        <div class="card">
          <div class="circle-container">
            <img class="pfp" src="../Wig-Images/Liam.png" />
          </div>
          <h2>Liam Engel</h2>
          <h4>Creative Director</h4>
          <p>
            I am a good collaborator all around the office, everyone displays
            there ideas on the table and from there it is up to me to make sure
            that what they asked for is what they get, and that the team is
            satisfied
          </p>
        </div>

        <div class="card">
          <div class="circle-container">
            <img class="pfp Rpdf" src="../Wig-Images/Raees(2).png" />
          </div>
          <h2>Ra'ees Benny</h2>
          <h4>Backend-Developer</h4>
          <p>
            All data related issues and
            functions all come go me. I am the guy that works behind the
            curtains and makes sure that all functionality is working and that
            the servers run smoothly
          </p>
        </div>

        <div class="card">
          <div class="circle-container">
            <img class="pfp" src="../Wig-Images/Micheala(1).png" />
          </div>
          <h2>Micheala Ward</h2>
          <h4>Co - Manager</h4>
          <p>
          I make sure that all operations of the team is running smoothly and that everyone is doing what is correct. I also am involved with both back-end and front-end aspects of the project
          </p>
        </div>

        <div class="card">
          <div class="circle-container">
            <img class="pfp" src="../Wig-Images/Meagan(2).png" />
          </div>
          <h2>Meagan Williams</h2>
          <h4>Manager</h4>
          <p>
            My role in the project is to assign everyone to a specific job that meets there skill. I also make sure that everyone knows exactly what they are doing, and at the end of the production faze I inspect and make sure that the project meets the clients standards and their expectations
          </p>
        </div>
      </div>
    </div>
  </section>
  <Foot />
</template>

<script>
import Foot from "@/components/Foot.vue";
export default {
  components:{
    Foot
  }
};
</script>

<style>
.allabt {
  background: linear-gradient(rgba(224, 202, 130, 0.46), #a35203),
    /* bottom, image */ url(../Wig-Images/peakpx.jpg);
  background-attachment: fixed;
}

.header {
  width: 100%;
  height: 500px;
  background-color: rgb(255, 244, 30);
  background-image: url("../Wig-Images/Ks8NpG_headerPage.jpg");
  background-size: cover;
}

.container {
  width: 100%;
}

.pfp {
  border-radius: 50%;
  object-fit: cover;
}
.Rpdf {
  object-position: 0px 1px;
}

.container h1 {
  font-size: 50px;
}

.about {
  padding: 5% 0;
  width: 100%;
  height: 80%;
  background: linear-gradient(rgba(227, 207, 155, 0.888) , #a35203);
}

.about .left {
  padding: 2%;
  width: 50%;
  display: inline-block;
}

.about .right {
  width: 50%;
  display: inline-block;
}
.about .right img {
  width: 100%;
  border-radius: 20px;
}

.about .left h1 {
  text-align: center;
  color: burlywood;
  margin: 0 0 10px 0;
  text-shadow: 2px 2px #ff0000;
}

.about .left p {
  font-size: 1rem;
  margin: 40px auto;
  width: 80%;
}

.mission {
  padding: 5% 0;
  width: 100%;
  height: auto;
  background: linear-gradient( #a35203);
}
.mission .right {
  padding: 2% 0;
  width: 50%;

  display: inline-block;
}
.mission .left {
  width: 50%;

  display: inline-block;
}
.mission .left img {
  width: 100%;
  border-radius: 20px;
}
.mission .right h1 {
  text-align: center;
  color: burlywood;
  margin: 0 0 10px 0;
  text-shadow: 2px 2px #ff0000;
}

.mission .right p {
  font-size: 1rem;
  margin: 40px auto;
  width: 80%;
}

.team {
  width: 90%;
  margin: auto;
  padding: 5%;
}
.team h1 {
  text-align: center;
  margin: 0 0 10px 0;
  color: burlywood;
  text-shadow: 2px 2px #ff0000;
}

.team .card {
  position: relative;
  min-width: 20%;
  height: auto;
  background-color: #fff;
  display: inline-block;
  margin: 40px;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);
  text-align: center;
  border-radius: 30px;
}
.card .circle-container {
  position: relative;
  background-color: #579f79;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: auto;
  color: #fff;
}
.circle-container h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-size: 60px;
}
.circle-container img {
  height: 250px;
  width: 250px;
}

.team .card h2 {
  text-align: center;
  margin: 30px 0 0 0;
}
.team .card h4 {
  text-align: center;
  margin: 10px 0 0 0;
}
.team .card p {
  width: 250px;
  margin: 30px auto;
  text-align: center;
}
</style>
