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
    async handleSubmit(e) {
      e.preventDefault();

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
