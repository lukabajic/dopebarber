<template>
  <div class="TeamMembers">
    <div class="TeamMembers__container">
      <div class="TeamMembers__pictures">
        <div class="TeamMembers__picture">
          <img src="~/assets/test fotka-2.png" />
        </div>
        <div class="TeamMembers__picture">
          <img src="~/assets/test fotka-2.png" />
        </div>
      </div>

      <div class="TeamMembers__price">
        <img src="~/assets/cenovnik.png" alt="Cenovnik" />
      </div>

      <base-button routerLink to="/appointments">Book Now</base-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamMembers',
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
    height: 30rem;
    width: 20rem;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    background: radial-gradient(var(--blue-radial));

    @media only screen and (max-width: 768px) {
      margin-bottom: 3rem;
    }

    @media only screen and (min-width: 768px) {
      &:not(:last-child) {
        margin-right: 7.5rem;
      }
    }

    img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: auto;
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
