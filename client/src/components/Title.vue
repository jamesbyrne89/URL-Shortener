<template>
  <h1 class="main-title">{{text}}</h1>
</template>

<script>
export default {
  name: "Title",
  props: ["text"]
};
</script>

<style lang="scss" scoped>
.main-title {
  font-family: "ProximaNovaBold", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif;
  font-size: 3rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
/* #130A1D */
/* #FDFCFD */
/* #4E4F61 */
/* #3710C5 */
/* #C676F4 */
/*  #892FCC */
/* #AEA5BF */
</style>


