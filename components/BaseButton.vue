<template>
  <nuxt-link v-if="routerLink" :to="to" :class="['BaseButton', className]">
    <img src="~/assets/icons/taster-book now.png" />
    <span>
      <slot />
    </span>
  </nuxt-link>

  <a
    v-else-if="anchor"
    :href="href"
    :target="target"
    :class="['BaseButton', className]"
  >
    <img src="~/assets/icons/taster-book now.png" />
    <span>
      <slot />
    </span>
  </a>

  <button v-else :class="['BaseButton', className]" @click="onClick">
    <img src="~/assets/icons/taster-book now.png" />
    <span>
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    routerLink: {
      type: Boolean,
      default: false,
    },
    anchor: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: '/',
    },
    href: {
      type: String,
      default: '/',
    },
    target: {
      type: String,
      default: '_blank',
    },
    onClick: {
      type: Function,
      default: () => {},
    },
    className: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.BaseButton {
  position: relative;
  outline: none;
  border: none;
  background: transparent;
  text-decoration: none;
  max-width: 18rem;
  width: 100%;
  display: block;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-shadow: 0 0 1px rgb(0 0 0 / 0%);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  &:active,
  &:focus {
    cursor: pointer;
  }

  &:hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: max-content;

    display: block;
    font-size: 1.7rem;
    line-height: 2.1rem;
    font-weight: 600;
    color: var(--black);
  }
}
</style>
