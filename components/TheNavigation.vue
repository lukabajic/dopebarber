<template>
  <header
    class="TheNavigation"
    :class="{
      'TheNavigation--desktop': $device.isDesktop,
      'TheNavigation--mobile': !$device.isDesktop,
    }"
  >
    <base-backdrop
      v-if="$device.isMobileOrTablet && isMenuOpen"
      @backdrop-clicked="handleBackdropClicked"
    />

    <nav class="TheNavigation__container">
      <div
        v-if="$device.isMobileOrTablet"
        class="TheNavigation__toggle-icon"
        :class="{ open: isMenuOpen }"
        @click="handleTogglerClicked"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul
        class="TheNavigation__left"
        :class="{
          'TheNavigation__left--desktop': $device.isDesktop,
          'TheNavigation__left--mobile': !$device.isDesktop,
          'TheNavigation__left--open': isMenuOpen,
        }"
      >
        <li
          v-for="(l, i) in computedLinks"
          :key="i"
          class="TheNavigation__item"
        >
          <nuxt-link v-if="l.to" class="hvr hvr-grow" :to="l.to">{{
            l.text
          }}</nuxt-link>
          <a v-if="l.href" class="hvr hvr-grow" :href="l.href">{{ l.text }}</a>
        </li>
      </ul>

      <div class="TheNavigation__right">
        <div class="TheNavigation__icons" v-if="$device.isDesktop">
          <a
            class="TheNavigation__icon hvr hvr-grow"
            href="https://www.instagram.com/dope.belgrade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="~/assets/icons/ikonica_instagram.png" alt="Insta" />
          </a>

          <a
            class="TheNavigation__icon hvr hvr-grow"
            href="https://www.google.com/maps/place/Dope+cuts+and+shaves+Belgrade/@44.811741,20.4669395,15.43z/data=!4m9!1m2!2m1!1sdope+barber!3m5!1s0x475a7bc946769ab3:0xf7ba46d1af24114f!8m2!3d44.8139363!4d20.4739259!15sCgtkb3BlIGJhcmJlciIDiAEBkgELYmFyYmVyX3Nob3A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="~/assets/icons/ikonica_lokacija.png" alt="Insta" />
          </a>
        </div>

        <base-button
          routerLink
          to="/appointments"
          class-name="TheNavigation__book-now"
          >Book Now</base-button
        >
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheNavigation',

  data() {
    return {
      isMenuOpen: false,

      links: [
        { text: 'Home', to: '/', onlyMoblie: true },
        { text: 'About', href: '#about' },
        { text: 'Gallery', href: '#gallery' },
        { text: 'Book Now', to: '/appointments' },
        { text: 'Contact', href: 'tel:+38162776911' },
      ],
    }
  },

  computed: {
    computedLinks() {
      // if (this.$device.isDesktop) return this.links.filter((l) => !l.onlyMoblie)
      return this.links
    },
  },

  methods: {
    handleTogglerClicked() {
      this.isMenuOpen = !this.isMenuOpen
    },

    handleBackdropClicked() {
      this.isMenuOpen = false
    },
  },
}
</script>

<style lang="scss">
.TheNavigation {
  background: transparent;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  z-index: 1030;

  &--desktop {
    position: fixed;
  }

  &--mobile {
    position: absolute;
  }

  &__container {
    height: 8rem;
    width: 100%;
    max-width: 90vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 992px) {
      max-width: 100%;
      padding: 0 0.8rem;
    }
  }

  &__book-now {
    @media only screen and (max-width: 992px) {
      max-width: 14rem;
      position: absolute;
      top: 1.2rem;
      right: 1.5rem;
      z-index: 1020;
    }

    span {
      @media only screen and (max-width: 992px) {
        font-size: 1.4rem;
        line-height: 1.7rem;
      }
    }
  }

  &__left {
    list-style: none;

    &--desktop {
      display: flex;
      align-items: center;
    }

    &--mobile {
      display: none;
      position: fixed;
      z-index: 1040;
      top: 0;
      left: 0;
      height: 100vh;
      width: 85vw;
      background-color: var(--orange);
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26),
        0 2px 10px 0 rgba(0, 0, 0, 0.16);

      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 10.4rem 2.4rem 2.4rem;
    }

    &--open {
      animation: slide-in-right 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s
        both;
      display: flex;
      flex-direction: column;
    }

    @keyframes slide-in-right {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    }
  }

  &__item {
    @media only screen and (min-width: 992px) {
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }

    a {
      position: relative;
      display: inline-block;

      text-decoration-skip-ink: auto;
      text-decoration: none;

      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

      font-weight: 400;

      &,
      &:link,
      &:visited {
        color: var(--white-2);
      }

      &:hover,
      &:focus,
      &:active {
        color: var(--white);
      }
    }
  }

  &__right {
    display: flex;
    align-items: center;
  }

  &__icons {
    margin-right: 1rem;
  }

  &__icon {
    &:not(:last-child) {
      margin-right: 0.5rem;
    }

    img {
      width: 2.7rem;
      height: 2.7rem;
    }
  }

  &__toggle-icon {
    width: 60px;
    height: 45px;
    position: fixed;
    top: 1.8rem;
    left: 1.2rem;
    z-index: 1060;
    -webkit-transform: rotate(0deg) scale(0.6);
    -moz-transform: rotate(0deg) scale(0.6);
    -o-transform: rotate(0deg) scale(0.6);
    transform: rotate(0deg) scale(0.6);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  &__toggle-icon span {
    display: block;
    position: absolute;
    height: 9px;
    width: 50%;
    background: var(--orange);
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  &__toggle-icon.open span {
    background: var(--white);
  }

  &__toggle-icon span:nth-child(even) {
    left: 50%;
    border-radius: 0 9px 9px 0;
  }

  &__toggle-icon span:nth-child(odd) {
    left: 0px;
    border-radius: 9px 0 0 9px;
  }

  &__toggle-icon span:nth-child(1),
  &__toggle-icon span:nth-child(2) {
    top: 0px;
  }

  &__toggle-icon span:nth-child(3),
  &__toggle-icon span:nth-child(4) {
    top: 18px;
  }

  &__toggle-icon span:nth-child(5),
  &__toggle-icon span:nth-child(6) {
    top: 36px;
  }

  &__toggle-icon.open span:nth-child(1),
  &__toggle-icon.open span:nth-child(6) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &__toggle-icon.open span:nth-child(2),
  &__toggle-icon.open span:nth-child(5) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &__toggle-icon.open span:nth-child(1) {
    left: 5px;
    top: 7px;
  }

  &__toggle-icon.open span:nth-child(2) {
    left: calc(50% - 5px);
    top: 7px;
  }

  &__toggle-icon.open span:nth-child(3) {
    left: -50%;
    opacity: 0;
  }

  &__toggle-icon.open span:nth-child(4) {
    left: 100%;
    opacity: 0;
  }

  &__toggle-icon.open span:nth-child(5) {
    left: 5px;
    top: 29px;
  }

  &__toggle-icon.open span:nth-child(6) {
    left: calc(50% - 5px);
    top: 29px;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
  }
}
</style>
