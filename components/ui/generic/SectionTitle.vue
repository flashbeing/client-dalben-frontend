<template>
  <div class="section-title" :class="{ header: displayAsHeader }">
    <h2>{{ title }}<span v-if="includePoint" class="text-orange">.</span></h2>
    <i18n
      v-if="subtitleKeyPath"
      :path="subtitleKeyPath"
      tag="p"
      class="title-desc"
    >
      <template #garpezHashtag>
        <span class="text-black">#Garpez</span>
      </template>
    </i18n>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitleKeyPath: {
      type: String,
      default: '',
    },
    displayAsHeader: {
      type: Boolean,
      default: false,
    },
    includePoint: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
.section-title {
  & h2 {
    @apply text-7xl text-primary font-bold mb-3;
  }

  &.header {
    @apply pt-12 pb-16;
  }
}

@media only screen and (max-width: 980px) {
  .section-title {
    & h2 {
      @apply text-4xl;
    }

    &.header {
      @apply pt-2 pb-0;
    }
  }
}
</style>
