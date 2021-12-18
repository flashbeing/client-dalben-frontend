<template>
  <div class="button clickable" :class="{ disabled, loading }">
    <div class="text">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
.button {
  @apply relative inline-block cursor-pointer bg-primary rounded-xl;

  & .text {
    @apply relative text-sm text-white py-3 px-5 font-bold uppercase;
  }

  &.disabled,
  &.loading {
    @apply opacity-50 pointer-events-none;
  }
}
</style>
