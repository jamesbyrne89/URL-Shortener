<template>
  <div class="url-output">
    <div v-show="!!url">Your shortened url is:</div>
    <output>{{url}}</output>
  </div>
</template>

<script>
export default {
  name: "Output",
  props: ["url"]
};
</script>


<style scoped>
.url-output {
  font-size: 2rem;
  min-height: 2rem;
  margin-top: 2rem;
}
</style>