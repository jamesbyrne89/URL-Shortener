<template>
  <div>
    <form @submit="onSubmit">
      <input
        class="input"
        v-bind:placeholder="placeholder"
        @focus="placeholder = ''"
        @blur="placeholder = 'Enter a url to shorten...'"
        v-model="input"
      />
      <div class="input__error" v-show="!!error">{{error}}</div>
      <button class="input__submit-btn" type="submit">Minify</button>
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
  color: #0223ff;
}
.input {
  background: #efefef;
  line-height: 1.75;
  font-size: 2rem;
  border: 0;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  min-width: 36rem;
  text-align: center;
}

.input__error {
  color: red;
  margin-top: 1rem;
  font-size: 1.25rem;
}

.input__submit-btn {
  background: #0223ff;
  color: white;
  border: 0;
  line-height: 4;
  padding: 0 6em;
  min-width: 20em;
  border-radius: 0.5em;
  display: block;
  margin: 2rem auto 0;
  cursor: pointer;
}
</style>
