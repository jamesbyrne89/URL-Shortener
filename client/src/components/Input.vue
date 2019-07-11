<template>
  <div>
    <input
      class="url-input"
      placeholder="Enter a url to shorten..."
      @input="handleInput"
      v-model="input"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  data: () => ({
    input: ""
  }),
  methods: {
    handleInput: e => {
      // eslint-disable-next-line
      console.log(e.target.value);
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
input {
  background: #efefef;
  line-height: 1.5;
  font-size: 3rem;
  border: 0;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
}
</style>
