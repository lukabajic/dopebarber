<template>
  <div class="BaseBackdrop" @click="handleClick" />
</template>

<script>
export default {
  name: 'BaseBackdrop',

  emits: ['backdrop-clicked'],

  methods: {
    handleClick() {
      this.$emit('backdrop-clicked')
    },
  },
}
</script>

<style lang="scss">
.BaseBackdrop {
  position: fixed;
  z-index: 1040;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  animation: background 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
  cursor: pointer;

  @keyframes background {
    from {
      background: transparent;
    }
    to {
      background: rgba(0, 0, 0, 0.8);
    }
  }
}
</style>
