<template>
  <main>
    <section id="cover" class="image-head header">
      <div class="cover">
        <div class="image"></div>
        <div class="center">
          <div class="text-col inverted">
            <div>
              <h1 class="title">{{ $t('pg.home.title') }}</h1>
              <h2 class="subtitle">{{ $t('pg.home.titleDesc') }}</h2>
              <a href="/#intro">
                <Button :value="$t('pg.home.discoverMore')" class="button" />
              </a>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
    <section id="intro" class="spaced">
      <div class="center">
        <div class="cols intro">
          <div class="img-ct">
            <div class="img"></div>
          </div>
          <div class="text-ct">
            <h2 class="feat-tit">
              {{ $t('pg.home.discoverNewDressingWorld') }}
            </h2>
            <p class="feat-desc">
              {{ $t('pg.home.discoverNewDressingWorldDesc') }}
            </p>
            <a href="/#stores">
              <Button
                :value="$t('pg.home.discoverRetailPoints')"
                class="feat-bt"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="personal-shopper" class="contrast">
      <div class="center">
        <div class="cols reversed personal-shopper">
          <div class="img-ct">
            <div class="img"></div>
          </div>
          <div class="text-ct">
            <h2 class="feat-tit">{{ $t('pg.home.personalShopper') }}</h2>
            <p class="feat-desc">{{ $t('pg.home.personalShopperDesc') }}</p>
            <a href="/#stores">
              <Button :value="$t('pg.home.bookNow')" class="feat-bt" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="gallery">
      <div class="center">
        <div class="gallery">
          <div
            v-for="index in GALLERY_IMAGES_NUM"
            :key="index"
            :style="{
              backgroundImage: 'url(/image/home/gallery/' + index + '.jpeg)',
            }"
            class="gal-img"
          ></div>
        </div>
      </div>
    </section>
    <section id="offers" class="image-head discount">
      <div class="cover">
        <div class="image"></div>
        <div class="center">
          <div class="text-col">
            <div></div>
            <div>
              <h2 class="title">{{ $t('pg.home.discount') }}</h2>
              <h3 class="subtitle">{{ $t('pg.home.discountDesc') }}</h3>
              <a href="https://goo.gl/maps/Uq4r1j77u6Gn6Zy7A" target="_blank">
                <Button
                  :value="$t('pg.home.seePordenoneStore')"
                  class="button"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="offers" class="image-head ceremony">
      <div class="cover">
        <div class="image"></div>
        <div class="center">
          <div class="text-col inverted">
            <div>
              <h2 class="title">{{ $t('pg.home.ceremony') }}</h2>
              <h3 class="subtitle">{{ $t('pg.home.ceremonyDesc') }}</h3>
              <a href="/#stores">
                <Button :value="$t('pg.home.visitStore')" class="feat-bt" />
              </a>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
    <section id="stores" class="contrast extra-spaced">
      <div class="center">
        <h2 class="section-title">{{ $t('pg.home.ourSalePoints') }}</h2>
        <div class="stores">
          <div class="store mirano">
            <div class="map"></div>
            <h2 class="store-name">{{ $t('contacts.mirano') }}</h2>
            <p class="store-location">
              {{ $t('contacts.miranoStreet') }},
              {{ $t('contacts.miranoLocation') }}
            </p>
            <a href="https://goo.gl/maps/CMGE7LNYpGaPjpYj6" target="_blank">
              <Button
                :value="$t('pg.home.startNavigationTo') + ' →'"
                class="store-bt"
              />
            </a>
          </div>
          <div class="store pordenone">
            <div class="map"></div>
            <h2 class="store-name">{{ $t('contacts.pordenone') }}</h2>
            <p class="store-location">
              {{ $t('contacts.pordenoneStreet') }},
              {{ $t('contacts.pordenoneLocation') }}
            </p>
            <a href="https://goo.gl/maps/Uq4r1j77u6Gn6Zy7A" target="_blank">
              <Button
                :value="$t('pg.home.startNavigationTo') + ' →'"
                class="store-bt"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      GALLERY_IMAGES_NUM: 9,
    }
  },
}
</script>

<style lang="postcss" scoped>
main {
  & .image-head {
    & .cover {
      @apply relative;

      height: 65vw;
      min-height: 700px;

      & .image {
        @apply absolute w-full h-full bg-placeholder bg-cover bg-center;
      }

      & .center {
        @apply relative h-full;

        & .text-col {
          @apply flex h-full items-center pr-10;

          & div {
            @apply flex-1;

            & .title {
              @apply text-5xl font-black text-white;

              text-shadow: 0 0 20px #000;
            }

            & .subtitle {
              @apply text-lg text-white font-medium leading-tight mt-2;

              text-shadow: 0 0 20px #000;
              max-width: 350px;
            }

            & .button {
              @apply mt-4;
            }
          }
        }
      }
    }

    &.header {
      & .cover {
        & .image {
          background-image: url(/image/home/cover.jpeg);
        }
      }
    }

    &.discount {
      & .cover {
        & .image {
          background-image: url(/image/home/discount.jpeg);
        }
      }
    }

    &.ceremony {
      & .cover {
        & .image {
          background-image: url(/image/home/ceremony.jpeg);
        }
      }
    }
  }

  & .cols {
    @apply flex items-center;

    & .img-ct {
      width: 400px;
      flex-shrink: 0;

      & .img {
        @apply w-full bg-placeholder bg-cover bg-center;

        padding-top: 150%;
      }
    }

    & .text-ct {
      @apply flex-grow pl-16;

      & .feat-tit {
        @apply text-3xl font-black;

        max-width: 350px;
      }

      & .feat-desc {
        @apply text-base mt-3;

        max-width: 350px;
      }

      & .feat-bt {
        @apply mt-6;
      }
    }

    &.reversed {
      @apply flex-row-reverse;

      & .text-ct {
        @apply pr-16;
      }
    }

    &.intro {
      & .img-ct {
        & .img {
          background-image: url(/image/home/about.jpeg);
        }
      }
    }

    &.personal-shopper {
      & .img-ct {
        & .img {
          background-image: url(/image/home/personal-assistant.jpeg);
        }
      }
    }
  }

  & .gallery {
    @apply grid grid-cols-3 grid-flow-row gap-3 -mt-8 mb-24;

    & .gal-img {
      @apply bg-placeholder bg-cover bg-center;

      padding-top: 150%;
    }
  }

  & .stores {
    @apply flex space-x-3;

    & .store {
      @apply flex-1;

      & .map {
        @apply bg-placeholder bg-cover bg-center bg-no-repeat;

        padding-top: 60%;
      }

      & .store-name {
        @apply text-xl font-black mt-3;
      }

      & .store-location {
        @apply text-base;
      }

      & .store-bt {
        @apply mt-4;
      }

      &.mirano {
        & .map {
          background-image: url(/image/home/mirano-shop.jpeg);
        }
      }

      &.pordenone {
        & .map {
          background-image: url(/image/home/pordenone-shop.jpeg);
        }
      }
    }
  }

  & .section-title {
    @apply text-4xl text-primary font-black mb-5;
  }

  & .contrast {
    @apply bg-contrast py-14;
  }

  & .spaced {
    @apply py-20;
  }

  & .extra-spaced {
    @apply py-24;
  }
}

@media only screen and (max-width: 980px) {
  main {
    & .image-head {
      & .cover {
        height: 70vh;
      }

      & .center {
        & .text-col {
          @apply flex-col pb-10 pr-0 !important;

          &.inverted {
            @apply flex-col-reverse !important;
          }
        }
      }

      &.discount {
        & .cover {
          & .image {
            background-position: left center;
          }
        }
      }
    }

    & .cols {
      @apply flex-col;

      & .img-ct {
        @apply mb-6 w-full;
      }

      & .text-ct {
        @apply pl-0;
      }

      &.reversed {
        @apply flex-col;

        & .text-ct {
          @apply pr-0;
        }
      }

      &.personal-shopper {
        @apply mb-10;
      }
    }

    & .gallery {
      @apply block;

      & .gal-img {
        @apply mt-4;
      }
    }

    & .stores {
      @apply flex-col space-x-0 space-y-6;

      & .store {
        @apply pt-6;
      }
    }
  }
}
</style>
