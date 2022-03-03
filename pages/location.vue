<template>
  <div class="LocationPage">
    <google-map />
  </div>
</template>

<script>
export default {
  name: 'LocationPage',

  head: {
    title: 'Dope Page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Our barber shop is located in the center of town. In Knez Milos Street near Botanical Garden.',
      },
    ],
  },
}
</script>

<style lang="scss">
.LocationPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 8rem;
}
</style>
