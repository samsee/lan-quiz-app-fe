<template>
  <div>
    <h2 class="text-h3 mb-6">{{ question.text }}</h2>
    <v-btn-toggle v-model="selected" mandatory>
      <v-btn value="true" x-large>True</v-btn>
      <v-btn value="false" x-large>False</v-btn>
    </v-btn-toggle>
    <v-btn @click="submitAnswer" class="mt-4" x-large>Submit</v-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['question']);
const emit = defineEmits(['answer']);

const selected = ref(null);

const submitAnswer = () => {
  emit('answer', selected.value === 'true');
};
</script>