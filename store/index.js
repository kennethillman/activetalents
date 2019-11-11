export const state = () => ({
  menu: false,
  menuNavigate: false,
  pageData: null,
  api: null
})

export const mutations = {
  setMenu(state, res) {
    state.menu = res
  },
  setMenuNavigate(state, res) {
    state.menuNavigate = res
  },
  setPageData(state, res) {
    state.pageData = res
  },
  setApi(state, res) {
    state.api = res
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { req }) {

  },
  setMenu(vuexContext, res) {
    vuexContext.commit('setMenu', res)
  },
  setMenuNavigate(vuexContext, res) {
    vuexContext.commit('setMenuNavigate', res)
  },
  setPageData(vuexContext, res) {
    vuexContext.commit('setPageData', res)
  },
  setApi(vuexContext, res) {
    vuexContext.commit('setApi', res)
  }
}

export const getters = {
  getMenu(state) {
    return state.menu
  },
  getMenuNavigate(state) {
    return state.menuNavigate
  },
  getPageData(state) {
    return state.pageData
  },
  getApi(state) {
    return state.api
  }
}
