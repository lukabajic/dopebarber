<template>
  <div class="TeamPage">
    <team-members />
  </div>
</template>

<script>
export default {
  name: 'TeamPage',

  head: {
    title: 'Dope Team',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Checkout our team. We currently have 2 employees. Both outstanding barbers with lots of experience.',
      },
    ],
  },
}
</script>

<style lang="scss">
.TeamPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 8rem;
}
</style>
