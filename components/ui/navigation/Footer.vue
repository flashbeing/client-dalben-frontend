<template>
  <footer>
    <div class="center">
      <div class="info">
        <div class="col first">
          <div class="line"></div>
          <div class="logo">
            <Icon name="logo" />
          </div>
          <p class="top-title">DAL BEN ABBIGLIAMENTO SPA</p>
          <p>
            {{ $t('contacts.legalOffices') }}: Via serafini 5, 31050 Monastier
            di Treviso (TV)
          </p>
          <p>
            {{ $t('contacts.adminOffices') }}: Via Don Orione 1/E, 30035 Mirano
            (VE)
          </p>
          <p>{{ $t('contacts.vat') }}: 02331560264</p>
          <p>SDI: SUBM70N</p>
          <p>
            <a href="mailto:dalbensnc@legalmail.it" class="clickable"
              >dalbensnc@legalmail.it</a
            >
          </p>
          <p>
            {{ $t('contacts.tel') }}:
            <a href="tel:+390415728177" class="clickable">041 57 28 177</a>
          </p>
          <p>{{ $t('contacts.fax') }}: 041 57 28 096</p>
        </div>
        <div class="col">
          <div class="line"></div>
          <p class="location-info">
            <span class="title">{{ $t('contacts.mirano') }}</span
            >{{ $t('contacts.miranoStreet') }}<br />{{
              $t('contacts.miranoLocation')
            }}

            <span class="title sub">{{ $t('contacts.openingHours') }}</span>
            {{ $t('contacts.monSat') }}:<br />- 9:00 - 19:30
            <!-- <span class="spacer"></span>
            {{ $t('contacts.sat') }}:<br />- 9:00 - 19:45 -->
            <span class="spacer"></span>
            {{ $t('contacts.sun') }}:<br />- 9:30 - 19:30<br />

            <span class="title sub">{{
              $t('contacts.contactUs7of7', { from: '9:00-12:30 | 15:30-18:00' })
            }}</span>
            {{ $t('contacts.tel') }}:
            <a href="tel:+390415728177" class="clickable">041 57 28 177</a
            ><br />
            <a href="mailto:info@dalben.it" class="clickable">info@dalben.it</a>
          </p>
        </div>
        <div class="col">
          <div class="line"></div>
          <p class="location-info">
            <span class="title">{{ $t('contacts.pordenone') }}</span
            >{{ $t('contacts.pordenoneStreet') }}<br />{{
              $t('contacts.pordenoneLocation')
            }}

            <span class="title sub">{{ $t('contacts.openingHours') }}</span>
            <span class="spacer"></span>
            {{ $t('contacts.mon') }}:<br />- 15:00 - 19:30
            <span class="spacer"></span>
            {{ $t('contacts.tueFri') }}:<br />- 9:30 - 12:30 | 15:00 - 19:30
            <span class="spacer"></span>
            {{ $t('contacts.satSun') }}:<br />- 9:30 - 13:00 | 15:00 - 19:30<br />

            <span class="title sub">{{
              $t('contacts.contactUs7of7', { from: '9:00-12:30 | 15:30-18:00' })
            }}</span>
            {{ $t('contacts.tel') }}:
            <a href="tel:+390434949118" class="clickable">043 49 49 118</a
            ><br />
            <a href="mailto:info@dalben.it" class="clickable">info@dalben.it</a>
          </p>
        </div>
      </div>
      <div class="policies">
        <div class="socials-ct">
          <SocialsList
            :inverted-colorscheme="true"
            :responsive-centered="true"
          />
        </div>
        <nuxt-link :to="localePath('/cookies')" class="clickable">{{
          $t('footer.cookiePolicy')
        }}</nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
// export default {}
</script>

<style lang="postcss" scoped>
footer {
  @apply text-white bg-primary pt-20;

  & h2 {
    @apply text-6xl font-bold;
  }

  & .action-desc {
    @apply text-6xl;
  }

  & .info {
    @apply mt-16 mb-8;

    font-size: 0;

    & .col {
      @apply inline-block pr-10 align-top;

      width: 25%;
      white-space: nowrap;

      & .logo {
        & svg {
          @apply w-24 h-24 mb-8 -mt-3;
        }
      }

      & .line {
        @apply w-full bg-white mb-3;

        height: 1px;
      }

      & p {
        @apply text-xs;

        white-space: normal;
        color: #eee;

        &.top-title {
          @apply font-black text-white text-lg mb-3;
        }

        & .title {
          @apply block font-black text-white text-base mt-4 mb-0;
        }
      }

      & .spacer {
        @apply block;

        height: 7px;
      }

      &.first {
        width: 50%;

        & p {
          @apply text-sm;
        }

        & .line {
          @apply opacity-0;
        }
      }
    }
  }

  & .policies {
    @apply pb-16 text-base;

    & .socials-ct {
      @apply inline-block mr-2 align-top;
    }

    & a {
      @apply mr-6;

      line-height: 30px;
    }
  }
}

@media only screen and (max-width: 980px) {
  footer {
    @apply pt-10;

    & h2 {
      @apply text-5xl mb-3;
    }

    & .action-desc {
      @apply text-3xl;
    }

    & .info {
      @apply mt-8 mb-0;

      & .col {
        @apply block w-auto py-6 border-t pr-0;

        border-color: #fff;

        & .line {
          @apply hidden !important;
        }

        &.min {
          @apply w-auto;
        }

        &.contacts {
          & p {
            @apply leading-8;
          }
        }

        &.first {
          @apply w-full border-none;
        }

        &:last-child {
          @apply border-b;
        }
      }
    }

    & .policies {
      @apply text-center pb-12;

      & .socials-ct {
        @apply block mr-0 my-4;
      }

      & a {
        @apply mx-3;
      }
    }
  }
}
</style>
