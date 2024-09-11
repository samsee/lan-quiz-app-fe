<template>
  <div>
    <h2 class="text-h3 mb-6">{{ question.text }}</h2>
    <v-checkbox
      v-for="(option, index) in question.options"
      :key="index"
      v-model="selected"
      :label="option"
      :value="index"
    ></v-checkbox>
    <v-btn @click="submitAnswer" class="mt-4" x-large>Submit</v-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['question']);
const emit = defineEmits(['answer']);

const selected = ref([]);

const submitAnswer = () => {
  emit('answer', selected.value);
};
</script>