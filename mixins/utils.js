export default {
  methods: {
    normalizeTitle(title) {
      if (title) {
        title = title.replace(/\s/g, '-')
        title = title.replace(/[^a-zA-Z-]/g, '')
        title = title.toLowerCase()
      }

      return title
    },

    scrollPageToTop() {
      document.body.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
  },
}
