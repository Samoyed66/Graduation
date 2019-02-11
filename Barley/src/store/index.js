import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    changeRandomNum: 0,
    detailTime: '',
    detailPrice: 0,
    seatInfo: [],
    allPrice: 0
  },
  mutations: {
    changeNum (state, val) {
      state.changeRandomNum = val
    },
    toTime (state, timeVal) {
      state.detailTime = timeVal
    },
    toPrice (state, priceVal) {
      state.detailPrice = priceVal
    },
    toSeatInfo (state, seatInfoVal) {
      state.seatInfo = seatInfoVal
    },
    toAllPrice (state, allPriceVal) {
      state.allPrice = allPriceVal
    }
  }
})
export default store
