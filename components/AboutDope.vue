<template>
  <div class="AboutDope" id="about">
    <div class="AboutDope__container">
      <h1 class="AboutDope__header1">About Dope</h1>
      <h2 class="AboutDope__header2">Barbershop</h2>
      <p class="AboutDope__paragraph">
        Lorem ipsum dolor sit amet <br />consectetur adipiscing elit
      </p>
      <p class="AboutDope__paragraph">
        sed do eiusmod tempor incididunt ut labore <br />et dolore magna aliqua
      </p>
      <p class="AboutDope__paragraph">Ut enim ad minim veniam</p>
      <p class="AboutDope__paragraph">
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </p>

      <base-button routerLink to="/appointments" class-name="AboutDope__button"
        >Book Now</base-button
      >

      <div class="AboutDope__working" v-if="$device.isDesktop">
        <img src="~/assets/radno_vreme.png" alt="Radno vreme" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutDope',
}
</script>

<style lang="scss">
.AboutDope {
  text-align: center;

  &__container {
    position: relative;
    padding: 0 1.5rem;
    width: 100%;

    @media only screen and (min-width: 992px) {
      max-width: 40vw;
      margin: 0 auto;
    }
  }

  &__header1 {
    font-size: 4rem;
    line-height: 4.8rem;
  }

  &__header2 {
    font-size: 3rem;
    line-height: 3.6rem;
    margin-bottom: 2rem;
  }

  &__paragraph {
    font-size: 1.7rem;
    line-height: 2.1rem;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  &__button {
    margin: 0 auto;
  }

  &__working {
    position: absolute;
    left: 0;
    top: 0;
    transform: translateX(-50%) rotate(-18deg);

    img {
      width: 20rem;
      height: 20rem;
    }
  }
}
</style>
