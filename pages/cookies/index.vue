<template>
  <main>
    <div class="center">
      <SectionTitle :title="$t('footer.cookiePolicy')" class="title" />
      <section class="policy">
        <p>
          Questo sito web utilizza i cookie. Utilizziamo i cookie per
          personalizzare contenuti ed annunci, per fornire funzionalità dei
          social media e per analizzare il nostro traffico. Condividiamo inoltre
          informazioni sul modo in cui utilizza il nostro sito con i nostri
          partner che si occupano di analisi dei dati web, pubblicità e social
          media, i quali potrebbero combinarle con altre informazioni che ha
          fornito loro o che hanno raccolto dal suo utilizzo dei loro servizi.
        </p>

        <p>
          I cookie sono piccoli file di testo che possono essere utilizzati dai
          siti web per rendere più efficiente l'esperienza per l'utente.
        </p>

        <p>
          La legge afferma che possiamo memorizzare i cookie sul suo dispositivo
          se sono strettamente necessari per il funzionamento di questo sito.
          Per tutti gli altri tipi di cookie abbiamo bisogno del suo permesso.
        </p>

        <p>
          Questo sito utilizza unicamente cookie tecnici per la memorizzazione
          della lingua dell'utente.
        </p>
      </section>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
.title {
  @apply mt-32;
}

.policy {
  @apply mt-10 mb-24;

  & p {
    margin-bottom: 10px;
  }
}
</style>
