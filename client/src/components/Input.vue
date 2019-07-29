<template>
  <div>
    <form @submit="onSubmit">
      <input
        class="input"
        :class="{'input--has-error': !!error}"
        v-bind:placeholder="placeholder"
        @focus="placeholder = ''"
        @blur="placeholder = 'Enter a url to shorten...'"
        v-model="input"
      />
      <div class="input__error">{{error}}</div>
      <button
        class="input__submit-btn"
        :class="{'input__submit-btn--loading': loading}"
        type="submit"
        :disabled="input.trim().length === 0 || loading"
      >
        <span class="btn__text">Minify</span>
        <i class="loader-dots">
          <span class="loader-dots__dot"></span>
          <span class="loader-dots__dot"></span>
          <span class="loader-dots__dot"></span>
        </i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["error", "loading"],
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


<style lang="scss" scoped>
.input {
  box-sizing: border-box;
  font-family: "ProximaNova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif;
  background: white;
  line-height: 1.45;
  font-size: 1.25rem;
  border: 0;
  border-bottom: solid 1px #e2e3e9;
  padding: 0.25em;
  max-width: 40rem;
  width: 100%;
  margin-top: 5rem;
  &::placeholder {
    color: #8f94a7;
  }

  &--has-error {
    border-bottom: solid 1px #ff0b00;
  }

  &__error {
    color: #ff0b00;
    font-weight: bold;
    margin-top: 1rem;
    font-size: 1.25rem;
    min-height: 1.25rem;
    line-height: 1;
  }

  &__submit-btn {
    margin: 3.25rem auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    width: 40rem;
    border-radius: 0.5em;
    background: rgba(2, 35, 255, 1);
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: #000;
      border-radius: 0.5em;
      opacity: 0;
      z-index: 1;
      transition: opacity 0.2s ease-out;
    }
  }
  &__submit-btn:hover::before {
    opacity: 0.2;
  }

  &__submit-btn .loader-dots {
    display: none;
  }

  &__submit-btn--loading .loader-dots {
    display: block;
  }

  &__submit-btn--loading > span {
    display: none;
  }
}

.btn__text {
  z-index: 2;
  position: relative;
}

.button > * {
  vertical-align: middle;
}
.button[disabled],
.button.disabled {
  cursor: not-allowed;
  background: #b6b4b6 !important;
  color: #fff !important;
}
.button .loader-dots {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.loader-dots {
  white-space: nowrap;
  display: inline-block;
  font-size: 0;
  line-height: 0;
  height: 12px;
  margin-left: 12px;
  &__dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background: white;
    margin: 0 5px;
    opacity: 0.5;
    transform: scale(0.6);
    animation-name: pulse;
    animation-duration: 0.4s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    transform-origin: left bottom;
  }
  &__dot:nth-child(1) {
    animation-delay: 0.1333s;
  }
  &__dot:nth-child(2) {
    animation-delay: 0.2666s;
  }
  &__dot:nth-child(3) {
    animation-delay: 0.4s;
  }
}

@keyframes pulse {
  0% {
    opacity: 0.5;
    transform: scale(0.6);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
