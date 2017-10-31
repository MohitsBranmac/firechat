import Vue from 'vue';
import Vuex from 'vuex';

import 'babel-polyfill';

import Firebase from 'firebase';
import 'Firebase/firestore';
import config from '../config';

Firebase.initializeApp (config);

Vue.use (Vuex);
const state = {
  db: Firebase.firestore ()    
};

export default new Vuex.Store ({
  state,
  modules: {
    users,
    conversations
  }
});