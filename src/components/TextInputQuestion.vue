<template>
  <div>
    <h2 class="text-h3 mb-6">{{ question.text }}</h2>
    <v-text-field v-model="answer" label="Your answer" outlined></v-text-field>
    <v-btn @click="submitAnswer" class="mt-4" x-large>Submit</v-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['question']);
const emit = defineEmits(['answer']);

const answer = ref('');

const submitAnswer = () => {
  emit('answer', answer.value);
};
</script>