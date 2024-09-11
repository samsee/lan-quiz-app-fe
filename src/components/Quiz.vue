<template>
  <div>
    <h1>Quiz</h1>
  </div>

  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <component
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
  // Add logic to check answer, update score, move to next question, etc.
  currentQuestionIndex.value++;
};
</script>
