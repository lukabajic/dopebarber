<template>
  <div class="IndexPage">
    <section class="IndexPage__banner">
      <div class="IndexPage__video">
        <video v-if="!$device.isDesktop" playsinline autoplay muted preload>
          <source src="~/assets/video/klip-mobilni.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div class="IndexPage__cover">
        <img
          v-if="showLogos"
          class="IndexPage__cover-logo"
          src="~/assets/logo.png"
          alt="Dope"
        />
        <img
          v-if="showLogos"
          class="IndexPage__cover-msg"
          src="~/assets/poruka.svg"
          alt="Cuts and Shaves"
        />
        <p
          v-if="showPlayAgainButton"
          class="IndexPage__click-to-play"
          @click="playVideo"
        >
          Click here to play video.
        </p>
      </div>

      <div class="IndexPage__about-start">
        <img src="~/assets/maska za cover_bela boja.png" />
      </div>
    </section>

    <section class="IndexPage__about">
      <about-dope />
    </section>

    <div class="IndexPage__team-start">
      <img src="~/assets/maska izmedju stranica_gornji deo_crna boja.png" />
    </div>

    <section class="IndexPage__team">
      <team-members />
    </section>

    <div class="IndexPage__team-end">
      <img src="~/assets/maska izmedju stranica_donji deo_crna boja.png" />
    </div>

    <section class="IndexPage__gallery">
      <the-gallery />
    </section>

    <section class="IndexPage__google-map">
      <google-map />
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      playing: false,
      ended: false,
    }
  },

  head: {
    title: 'Dope Cuts and Shaves',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'The dopest barber shop in town. Come and get your haircut and shaves. Rember to keep it fresh',
      },
    ],
  },

  computed: {
    showPlayAgainButton() {
      if (this.$device.isDesktop) return false
      return !this.playing && !this.ended
    },

    showLogos() {
      if (this.$device.isDesktop) return true
      return this.playing || this.ended
    },
  },

  mounted() {
    const video = document.querySelector('video')

    video &&
      video.addEventListener('play', () => {
        this.playing = true
      })

    video &&
      video.addEventListener('ended', () => {
        this.playing = false
        this.ended = true
      })
  },

  methods: {
    playVideo() {
      if (this.playing) return
      const video = document.querySelector('video')
      video && video.play()
    },
  },
}
</script>

<style lang="scss">
.IndexPage {
  min-height: 100vh;

  &__banner {
    position: relative;
    height: 100vh;
    width: 100vw;

    video {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  &__video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    z-index: 0;
  }

  &__cover {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    z-index: 3;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.2);

    img {
      max-width: 90%;

      @media only screen and (min-width: 768px) {
        max-width: 35vw;
      }
    }
  }

  &__about {
    background: var(--white);
    color: var(--black);
    padding: 8rem 0 8rem;
    position: relative;
  }

  &__about-start {
    background: transparent;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 1000;

    img {
      display: block;
    }
  }

  &__click-to-play {
    font-size: 2.1rem;
    line-height: 2.4rem;
    color: rgba(255, 255, 255, 0.9);
  }

  &__team {
    position: relative;
    background: var(--black);
    padding: 8rem 0;
  }

  &__team-start {
    background: white;
    img {
      display: block;
    }
  }

  &__team-end {
    background: var(--blue);
    img {
      display: block;
    }
  }

  &__gallery {
    background: var(--blue);
    // background: radial-gradient(var(--blue-radial));
    padding: 8rem 0;
  }

  &__google-map {
    background: var(--blacsxk);
    padding: 8rem 0 5rem;
  }

  &__cover-logo {
    animation: fade-in 1s both;
    @media only screen and (max-width: 768px) {
      animation-delay: 4s;
    }
  }

  &__cover-msg {
    animation: fade-in 1s both;
    @media only screen and (max-width: 768px) {
      animation-delay: 5s;
    }
  }

  @keyframes fade-in {
    from {
      transform: scale(0.5);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
}
</style>
