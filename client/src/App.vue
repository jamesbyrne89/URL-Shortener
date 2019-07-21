<template>
  <div id="app">
    <main class="wrapper">
      <Title text="Minify your urls" />
      <Input @submit-form="handleSubmit" :error="error" :loading="loading" />
      <Output :url="output" />
    </main>
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
    output: "",
    loading: false
  }),
  methods: {
    handleOutput(data) {
      const shortenedUrl = `${location.origin}/${data.short_id}`;
      this.$set(this, "output", shortenedUrl);
    },
    async handleSubmit(input) {
      this.$set(this, "loading", true);
      axios
        .post("/api/shorten", {
          url: input
        })
        .then(res => {
          this.$set(this, "loading", false);
          this.handleOutput(res.data);
        }) // eslint-disable-line
        .catch(err => {
          console.error(err);
          this.$set(this, "error", err.response.data.error);
          this.$set(this, "loading", false);
        }); // eslint-disable-line
    }
  }
};
</script>

<style>
@font-face {
  font-family: "ProximaNova";
  src: url("./assets/fonts/Proxima-Nova-Regular.otf") format("opentype");
  /* url("./assets/fonts/Proxima-Nova-Regular.woff") format("woff"); */
  /* url("/assets/fonts/OpenSans-Regular-webfont.woff") format("woff"); */
}

#app {
  font-family: "ProximaNova", "times new roman", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
.wrapper {
  text-align: center;
}
/* #130A1D */
/* #FDFCFD */
/* #4E4F61 */
/* #3710C5 */
/* #C676F4 */
/*  #892FCC */
/* #AEA5BF */
</style>
