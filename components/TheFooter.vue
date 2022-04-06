<template>
  <footer class="TheFooter">
    <div class="TheFooter__container">
      <div class="TheFooter__section">
        <img src="~/assets/logo.png" alt="Dope" />
        <img src="~/assets/poruka.svg" alt="Cuts and shaves" />
      </div>
      <div class="TheFooter__section">
        <h1 class="TheFooter__section-title">Hours</h1>
        <div class="TheFooter__working">
          <p class="TheFooter__working-days">Mon - Fri:</p>
          <p class="TheFooter__working-time TheFooter__working-time--num">
            10 - 20
          </p>
        </div>
        <div class="TheFooter__working">
          <p class="TheFooter__working-days">Saturday:</p>
          <p class="TheFooter__working-time TheFooter__working-time--num">
            11 - 17
          </p>
        </div>
        <div class="TheFooter__working">
          <p class="TheFooter__working-days">Sunday:</p>
          <p class="TheFooter__working-time">closed</p>
        </div>
      </div>
      <div class="TheFooter__section">
        <h1 class="TheFooter__section-title">Contact us</h1>
        <div class="TheFooter__contacts">
          <a href="tel:+38162776911" class="TheFooter__phone hvr hvr-grow"
            >+381 62 77 69 11</a
          >
          <a
            href="https://www.instagram.com/dope.belgrade"
            target="_blank"
            rel="noopener noreferrer"
            class="TheFooter__instagram hvr hvr-grow"
          >
            <img
              class="TheFooter__insta-icon"
              src="~/assets/icons/ikonica_instagram.png"
              alt="Insta"
            />
            <p class="TheFooter__insta-text">dope.belgrade</p>
          </a>
        </div>
      </div>
      <div class="TheFooter__section">
        <h1 class="TheFooter__section-title">Location</h1>
        <a
          class="TheFooter__location hvr hvr-grow"
          href="https://www.google.com/maps/place/Dope+cuts+and+shaves+Belgrade/@44.811741,20.4669395,15.43z/data=!4m9!1m2!2m1!1sdope+barber!3m5!1s0x475a7bc946769ab3:0xf7ba46d1af24114f!8m2!3d44.8139363!4d20.4739259!15sCgtkb3BlIGJhcmJlciIDiAEBkgELYmFyYmVyX3Nob3A"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p class="TheFooter__city">Belgrade, Serbia</p>
          <div class="TheFooter__address">
            <img
              class="TheFooter__address-icon"
              src="~/assets/icons/ikonica_lokacija.png"
              alt="Lokacija"
            />
            <p class="TheeFooter__adress-text">Dalmatinska 19</p>
          </div></a
        >
      </div>
    </div>

    <div class="TheFooter__chaos">
      <div
        class="TheFooter__chaos-button-container"
        @click="openNewTab('https://www.instagram.com/dope.belgrade')"
      >
        <button
          class="TheFooter__chaos-button TheFooter__chaos-button--insta"
          v-html="insta"
        />
      </div>
      <div
        class="TheFooter__chaos-button-container"
        @click="openNewTab('https://www.youtube.com/')"
      >
        <button
          class="TheFooter__chaos-button TheFooter__chaos-button--yt"
          v-html="yt"
        />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',

  data() {
    const insta = require(`~/assets/icons/logo-instagram.svg?raw`)
    const yt = require(`~/assets/icons/logo-youtube.svg?raw`)
    return { insta, yt }
  },

  methods: {
    openNewTab(url) {
      window.open(url, '_blank')
    },
  },
}
</script>

<style lang="scss">
.TheFooter {
  background: var(--black);
  padding: 5rem 0 0;

  &__chaos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.1rem;

    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  //#E3E3E3

  &__chaos-button-container {
    width: 100%;
    &:hover {
      cursor: pointer;

      button {
        fill: var(--orange);
        transform: rotateX(180deg);
      }
    }
  }

  &__chaos-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #d9d9d9;
    height: 10rem;

    fill: #333333;

    transition: 0.3s all;
    transform-style: preserve-3d;
    backface-visibility: hidden;

    &::before {
      color: var(--orange);
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: rotateX(-180deg);
      backface-visibility: hidden;
      transform-style: preserve-3d;
      transition: 0.3s all;
      background: #d9d9d9;
      font-size: 1.6rem;
      text-transform: uppercase;
    }

    &--yt {
      &::before {
        content: 'YouTube';
      }
    }

    &--insta {
      &::before {
        content: 'Instagram';
      }
    }

    svg {
      width: 4rem;
      height: auto;
    }
  }

  &__container {
    width: 100%;
    max-width: 70vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media only screen and (min-width: 768px) {
      grid-gap: 5rem;
    }

    margin-bottom: 5rem;

    // border-top: 1px solid var(--orange);

    @media only screen and (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  &__section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 768px) {
      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }
    }
  }

  &__section-title {
    text-align: center;
    font-size: 4rem;
    line-height: 4.8rem;
    margin-bottom: 3rem;

    @media only screen and (max-width: 768px) {
      margin-bottom: 1rem;
    }
  }

  &__working {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  &__working-days,
  &__working-time {
    color: var(--white-3);
    font-size: 1.95rem;
    line-height: 2.6rem;
  }

  &__working-time {
    text-align: center;
    min-width: 6.4rem;

    &--num {
      font-family: monospace;
    }
  }

  &__contacts,
  &__location {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  &__phone {
    font-size: 1.95rem;
    line-height: 2.6rem;
    font-weight: 500;
    text-decoration: none;
    color: var(--white-2);
    display: block;

    @media only screen and (max-width: 768px) {
      margin-bottom: 0.5rem;
    }

    &:hover {
      color: var(--white);
    }
  }

  &__instagram {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: var(--white-2);
    font-weight: 500;
    font-size: 1.95rem;
    line-height: 2.6rem;
    s &:hover {
      color: var(--white);
    }
  }

  &__insta-icon,
  &__address-icon {
    width: 2.6rem;
    height: 2.6rem;
    margin-right: 1rem;
  }

  &__location {
    text-decoration: none;
  }

  &__city {
    color: var(--white-3);
    font-size: 1.95rem;
    line-height: 2.6rem;

    @media only screen and (max-width: 768px) {
      margin-bottom: 0.5rem;
    }
  }

  &__address {
    display: flex;
    align-items: center;
    color: var(--white-2);
    font-weight: 500;
    font-size: 1.95rem;
    line-height: 2.6rem;
  }
}
</style>
