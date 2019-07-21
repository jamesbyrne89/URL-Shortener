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
      <button
        class="input__submit-btn"
        :class="{'input__submit-btn--loading': loading}"
        type="submit"
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
  border-radius: 0.5em;
  display: block;
  margin: 2rem auto 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 20rem;
}

.input__submit-btn .loader-dots {
  display: none;
}

.input__submit-btn--loading .loader-dots {
  display: block;
}

.input__submit-btn--loading > span {
  display: none;
}

/* .button {
  border-radius: 4px;
  width: 100%;
  color: #fff;
  max-width: 350px;
  font-size: 16px;
  text-transform: none;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  user-select: none;
  border: 0;
  padding: 14px;
  cursor: pointer;
  transition: all .15s ease-in-out;
  -webkit-appearance: none;
  letter-spacing: pxToEm(0.47);
  text-transform: uppercase;
  position: relative;
} */

.button:hover,
.button:focus {
  text-decoration: none;
  outline: 0;
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
}
.loader-dots__dot {
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
.loader-dots__dot:nth-child(1) {
  animation-delay: 0.1333s;
}
.loader-dots__dot:nth-child(2) {
  animation-delay: 0.2666s;
}
.loader-dots__dot:nth-child(3) {
  animation-delay: 0.4s;
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
