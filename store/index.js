export const state = () => ({
  bookerOpen: false,
})

export const getters = {
  bookerOpen(state) {
    return state.bookerOpen
  },
}

export const mutations = {
  toggleBooker(state) {
    state.bookerOpen = !state.bookerOpen
  },
}
