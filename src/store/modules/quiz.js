import axios from "axios";

const state = {
	questions: [],
};

const getters = {
	questions: (state) => state.questions,
};

const actions = {
	async fetchQuestions({ commit }) {
		const questions = await axios.get(
			"https://opentdb.com/api.php?amount=10&category=31"
		);

		commit("setQuestions", questions.data.results);
	},
};

const mutations = {
	setQuestions: (state, questions) => (state.questions = questions),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
