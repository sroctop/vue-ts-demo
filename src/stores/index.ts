import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './action';
// import getters from './getters';


Vue.use(Vuex);

const state = {
  anthor: 'roc',
  link: 'https://www.qzroc.com',
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  // getters,
});
