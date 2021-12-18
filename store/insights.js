const state = () => ({
  currentInsightNeedsInvertedColorscheme: false,
})

const getters = {
  needsInvertedColorScheme: (state) => {
    return state.currentInsightNeedsInvertedColorscheme
  },
}

const mutations = {
  setColorSchemePreference(state, needsInvertedColorScheme) {
    state.currentInsightNeedsInvertedColorscheme = needsInvertedColorScheme
  },
}

export default {
  namespaced: true,
  getters,
  state,
  mutations,
}
