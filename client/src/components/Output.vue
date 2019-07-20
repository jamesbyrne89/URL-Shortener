<template>
  <div>
    <output>{{url}}</output>
  </div>
</template>

<script>
export default {
  name: "Output",
  props: ["url"],
  data: () => ({})
};
</script>