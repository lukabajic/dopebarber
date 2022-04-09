<template>
  <div class="IndexPage">
    <section class="IndexPage__banner">
      <div class="IndexPage__video">
        <video
          v-if="!$device.isDesktop && mobileVideo"
          playsinline
          autoplay
          muted
          preload
        >
          <source :src="mobileVideo" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video v-else-if="desktopVideo" playsinline autoplay muted preload>
          <source :src="desktopVideo" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <base-backdrop v-if="bookerOpen" @backdrop-clicked="toggleBooker" />
      <div v-if="bookerOpen" class="YClients">
        <button class="YClients__close" @click="toggleBooker">
          <img src="~/assets/icons/close-outline.svg" alt="Close" />
        </button>
        <iframe
          src="https://b726872.yclients.com/company/685420"
          frameborder="0"
        ></iframe>
      </div>

      <div class="IndexPage__cover">
        <img
          v-if="showLogos"
          class="IndexPage__cover-logo"
          :src="logo"
          alt="Dope"
        />
        <img
          v-if="showLogos"
          class="IndexPage__cover-msg"
          :src="message"
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

    <section v-if="about" class="IndexPage__about">
      <about-dope :about="about" />
    </section>

    <div class="IndexPage__team-start">
      <img src="~/assets/maska izmedju stranica_gornji deo_crna boja.png" />
    </div>

    <section class="IndexPage__team">
      <team-members :team="team" :prices="prices" />
    </section>

    <div class="IndexPage__team-end">
      <img src="~/assets/maska izmedju stranica_donji deo_crna boja.png" />
    </div>

    <section class="IndexPage__gallery">
      <the-gallery :images="gallery" />
    </section>

    <!-- <section class="IndexPage__google-map">
      <google-map />
    </section> -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

const galleryUrl =
  'https://cdn.contentful.com/spaces/npi12tbf8444/environments/master/entries/?access_token=LCYho2OPVgr6g70JUUWNkAK5-fAoYZyV3FBmteFUIrI&content_type=galleryImage'

const aboutUrl =
  'https://cdn.contentful.com/spaces/npi12tbf8444/environments/master/entries/?access_token=LCYho2OPVgr6g70JUUWNkAK5-fAoYZyV3FBmteFUIrI&content_type=aboutDope'

const teamUrl =
  'https://cdn.contentful.com/spaces/npi12tbf8444/environments/master/entries/?access_token=LCYho2OPVgr6g70JUUWNkAK5-fAoYZyV3FBmteFUIrI&content_type=team'

const asset = (id) =>
  `https://cdn.contentful.com/spaces/npi12tbf8444/environments/master/assets/${id}?access_token=LCYho2OPVgr6g70JUUWNkAK5-fAoYZyV3FBmteFUIrI&`

const ASSETS_IDS = [
  '2koAy4dQWMX2BK6uxNvzOd',
  '4gNmNzAhBDVcnhJrwk18pm',
  '4qt1wCP1cF8AcPApIWhqKu',
  '2jPm2HVMmRqJNmAyzUWaI1',
  '5QbS1zjwLn6mSWmG7Pm8oj',
]

export default {
  name: 'IndexPage',

  async asyncData({ $axios }) {
    const responses = await Promise.all(
      ASSETS_IDS.map((i) => $axios.get(asset(i)))
    )

    const [message, logo, mobileVideo, desktopVideo, prices] = responses.map(
      ({ data }) => {
        if (!data) return null
        if (!data.fields) return null
        return `https:${data.fields.file.url}`
      }
    )

    const { data: galleryData } = await $axios.get(galleryUrl)

    const gallery = galleryData.items.map((i) => {
      const assetId = i.fields.image.sys.id
      const asset = galleryData.includes.Asset.find((a) => a.sys.id === assetId)
      return {
        id: assetId,
        src: asset ? `https:${asset.fields.file.url}` : null,
      }
    })

    const { data: teamData } = await $axios.get(teamUrl)

    const team = teamData.items.map((i) => {
      const assetId = i.fields.photo.sys.id
      const asset = teamData.includes.Asset.find((a) => a.sys.id === assetId)
      return {
        name: i.fields.name,
        photo: asset ? `https:${asset.fields.file.url}` : null,
      }
    })

    const { data: aboutData } = await $axios.get(aboutUrl)
    const { title, subtitle, content } = aboutData.items[0].fields
    const workingTime = aboutData.includes.Asset[0].fields.file.url

    const readyContent = content.content.map((c) => c.content[0].value)

    const about = {
      title,
      subtitle,
      content: readyContent,
      workingTime: `https:${workingTime}`,
    }

    return {
      message,
      logo,
      mobileVideo,
      desktopVideo,
      about,
      team,
      prices,
      gallery,
    }
  },

  data() {
    return {
      playing: false,
      ended: false,

      showVideoMessage: false,
    }
  },

  head: {
    title: 'Dope Cuts and Shaves',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'The dopest barber shop in town. Come and get your haircut and shaves. Remember to keep it fresh',
      },
    ],
  },

  computed: {
    ...mapGetters(['bookerOpen']),

    showPlayAgainButton() {
      if (this.$device.isDesktop) return false
      return this.showVideoMessage && !this.playing && !this.ended
    },

    showLogos() {
      if (this.$device.isDesktop && !this.desktopVideo) return true
      if (!this.$device.isDesktop && !this.mobileVideo) return true
      return this.playing || this.ended
    },
  },

  mounted() {
    const video = document.querySelector('video')
    setTimeout(() => (this.showVideoMessage = true), 3000)

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
    ...mapMutations(['toggleBooker']),

    playVideo() {
      if (this.playing) return
      const video = document.querySelector('video')
      video && video.play()
    },
  },
}
</script>

<style lang="scss">
.YClients {
  position: fixed;
  z-index: 1040;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  max-width: 54rem;
  background: #ffffff;

  &__close {
    position: absolute;
    z-index: 1050;
    top: 0.9rem;
    right: 1rem;

    background: #ffffff;
    outline: none;
    border: none;

    height: 4rem;
    width: 5.6rem;

    display: flex;
    justify-content: flex-end;

    &:hover {
      cursor: pointer;
    }

    img {
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  iframe {
    width: 100%;
    height: 100%;
  }
}

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
    background: #3443aa;

    img {
      display: block;
    }
  }

  &__gallery {
    background: #3443aa;
    // background: radial-gradient(var(--blue-radial));
    padding: 8rem 0;
  }

  &__google-map {
    background: var(--black);
    padding: 8rem 0 5rem;
  }

  &__cover-logo {
    animation: fade-in 1s both;
    animation-delay: 4s;
  }

  &__cover-msg {
    animation: fade-in 1s both;
    animation-delay: 5s;
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
