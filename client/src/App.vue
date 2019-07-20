<template>
  <div id="app">
    <Title text="Minify your urls" />
    <Input @submit-form="handleSubmit" :error="error" />
    <Output :url="output" />
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
  data: () => ({
    error: null,
    output: ""
  }),
  methods: {
    handleOutput(data) {
      const shortenedUrl = `${location.origin}/${data.short_id}`;
      this.$set(this, "output", shortenedUrl);
    },
    async handleSubmit(input) {
      axios
        .post("/api/shorten", {
          url: input
        })
        .then(res => {
          console.log(res.data);
          this.handleOutput(res.data);
        }) // eslint-disable-line
        .catch(err => {
          console.error(err);
          this.$set(this, "error", err.response.data.error);
        }); // eslint-disable-line
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
