<template>
  <footer class="footer">
    <span>Made with</span>
    <svg
      height="1rem"
      width="1rem"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -4.831 100 100"
      overflow="visible"
    >
      <path
        d="M98.2 17.305c-2.493-6.252-7.495-11.51-14.416-14.766C77.667-.34 71.076-.686 65.085 1.073 59.096 2.832 53.71 7.626 50 13.168 46.291 7.626 40.905 2.832 34.916 1.073S22.334-.34 16.217 2.539C9.297 5.794 4.295 11.053 1.801 17.305c-2.493 6.252-2.504 13.511.638 20.73C9.161 53.477 49.787 89.719 50 90.338c.213-.619 40.84-36.861 47.561-52.303 3.144-7.22 3.132-14.478.639-20.73z"
      />
    </svg>

    <span>
      by
      <a href="https://jamesbyrne.codes">James Byrne</a>.
    </span>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer {
  margin: 1rem auto;
  grid-column: span 2;

  svg {
    margin: 0 0.25em -0.1em 0.4em;
    fill: rgba(2, 35, 255, 1);
  }

  a {
    position: relative;
    text-decoration: none;
  }

  a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    background: rgba(2, 35, 255, 1);
    transition: all 0.15s ease-out;
    transform-origin: 0 0;
  }

  a:hover {
    &::after {
      transform: scaleX(1);
    }
  }

  a:visited {
    color: inherit;
  }
}
</style>


