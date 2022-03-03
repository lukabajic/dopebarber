<template>
  <div id="gallery" class="TheGallery">
    <div class="TheGallery__container">
      <h2 class="TheGallery__header2">Follow our journey</h2>

      <div class="TheGallery__gallery">
        <div
          v-for="(img, i) of images"
          :key="i"
          class="TheGallery__item"
          @click="selectImage(img)"
        >
          <div class="TheGallery__img">
            <img v-if="img.src" :src="img.src" :alt="img.altText" />
          </div>
        </div>
      </div>

      <template v-if="selectedImage">
        <base-backdrop @backdrop-clicked="closeModal" />

        <div v-if="selectedImage" class="TheGallery__modal" @click.stop>
          <img
            class="TheGallery__modal-img"
            v-if="selectedImage.src"
            :src="selectedImage.src"
            :alt="selectedImage.altText"
          />
        </div>

        <button @click.stop="closeModal" class="TheGallery__modal-close">
          <img src="~/assets/icons/taster-izlaz.png" />
        </button>

        <button @click.stop="prevImage" class="TheGallery__modal-prev">
          <img src="~/assets/icons/taster-strelica-levo.png" />
        </button>
        <button @click.stop="nextImage" class="TheGallery__modal-next">
          <img src="~/assets/icons/taster-strelica-desno.png" /></button
      ></template>

      <base-button routerLink to="/appointments" class="TheGallery__book-now"
        >Book Now</base-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheGallery',

  data() {
    return {
      selectedImage: null,

      images: [
        {
          id: 1,
          src: require('~/assets/images/dope4.jpeg'),
        },
        {
          id: 2,
          src: require('~/assets/images/dope5.jpeg'),
        },
        {
          id: 3,
          src: require('~/assets/images/dope6.jpeg'),
        },
        {
          id: 4,
          src: require('~/assets/images/dope7.jpeg'),
        },
        {
          id: 5,
          src: require('~/assets/images/dope8.jpeg'),
        },
        {
          id: 6,
          src: require('~/assets/images/dope9.jpeg'),
        },
        {
          id: 7,
          src: require('~/assets/images/dope10.jpeg'),
        },
        {
          id: 8,
          src: require('~/assets/images/dope11.jpeg'),
        },
      ],
    }
  },

  methods: {
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
    font-size: 3rem;
    line-height: 3.6rem;
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

    @media only screen and (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }
  }

  &__item {
    position: relative;
    padding-top: 100%;
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      max-width: 48rem;
      height: auto;
      transition: all 0.2s;

      @media only screen and (max-width: 768px) {
        max-width: 24rem;
      }

      &:hover {
        cursor: pointer;
        transform: translate(-50%, -50%) scale(1.05);
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

    height: 100%;
    max-height: 100vh;
    width: max-content;
    max-width: 80vw;

    @media only screen and (max-width: 768px) {
      max-width: 100vw;
    }

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__modal-img {
    height: auto;
    max-height: 100%;

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

  &__modal-close {
    background: transparent;
    outline: none;
    position: fixed;
    top: 2.5vw;
    right: 2.5vw;
    width: 5vw;
    z-index: 1050;
    transform: perspective(1px) translateZ(0);

    box-shadow: 0 0 1px rgb(0 0 0 / 0%);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    @media only screen and (max-width: 768px) {
      width: 10vw;
    }

    &:hover {
      cursor: pointer;
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
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

    @media only screen and (max-width: 768px) {
      opacity: 0.9;
      width: 10vw;
    }

    &:hover {
      cursor: pointer;
      -webkit-transform: translateY(-50%) scale(1.1);
      transform: translateY(-50%) scale(1.1);
    }
  }

  &__modal-prev {
    left: 2.5vw;
  }

  &__modal-next {
    right: 2.5vw;
  }
}
</style>
