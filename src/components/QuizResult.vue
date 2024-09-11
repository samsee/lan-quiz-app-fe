<template>
  <div class="quiz-result">
    <h2 class="text-h4 mb-4">Question Result</h2>
    <p class="text-h6 mb-6">{{ question.text }}</p>

    <div v-if="question.type === 'trueFalse'">
      <p>Selected answer: {{ result ? 'True' : 'False' }}</p>
      <v-chart class="chart" :option="trueFalseChartOption" />
    </div>

    <div v-else-if="question.type === 'multipleChoice'">
      <p>Selected answers: {{ result.join(', ') }}</p>
      <v-chart class="chart" :option="multipleChoiceChartOption" />
    </div>

    <div v-else-if="question.type === 'textInput'">
      <h3 class="text-h6 mb-2">Answers:</h3>
      <v-list>
        <v-list-item v-for="(answer, index) in result" :key="index">
          {{ answer }}
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import VChart from 'vue-echarts';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent]);

const props = defineProps({
  question: {
    type: Object,
    required: true
  },
  result: {
    type: [Boolean, Array, String],
    required: true
  }
});

const trueFalseChartOption = computed(() => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  xAxis: {
    type: 'value',
    max: 100
  },
  yAxis: {
    type: 'category',
    data: ['Result']
  },
  series: [
    {
      name: 'True',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [props.result ? 100 : 0]
    },
    {
      name: 'False',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [props.result ? 0 : 100]
    }
  ]
}));

const multipleChoiceChartOption = computed(() => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  xAxis: {
    type: 'category',
    data: props.question.options
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: props.question.options.map((_, index) => 
        props.result.includes(index) ? 1 : 0
      ),
      type: 'bar'
    }
  ]
}));
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>