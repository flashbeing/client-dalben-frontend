<template>
  <div class="feature-title">
    <div class="number">
      <div class="top"></div>
      <div class="val">{{ number }}</div>
    </div>
    <div class="value">
      <h4 class="title">{{ title }}</h4>
      <p v-if="description" class="desc">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>

<style lang="postcss" scoped>
.feature-title {
  @apply flex flex-row;

  & .number {
    @apply mr-5;

    width: 50px;

    & .top {
      @apply bg-orange mb-2;

      height: 8px;
    }

    & .val {
      @apply font-black text-black text-4xl;
    }
  }

  & .value {
    @apply flex-grow items-center;

    & .title {
      @apply text-base uppercase;
    }

    & .desc {
      @apply text-sm;
    }
  }
}

/* @media only screen and (max-width: 980px) {
  
} */
</style>
