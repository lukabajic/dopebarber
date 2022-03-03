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
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style lang="scss">
.TheFooter {
  background: var(--black);
  padding: 0 0 3rem;

  &__container {
    padding: 3rem 0 0;
    width: 100%;
    max-width: 70vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media only screen and (min-width: 768px) {
      grid-gap: 6.4rem;
    }

    border-top: 1px solid var(--orange);

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
    font-size: 1.5rem;
    line-height: 2rem;
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
    font-size: 1.5rem;
    line-height: 2rem;
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
    font-size: 1.5rem;
    line-height: 2rem;

    &:hover {
      color: var(--white);
    }
  }

  &__insta-icon,
  &__address-icon {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
  }

  &__location {
    text-decoration: none;
  }

  &__city {
    color: var(--white-3);
    font-size: 1.5rem;
    line-height: 2rem;

    @media only screen and (max-width: 768px) {
      margin-bottom: 0.5rem;
    }
  }

  &__address {
    display: flex;
    align-items: center;
    color: var(--white-2);
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;
  }
}
</style>
