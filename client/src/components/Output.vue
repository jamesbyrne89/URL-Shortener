<template>
  <div class="url-output">
    <transition name="fade">
      <div class="url-output__text" v-show="!!url">Your shortened url is:</div>
    </transition>

    <div class="flex">
      <transition name="fade">
        <output v-show="!!url" class="url-output__url">{{url}}</output>
      </transition>
      <transition name="fade">
        <button
          v-show="!!url"
          type="button"
          class="url-output__copy-button"
          @click="copyToClipboard"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style=" fill:rgba(2, 35, 255, 1);"
          >
            <path
              d="M 4 2 C 2.895 2 2 2.895 2 4 L 2 17 C 2 17.552 2.448 18 3 18 C 3.552 18 4 17.552 4 17 L 4 4 L 17 4 C 17.552 4 18 3.552 18 3 C 18 2.448 17.552 2 17 2 L 4 2 z M 8 6 C 6.895 6 6 6.895 6 8 L 6 20 C 6 21.105 6.895 22 8 22 L 20 22 C 21.105 22 22 21.105 22 20 L 22 8 C 22 6.895 21.105 6 20 6 L 8 6 z M 8 8 L 20 8 L 20 20 L 8 20 L 8 8 z"
            />
          </svg>
        </button>
      </transition>
      <input v-show="!!url" class="hidden-input" v-model="url" aria-hidden="true" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Output",
  props: ["url"],
  methods: {
    copyToClipboard() {
      const output = document.querySelector(".hidden-input");
      output.select();
      document.execCommand("copy");
    }
  }
};
</script>


<style lang="scss" scoped>
.url-output {
  font-family: "ProximaNova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif;
  min-height: 2rem;
  margin-top: 2.5rem;

  &__text {
    font-weight: bold;
    font-size: 1.25rem;
  }

  &__url {
    display: block;
    margin-top: 1.25rem;
    font-size: 2rem;
  }

  &__copy-button {
    margin-left: 1rem;
    padding: 0.25em;
  }

  .flex {
    width: 40rem;
    margin: auto;
    justify-content: center;
    align-items: baseline;
  }
}

.hidden-input {
  position: absolute;
  pointer-events: none;
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>