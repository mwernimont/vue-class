import { createStore } from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

import counterModule from './modules/counter/index';

const store = createStore({
  modules: {
    counter: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
});

export default store;
