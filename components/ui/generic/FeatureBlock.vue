<template>
  <div class="feature-block">
    <div v-if="title" class="title">
      <div class="line"></div>
      <h3>{{ title }}</h3>
    </div>
    <div v-if="text || bulletPoints" class="text">
      {{ text || '' }}
      <ul v-if="bulletPoints">
        <li v-for="point in bulletPoints" :key="point">
          {{ point }}
        </li>
      </ul>
    </div>
    <div v-if="metrics" class="metrics">
      <div v-for="metric in metrics" :key="metric.id" class="metric">
        <div class="value">{{ metric.value }}</div>
        <div class="desc">
          {{ metric.desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: null,
    },
    text: {
      type: String,
      required: false,
      default: null,
    },
    bulletPoints: {
      type: Array,
      required: false,
      default: null,
    },
    metrics: {
      type: Array,
      required: false,
      default: null,
    },
  },
}
</script>

<style lang="postcss" scoped>
.feature-block {
  max-width: 400px;

  & .title {
    & .line {
      @apply inline-block mr-3 align-top bg-orange mt-2;

      width: 25px;
      height: 8px;
    }

    & h3 {
      @apply inline-block text-lg text-black uppercase font-black;
    }
  }

  & .text {
    @apply text-base;
  }

  & .metrics {
    & .metric {
      @apply flex flex-row mt-3;

      & .value {
        @apply text-2xl font-black text-orange mr-2;
      }

      & .desc {
        @apply text-base text-black uppercase pt-1;
      }
    }
  }
}

/* @media only screen and (max-width: 980px) {
  
} */
</style>
