<template>
  <div>
    <form @submit="onSubmit">
      <input
        class="url-input"
        v-bind:placeholder="placeholder"
        @focus="placeholder = ''"
        @blur="placeholder = 'Enter a url to shorten...'"
        v-model="input"
      />
      <div class="input-error" v-show="!!error">{{error}}</div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["error"],
  data: () => ({
    input: "",
    placeholder: "Enter a url to shorten..."
  }),
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$emit("submit-form", this.input);
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

.input-error {
  color: red;
  margin-top: 1rem;
  font-size: 1.25rem;
}
</style>
