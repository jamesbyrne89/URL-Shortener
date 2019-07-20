<template>
  <div id="app">
    <Title text="Minify your urls" />
    <Input @submit-form="handleSubmit" />
    <Output url="Minfied url goes here" />
  </div>
</template>

<script>
import axios from "axios";
import Title from "./components/Title.vue";
import Input from "./components/Input.vue";
import Output from "./components/Output.vue";

export default {
  name: "app",
  components: {
    Input,
    Title,
    Output
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      console.log("hanels submit");
      axios
        .post("/api/shorten", {
          url: this.$data.input
        })
        .then(res => console.log(res.data)) // eslint-disable-line
        .catch(err => console.error(err)); // eslint-disable-line
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* #130A1D */
/* #FDFCFD */
/* #4E4F61 */
/* #3710C5 */
/* #C676F4 */
/*  #892FCC */
/* #AEA5BF */
</style>
