<template>
  <header
    :class="{
      'opened-menu': isMenuOpened,
      'top-scrolled': scrolledTop,
    }"
  >
    <div class="top-ct">
      <div class="center">
        <div class="menu-bg"></div>

        <nuxt-link
          :to="localePath('/')"
          class="logo-link"
          @click.native="hideMenu"
        >
          <div class="logo clickable">
            <Icon name="logo" />
          </div>
        </nuxt-link>

        <div class="menu-bt" @click="toggleMenu">
          <div class="bg"></div>
          <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="menu">
      <div class="center">
        <nav>
          <ul>
            <li
              v-for="(item, index) of menuItems"
              :key="index"
              class="clickable"
            >
              <nuxt-link :to="localePath(item.path)" @click.native="hideMenu">
                {{ item.name }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpened: false,
      scrolledTop: true,
    }
  },

  computed: {
    menuItems() {
      return [
        {
          name: this.$t('header.whyDalBen'),
          path: '/#intro',
        },
        {
          name: this.$t('header.personalShopper'),
          path: '/#personal-shopper',
        },
        {
          name: this.$t('header.offers'),
          path: '/#offers',
        },
        {
          name: this.$t('header.ourStores'),
          path: '/#stores',
        },
      ]
    },
  },

  mounted() {
    this.registerScrollEventListeners()
  },

  methods: {
    toggleMenu() {
      this.isMenuOpened = !this.isMenuOpened
    },

    hideMenu() {
      this.isMenuOpened = false
    },

    registerScrollEventListeners() {
      window.addEventListener('scroll', () => this.checkWindowScrollStatus())
    },

    checkWindowScrollStatus() {
      if (window.scrollY > window.innerHeight * 0.47) {
        this.scrolledTop = false
      } else {
        this.scrolledTop = true
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
header {
  @apply relative z-20;

  & .top-ct {
    @apply fixed top-0 w-full;

    & .center {
      @apply relative;

      & .logo-link {
        @apply inline-block;

        & .logo {
          @apply relative pt-6;

          & svg {
            @apply h-12;
          }
        }
      }

      & .menu-bg,
      & .menu-bt {
        @apply absolute;

        top: 25px;
        right: 0;
        width: 40px;
        height: 40px;
        transition: transform 0.5s ease, background 0.5s ease;
        border-radius: 50%;
      }

      & .menu-bg {
        @apply bg-primary;

        transform: scale(0, 0);
      }

      & .cta {
        @apply absolute text-white uppercase border-b border-white font-bold transition duration-200;

        top: 35px;
        right: 65px;
        line-height: 20px;
      }

      & .menu-bt {
        @apply cursor-pointer;

        & .bg {
          @apply absolute top-0 left-0 w-full h-full bg-primary transition duration-200;

          border-radius: 50%;
        }

        & > .lines {
          @apply relative w-full h-full;

          & > .line {
            @apply bg-white;

            height: 2px;
            margin: 0 12px 4px 12px;
            border-radius: 1px;
            transform-origin: 50%;
            transition: transform 0.5s ease, opacity 0.5s ease,
              background 0.5s ease;

            &:first-child {
              margin-top: 13px;
            }

            &:last-child {
              margin-bottom: 0;
              margin-left: 17px;
            }
          }
        }

        &:hover {
          & .bg {
            transform: scale(0.9);
          }
        }
      }
    }
  }

  & .menu {
    @apply fixed right-0 left-0 bottom-0 opacity-0 transition-opacity duration-500 z-30 pointer-events-none overflow-y-auto;

    top: 130px;

    & .center {
      @apply relative h-full;

      & nav {
        @apply absolute top-0 right-0 bottom-0 left-0;

        & ul {
          & > li {
            @apply text-white text-7xl font-light pb-8 opacity-50 transition duration-500 font-bold;

            &:hover {
              @apply opacity-100;
            }
          }
        }
      }

      & .socials {
        @apply mt-8;
      }
    }
  }

  &.inverted-colorscheme {
    & .top-ct {
      & .center {
        /* & .menu-bg {
          @apply bg-primary;
        } */

        & .cta {
          @apply text-primary border-primary;
        }

        /* & .menu-bt {
          & .bg {
            @apply bg-primary;
          }

          & .lines {
            & > .line {
              @apply bg-white;
            }
          }
        } */
      }
    }
  }

  &.opened-menu {
    & .top-ct {
      & .center {
        & .menu-bg {
          transform: scale(100, 100);
        }

        & .cta {
          @apply opacity-0;
        }

        & .menu-bt {
          @apply bg-white;

          & .bg {
            @apply opacity-0;
          }

          & > .lines {
            & > .line {
              @apply bg-black;

              &:first-child {
                transform: rotate(45deg) translateY(4px) translateX(4px);
              }

              &:nth-child(2) {
                transform: rotate(-45deg);
              }

              &:last-child {
                opacity: 0;
              }
            }
          }
        }
      }
    }

    & .menu {
      @apply opacity-100 pointer-events-auto;
    }

    &.inverted-colorscheme {
      & .top-ct {
        & .center {
          /* & .logo-link {
            & .logo {
              & svg {
                fill: theme(colors.white) !important;
              }
            }
          } */

          & .menu-bt {
            @apply bg-white;

            & > .lines {
              & > .line {
                @apply bg-primary;
              }
            }
          }
        }
      }

      & .menu {
        & .center {
          & ul {
            & > li {
              @apply text-white;
            }
          }

          & .contacts {
            & p {
              @apply text-white;
            }
          }
        }
      }
    }
  }

  &:not(.opened-menu) {
    &:not(.top-scrolled) {
      & .top-ct {
        & .center {
          & .cta {
            @apply opacity-0 pointer-events-none;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 980px) {
  header {
    & .top-ct {
      & .center {
        & .logo-link {
          & .logo {
            & svg {
              @apply h-10;
            }
          }
        }

        & .cta {
          @apply hidden;
        }
      }
    }

    & .menu {
      top: 150px;

      & .center {
        & nav {
          @apply relative block w-full;

          & ul {
            & > li {
              @apply text-3xl pb-4 opacity-100;

              &:hover {
                transform: none;
              }
            }
          }
        }

        & .contacts {
          @apply relative w-auto top-0 mt-12;

          & p {
            &.location-info {
              @apply hidden;
            }
          }

          & .socials {
            @apply mt-16;
          }
        }
      }
    }
  }
}
</style>
