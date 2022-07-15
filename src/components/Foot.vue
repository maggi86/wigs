<template>
  <footer id="footer">
    <div id="copyright-year"></div>
    <!-- <p>c year wignation copyright</p> -->
  </footer>
</template>
<!-- <script>
const currentYear = new Date().getFullYear();

document.getElementById("footer").innerHTML = `<p>&copy ${currentYear} copyright WigNation</p>`;
</script> -->
<style scoped>
#footer {
  background-color: rgba(213, 181, 93, 0.888);
  width: 100%;
  height: 70px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(0, 0, 0);
  text-align: center;
  position: relative;
  bottom: 0;
}
#footer p {
  background-color: rgba(213, 181, 93, 0.888);
}
</style>
