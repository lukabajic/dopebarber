<template>
  <div id="about" class="AboutDope">
    <div class="AboutDope__container">
      <h1 v-if="title" class="AboutDope__header1">{{ title }}</h1>
      <h2 v-if="subtitle" class="AboutDope__header2">{{ subtitle }}</h2>
      <template v-if="content">
        <p
          v-for="(c, i) in content"
          :key="i"
          class="AboutDope__paragraph"
          v-html="c"
        />
      </template>

      <base-button
        :on-click="toggleBooker"
        class-name="AboutDope__button"
        >Book Now</base-button
      >

      <div v-if="$device.isDesktop && workingTime" class="AboutDope__working">
        <img :src="workingTime" alt="Radno vreme" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'AboutDope',

  props: ['about'],

  computed: {
    title() {
      if (!this.about) return null
      return this.about.title
    },

    subtitle() {
      if (!this.about) return null
      return this.about.subtitle
    },

    content() {
      if (!this.about) return null
      return this.about.content
    },

    workingTime() {
      if (!this.about) return null
      return this.about.workingTime
    },
  },

  methods: {
    ...mapMutations(['toggleBooker']),
  },
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
    font-size: 5.2rem;
    line-height: 6.24rem;
  }

  &__header2 {
    font-size: 3rem;
    line-height: 3.6rem;
    margin-bottom: 2rem;
  }

  &__paragraph {
    font-size: 1.95rem;
    line-height: 2.4rem;

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
    transform: translateX(-50%) translateY(-40%) rotate(-18deg);

    img {
      width: 20rem;
      height: 20rem;
    }
  }
}
</style>
