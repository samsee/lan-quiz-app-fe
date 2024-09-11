<template>
  <div>
    <h1>Quiz</h1>
  </div>

  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <template v-if="showResult">
        <QuizResult :question="currentQuestion" :result="lastAnswer" />
        <v-btn @click="nextQuestion" class="mt-4" x-large>Next Question</v-btn>
      </template>
      <component
        v-else
        :is="currentQuestionComponent"
        :question="currentQuestion"
        @answer="handleAnswer"
      />
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";
import TrueFalseQuestion from "./TrueFalseQuestion.vue";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion.vue";
import TextInputQuestion from "./TextInputQuestion.vue";
import QuizResult from "./QuizResult.vue";

const questions = ref([
  { type: "trueFalse", text: "Is Paris the capital of France?", correct: true },
  {
    type: "multipleChoice",
    text: "Which of these is a fruit?",
    options: ["Apple", "Carrot", "Potato", "Broccoli"],
    correct: [0],
  },
  {
    type: "textInput",
    text: "What is the largest planet in our solar system?",
    correct: "Jupiter",
  },
]);

const currentQuestionIndex = ref(0);
const showResult = ref(false);
const lastAnswer = ref(null);

const currentQuestion = computed(() => questions.value[currentQuestionIndex.value]);

const currentQuestionComponent = computed(() => {
  switch (currentQuestion.value.type) {
    case "trueFalse":
      return TrueFalseQuestion;
    case "multipleChoice":
      return MultipleChoiceQuestion;
    case "textInput":
      return TextInputQuestion;
    default:
      return null;
  }
});

const handleAnswer = (answer) => {
  console.log("Answer received:", answer);
  lastAnswer.value = answer;
  showResult.value = true;
};

const nextQuestion = () => {
  showResult.value = false;
  currentQuestionIndex.value++;
  if (currentQuestionIndex.value >= questions.value.length) {
    // Quiz finished, handle end of quiz
    console.log("Quiz finished");
    // You might want to navigate to a final results page or reset the quiz
  }
};
</script>
