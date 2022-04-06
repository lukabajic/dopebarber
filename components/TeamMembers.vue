<template>
  <div class="TeamMembers">
    <div class="TeamMembers__container">
      <div v-if="team" class="TeamMembers__pictures">
        <div v-for="(m, i) in team" :key="i" class="TeamMembers__picture">
          <img :src="m.photo" :alt="m.name" />
        </div>
      </div>

      <div v-if="prices" class="TeamMembers__price">
        <img :src="prices" alt="Cenovnik" />
      </div>

      <base-button
        router-link
        to="/appointments"
        class-name="TeamMembers__button"
        >Book Now</base-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamMembers',

  props: {
    team: {
      type: Array,
      required: false,
      default: null,
    },
    prices: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.TeamMembers {
  &__container {
    position: relative;
    padding: 0 1.5rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__pictures {
    display: flex;
    margin-bottom: 3rem;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__picture {
    @media only screen and (max-width: 768px) {
      margin-bottom: 3rem;
    }

    @media only screen and (min-width: 768px) {
      &:not(:last-child) {
        margin-right: 7.5rem;
      }
    }

    img {
      width: 22rem;
      display: block;
    }
  }

  &__price {
    margin-bottom: 3rem;

    img {
      width: 22rem;
      height: 22rem;
    }
  }
}
</style>
