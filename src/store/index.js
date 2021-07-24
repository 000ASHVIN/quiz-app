import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import quiz from "./modules/quiz";

const store = new Vuex.Store({
	modules: {
		quiz,
	},
});

export default store;
