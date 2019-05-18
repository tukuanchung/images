import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth'
import images from './modules/images'
//tell vue use vuex
Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		auth,
		images
	}
});