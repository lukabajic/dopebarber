<template>
  <div class="AppointmentsPage">
    <div class="AppointmentsPage__announcement">
      <h1 class="AppointmentsPage__announcement-header">Comming Soon!</h1>
      <p class="AppointmentsPage__announcement-text">
        We're currently working on making it possible for our users book your
        appointment online. In the meantime please use our booking number
        <a href="tel:+38162776911" class="hvr hvr-grow">(+38162776911)</a>
        instead.
      </p>
      <base-button anchor href="tel:+38162776911">Call Now</base-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppointmentsPage',

  head: {
    title: 'Dope Appointments',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          "A new way of booking your appointment at Dope. Book online and we'll be wating for you",
      },
    ],
  },
}
</script>

<style lang="scss">
.AppointmentsPage {
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__announcement {
    max-width: 48rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 1.5rem;
  }

  &__announcement-header {
    text-align: center;
    color: var(--white);
    font-size: 4rem;
    line-height: 4.8rem;
    margin-bottom: 3rem;
  }

  &__announcement-text {
    text-align: center;
    font-size: 1.7rem;
    line-height: 2.1rem;
    margin-bottom: 2rem;
    color: var(--white-2);

    a {
      text-decoration: none;
      color: var(--orange);
      font-weight: 500;
    }
  }
}
</style>
