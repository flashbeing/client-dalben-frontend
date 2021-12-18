<template>
  <Icon
    name="logo"
    class="logo"
    :class="{ 'inverted-colorscheme': invertedColorscheme }"
  />
</template>

<script>
export default {
  props: {
    invertedColorscheme: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
.logo {
  @apply relative mt-6 mb-12 h-12;

  fill: theme(colors.white) !important;
  z-index: 2;

  &.inverted-colorscheme {
    fill: theme(colors.orange) !important;
  }
}

@media only screen and (max-width: 980px) {
  .logo {
    @apply h-10;
  }
}
</style>
