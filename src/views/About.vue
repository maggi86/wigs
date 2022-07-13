<template>
  <div class="header">

  </div>
  <section class="allabt"> 

      <div class="container">
    <div class="about">
      <div class="left">
        <h1>About Us</h1>
        <hr>
        <p>
          For twenty years now, I have dedicated my life to beauty, to discovering my inner beauty and making my inner self shine, and to help other people around me achieving the same.
          I started as a fashion model when I still was a teenager, I became Miss Tourism Tanzania in 2007, and I was a finalist of MIss Tanzania one year later. This opened the door for me to the fashion and entertainment industry, and until today I have many, very good friends in the fashion industry.
        </p>

        <p>
          <!-- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, ipsam. Mollitia hic autem ea provident dolor amet perferendis aperiam possimus ducimus, excepturi dolores aliquam rem porro. Nam aliquid placeat quo! -->
        </p>

      </div>

      <div class="right">

        <img src="../Wig-Images/hair-different-shades-human.jpg" alt="">

      </div>
      <div class="mission">

        <div class="left">

          <img src="../Wig-Images/wavw_wig.jpg" alt="">

        </div>

        <div class="right">

          <h1> Our Products </h1>
          <hr>

          <p> 
            After moving to Europe I started developing my own fashion and beauty brand which I launched on this website.
            I invested a lot of time and money to get here. I travelled myself to India and China to understand and investigate supply chains, and I have very carefully and selectively picked my family owned suppliers to make sure that everybody along the supply chain benefits, but that I can also offer and guarantee you the highest product quality. All our items are carefully selected and double-checked for quality assurance.
            All our products are hand made, and each item has to pass through my hands and will be prepared carefully before its is shipped to you. I want you to be happy.        
          </p>

        </div>


      </div>



    </div>

    <div class="team">

      <h1>Meet the team <hr></h1>
      
            <div  class="card">
         <div class="circle-container">
         </div>
         <h2>Meagan Williams</h2>
         <h4>Manager</h4>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
          
          
          
      <div class="card">
         <div class="circle-container">
            <h1 style="color:#fff;">M</h1>
         </div>
         <h2>Ra'ees Benny</h2>
         <h4>Assistant</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
          
          
          
      <div class="card">
         <div class="circle-container">
            <h1 style="color:#fff;">R</h1>
         </div>
         <h2>Mekayle Ward</h2>
         <h4>Stylist</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div class="card">
         <div class="circle-container">
            <h1 style="color:#fff;">M</h1>
         </div>
         <h2>Ra'ees Benny</h2>
         <h4>Assistant</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
          

    </div>

  </div>

  </section>

</template>

<script>
export default {

}
</script>

<style>

.allabt{
    background: 
      /* top, transparent red, faked with gradient */ linear-gradient(
      rgba(224, 202, 130, 0.46),
      #a35203
    ),
    /* bottom, image */ url(../Wig-Images/peakpx.jpg);
}

.header{
   width:100%;
   height:500px;
   opacity:;
   background-color:rgb(255, 244, 30);
   background-image:url('../Wig-Images/Ks8NpG_headerPage.jpg');
   background-size:cover;
   /* background-position:bottom; */
}

.container{
   width:100%;


}
.container h1{
   font-size:50px
}


.about{
   padding:5% 0;
   width:100%;
   height:80%;
   background: linear-gradient(
      rgba(0, 42, 255, 0.46),
      #a35203
    ),
}

.about .left{
   padding:2%;
   width:50%;
   display:inline-block;
}

.about .right{
   width:50%;
   display:inline-block;
}
.about .right img{
   width:100%;
   border-radius: 20px;
}

.about .left h1{
   text-align:center;
   color:#1e1efffc;
   margin:0 0 10px 0;
   text-shadow: 2px 2px #FF0000;
}

.about .left p{
   font-size:1rem;
   margin:40px auto;
   width:80%
}

.mission{
   padding:5% 0;
   width:100%;
   height:auto;
   background : linear-gradient(
      rgba(0, 42, 255, 0.46),
      #a35203
    ),;
}
.mission .right{
   padding:2% 0;
   width:50%;

   display:inline-block;
}
.mission .left{

   width:50%;

   display:inline-block;
}
.mission .left img{
   width:100%;
  border-radius: 20px;
}
.mission .right h1{
   text-align:center;
   color:#1e1efffc;
   margin:0 0 10px 0;
   text-shadow: 2px 2px #FF0000;
}

.mission .right p{
   font-size:1rem;
   margin:40px auto;
   width:80%
}

.team{
   width:90%;
   margin:auto;
   padding:5%;

}
.team h1{
   text-align:center;
   margin:0 0 10px 0;
   text-shadow: 2px 2px #FF0000;
}

.team .card{
   position:relative;
   min-width:20%;
   height:auto;
   background-color:#fff;
   display:inline-block;
   margin:40px;
   box-shadow: 0 0 20px 2px rgba(0,0,0,0.5);
   text-align:center;
}
.card .circle-container{
   position:relative;
   background-color:#579f79;
   width:250px;
   height:250px;
   border-radius:50%;
   margin:auto;
   color:#fff;
}
.circle-container h1{
   position:absolute;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%);
   margin:0;
   font-size:60px;
}

.team .card h2{
   text-align:center;
   margin:30px 0 0 0;
}
.team .card h4{
   text-align:center;
   margin:10px 0 0 0;
}
.team .card p{
   width:250px;
   margin:30px auto;
   text-align:center;

}


</style>


