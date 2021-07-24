<template>
	<b-container class="bv-example-row">
		<div class="loader">
			<b-spinner variant="success" v-if="loading"></b-spinner>
		</div>
		<div v-if="!loading">
			<b-jumbotron>
				<template #header>Quiz</template>

				<template #lead>
					<div class="number">Question: {{ index + 1 }}</div>
					<div class="count">Correct: {{ correct }}/{{ total }}</div>
				</template>

				<hr class="my-4" />

				<b-row class="question-box">
					<b-col sm="6">
						<div>
							<p v-if="questions[index]" v-html="questions[index].question"></p>

							<b-list-group>
								<b-list-group-item
									v-for="(answer, index) in answers"
									:key="index"
									@click="selectedAnswer(index)"
									:class="selectClass(index)"
									:disabled="currectIndex !== null"
									v-html="answer"
								>
								</b-list-group-item>
							</b-list-group>

							<b-button
								variant="primary"
								class="submit"
								href="#"
								@click.prevent="submitAnswer"
								:disabled="
									selectedIndex === null ||
										currectIndex !== null ||
										(currectIndex !== null && questions.length - 1 == index)
								"
								>Submit</b-button
							>
							<b-button
								variant="success"
								href="#"
								@click.prevent="nextQuestion"
								:disabled="
									questions.length < index ||
										currectIndex === null ||
										questions.length - 1 == index
								"
								>Next</b-button
							>
						</div>
					</b-col>
				</b-row>
			</b-jumbotron>
		</div>
	</b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import _ from "lodash";

export default {
	name: "QuestionBox",
	data() {
		return {
			index: 0,
			correct: 0,
			total: 0,
			selectedIndex: null,
			currectIndex: null,
			loading: true,
		};
	},
	watch: {},
	methods: {
		...mapActions(["fetchQuestions"]),
		nextQuestion() {
			if (this.questions.length - 1 > this.index) {
				this.index = parseInt(this.index) + 1;
			}
			this.selectedIndex = null;
			this.currectIndex = null;
		},
		selectedAnswer(index) {
			this.selectedIndex = index;
		},
		submitAnswer() {
			const correct = this.answers.indexOf(
				this.questions[this.index].correct_answer
			);
			this.currectIndex = correct;
			this.total++;
			if (this.currectIndex === this.selectedIndex) {
				this.correct++;
			}
		},
		selectClass(index) {
			if (this.currectIndex === null && this.selectedIndex === index) {
				return "selected";
			} else if (this.currectIndex !== null && index === this.currectIndex) {
				return "correct";
			} else if (this.selectedIndex === index && index !== this.currectIndex) {
				return "incorrect";
			} else {
				return "";
			}
		},
	},
	computed: {
		...mapGetters(["questions"]),
		answers: function() {
			let answers = this.questions[this.index].incorrect_answers;
			answers.push(this.questions[this.index].correct_answer);
			answers = _.shuffle(answers);
			return answers;
		},
	},
	mounted() {
		this.fetchQuestions();
		this.loading = false;
	},
};
</script>

<style scoped>
.lead {
	display: flex;
	justify-content: space-between;
}
hr {
	margin-top: 0px !important;
}
.list-group {
	margin-bottom: 1rem;
}
.list-group-item:hover {
	background: #eee;
	cursor: pointer;
}
/* .list-group-item.disabled,
.list-group-item:disabled {
	background: unset;
} */
.selected,
.selected:hover {
	background: lightblue;
}
.correct,
.correct:hover {
	background: lightgreen !important;
}
.incorrect,
.incorrect:hover {
	background: lightcoral !important;
}
.submit {
	margin-right: 10px;
}
.question-box {
	justify-content: center;
}
.loader {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
