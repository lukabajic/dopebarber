<template>
  <div class="GoogleMap">
    <div class="GoogleMap__container">
      <a
        href="https://www.google.com/maps/place/Dope+cuts+and+shaves+Belgrade/@44.811741,20.4669395,15.43z/data=!4m9!1m2!2m1!1sdope+barber!3m5!1s0x475a7bc946769ab3:0xf7ba46d1af24114f!8m2!3d44.8139363!4d20.4739259!15sCgtkb3BlIGJhcmJlciIDiAEBkgELYmFyYmVyX3Nob3A"
        class="GoogleMap__link hvr hvr-grow"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          v-if="$device.isDesktop"
          src="~/assets/map-desktop.png"
          alt="Google maps" />
        <img v-else src="~/assets/map-mobile.jpg" alt="Google maps"
      /></a>

      <base-button routerLink to="/appointments">Book Now</base-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
}
</script>

<style lang="scss">
.GoogleMap {
  &__link {
    text-decoration: none;
    display: block;
    border-radius: 0.4rem;
    overflow: hidden;
    margin-bottom: 3rem;

    &:hover {
      filter: blur(0.1rem);
    }

    img {
      display: block;
    }
  }

  &__container {
    width: 100%;
    max-width: 70vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
