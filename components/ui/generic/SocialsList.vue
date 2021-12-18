<template>
  <div
    class="socials"
    :class="{
      'inverted-colors': invertedColorscheme,
      'responsive-centered': responsiveCentered,
    }"
  >
    <div v-for="social in socials" :key="social.id" class="social clickable">
      <a :href="social.url" :class="'icon ' + social.id" target="_blank">
        <Icon :name="social.id + '-ico'" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    invertedColorscheme: {
      type: Boolean,
      default: false,
    },

    responsiveCentered: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      socials: [
        {
          id: 'facebook',
          url: 'https://www.facebook.com/DalBenAbbigliamento/',
        },
        {
          id: 'instagram',
          url: 'https://www.instagram.com/dalben_fashion/',
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
.socials {
  & .social {
    @apply relative inline-block mr-6;

    & svg {
      height: 20px;
      fill: theme(colors.primary) !important;
    }

    & .icon {
      @apply inline-block w-full h-full bg-contain bg-center bg-no-repeat;
    }
  }

  &.inverted-colors {
    & .social {
      & svg {
        fill: theme(colors.white) !important;
      }
    }
  }
}

@media only screen and (max-width: 980px) {
  .socials {
    &.responsive-centered {
      & .social {
        @apply mx-3;
      }
    }
  }
}
</style>
