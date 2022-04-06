<template>
  <div id="gallery" class="TheGallery">
    <div class="TheGallery__container">
      <h2 class="TheGallery__header2">Follow our journey</h2>

      <div v-if="images" class="TheGallery__gallery">
        <div
          v-for="(img, i) of images"
          :key="img.id + i"
          class="TheGallery__img"
          @click="selectImage(img)"
        >
          <img v-if="img.src" :src="img.src" :alt="img.altText" />
        </div>
      </div>

      <template v-if="selectedImage">
        <base-backdrop @backdrop-clicked="closeModal" />

        <div v-if="selectedImage" class="TheGallery__modal" @click.stop>
          <img
            v-if="selectedImage.src"
            class="TheGallery__modal-img"
            :src="selectedImage.src"
            :alt="selectedImage.altText"
          />
        </div>

        <button class="TheGallery__modal-prev" @click.stop="prevImage">
          <img
            v-if="$device.isDesktop"
            src="~/assets/icons/taster-strelica-levo.png"
          />
        </button>
        <button class="TheGallery__modal-next" @click.stop="nextImage">
          <img
            v-if="$device.isDesktop"
            src="~/assets/icons/taster-strelica-desno.png"
          /></button
      ></template>

      <base-button :on-click="toggleBooker" class="TheGallery__book-now"
        >Book Now</base-button
      >
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'TheGallery',

  props: {
    images: {
      type: Array,
      required: false,
      default: null,
    },
  },

  data() {
    return {
      selectedImage: null,
    }
  },

  methods: {
    ...mapMutations(['toggleBooker']),

    selectImage(img) {
      this.selectedImage = img
    },

    closeModal() {
      this.selectedImage = null
    },

    nextImage() {
      const index = this.images.findIndex((i) => i.id === this.selectedImage.id)
      const lastIndex = this.images.length - 1
      const nextIndex = index === lastIndex ? 0 : index + 1
      this.selectedImage = this.images[nextIndex]
    },

    prevImage() {
      const index = this.images.findIndex((i) => i.id === this.selectedImage.id)
      const lastIndex = this.images.length - 1
      const prevIndex = index === 0 ? lastIndex : index - 1
      this.selectedImage = this.images[prevIndex]
    },
  },
}
</script>

<style lang="scss">
.TheGallery {
  &__book-now {
    margin: 0 auto;
  }

  &__container {
    width: 100%;
    max-width: 70vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__header2 {
    font-size: 5.2rem;
    line-height: 6.24rem;
    margin-bottom: 3rem;
    color: var(--white);
    text-align: center;
  }

  &__gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 100%;
    margin-bottom: 3rem;
    grid-gap: 2rem;

    @media only screen and (max-width: 992px) {
      grid-gap: 1.5rem;
    }

    @media only screen and (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }
  }

  &__img {
    img {
      display: block;
      width: 100%;
      height: auto;
      transition: all 0.2s;

      &:hover {
        cursor: pointer;
        transform: scale(1.05);
        filter: blur(0.1rem);
      }
    }
  }

  &__modal {
    position: fixed;
    z-index: 1040;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: 90vh;
    width: 90vh;

    @media only screen and (max-width: 992px) {
      height: 100vw;
      width: 100vw;
    }
  }

  &__modal-img {
    width: 100%;
    height: 100%;

    animation: fade-in 0.5s both;

    @keyframes fade-in {
      from {
        opacity: 0;
        transform: scale(0.5);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  &__modal-next,
  &__modal-prev {
    background: transparent;
    outline: none;
    position: fixed;
    top: 50%;
    z-index: 1050;
    transform: perspective(1px) translateY(-50%);

    box-shadow: 0 0 1px rgb(0 0 0 / 0%);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    width: 5vw;

    &:hover {
      cursor: pointer;
      -webkit-transform: translateY(-50%) scale(1.1);
      transform: translateY(-50%) scale(1.1);
    }

    @media only screen and (max-width: 992px) {
      width: 20vw;
      height: 100vh;
    }
  }

  &__modal-prev {
    left: 2.5vw;

    @media only screen and (max-width: 992px) {
      left: 0;
    }
  }

  &__modal-next {
    right: 2.5vw;

    @media only screen and (max-width: 992px) {
      right: 0;
    }
  }
}
</style>
