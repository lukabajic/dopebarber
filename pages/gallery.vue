<template>
  <div class="GalleryPage">
    <the-gallery />
  </div>
</template>

<script>
export default {
  name: 'GalleryPage',

  head: {
    title: 'Dope Gallery',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Have a look at our dopest cuts and shaves. See the smile on our happy customers. Good vibes only.',
      },
    ],
  },
}
</script>

<style lang="scss">
.GalleryPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 8rem;
}
</style>
