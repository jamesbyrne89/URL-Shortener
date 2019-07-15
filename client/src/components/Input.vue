<template>
  <div>
    <form @submit="handleSubmit">
      <input
        class="url-input"
        v-bind:placeholder="placeholder"
        @focus="placeholder = ''"
        @blur="placeholder = 'Enter a url to shorten...'"
        v-model="input"
      />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Input",
  data: () => ({
    input: "",
    placeholder: "Enter a url to shorten..."
  }),
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      // eslint-disable-next-line
      /* eslint-disable */
      axios.post("/api", {
        url: this.$data.input
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.url-input {
  background: #efefef;
  line-height: 1.75;
  font-size: 2rem;
  border: 0;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  min-width: 36rem;
  text-align: center;
}
</style>
