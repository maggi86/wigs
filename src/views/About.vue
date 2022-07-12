<template>

<div class="equal-height-container">
  <div class="second">

    <div class="second-a">
      <div class="content">
        <h1 class="WWA">Who We are</h1> 
        <p class="Para"> 

      For twenty years now, I have dedicated my life to beauty, to discovering my inner beauty and making my inner self shine, and to help other people around me achieving the same.
      I started as a fashion model when I still was a teenager, I became Miss Tourism Tanzania in 2007, and I was a finalist of MIss Tanzania one year later. This opened the door for me to the fashion and entertainment industry, and until today I have many, very good friends in the fashion industry.
      Then I went on the coach upcoming talents and new fashion models, and prepared them to be ready for the cat walk and the job.
      For a time, I also had my own TV show about fashion in Tanzania.
      After moving to Europe I started developing my own fashion and beauty brand which I launched on this website.
      I invested a lot of time and money to get here. I travelled myself to India and China to understand and investigate supply chains, and I have very carefully and selectively picked my family owned suppliers to make sure that everybody along the supply chain benefits, but that I can also offer and guarantee you the highest product quality. All our items are carefully selected and double-checked for quality assurance.
      All our products are hand made, and each item has to pass through my hands and will be prepared carefully before its is shipped to you. I want you to be happy. 

      </p>
        
      </div>
    </div>
    <div class="second-b">
      <div class="first content">
        <a href="design-and-manufacture/" class="content">Animation & Graphics</a>
      </div>

    </div>

  </div>

</div>

</template>




<style>

.WWA{
  display: contents;
}

.Para{
  font-size: 18px;
}

* {
  transition: all 0.5s ease;
  font-family: 'Roboto', sans-serif;
}
.equal-height-container {
  width: 100%;
  height: 100vh;
  display: flex;
}
.second {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.second-a,
.second-b {
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;
}
.second-a {
  flex: 1;
        background: 
      /* top, transparent red, faked with gradient */ linear-gradient(
        rgba(224, 202, 130, 0.46),
        #a35203
      ),
      /* bottom, image */ url(..//Wig-Images/White-BG.jpg);
  height: 100%;
}
.second-b {
  flex: 1;
  background-image: url("../Wig-Images/Dark-Hd-Wallpapers-1080p-Dark-Wallpaper-1080p-Background-.jpg");
  height: 100%;
}
.second :hover {
  flex-grow: 2;
}
.content {
  font-size: 74px;
  font-weight: bold;
  width: 50%;
  height: 100%;
  color: white !important;
  text-decoration: none;
  box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.4);
  text-align: center;
}
.second .content {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  /* display: flex; */
  justify-content: center;
  align-items: center;
}
.first .content {
  background: linear-gradient(to right, #00000094, #84001887);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>



