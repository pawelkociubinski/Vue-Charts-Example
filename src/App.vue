<template lang="pug">
div(class="container")
  section(class="section")
    v-histogram-chart(
      :collection="histogramChartData"
      xAxisLabel="X"
      yAxisLabel="Y"
    )
  section(class="section")
    v-line-chart(
      :collection="lineChartData"
      xAxisLabel="X"
      yAxisLabel="Y"
    )
</template>

<script>
import VHistogramChart from "./components/HistogramChart.vue";
import VLineChart from "./components/LineChart.vue";

const histogramChartData = [{
  color: "red",
  data: [{
    x: [0, 10],
    y: 4
  }, {
    x: [10, 20],
    y: 2
  }, {
    x: [20, 30],
    y: 1
  }]
}];

const lineChartData = [{
  color: "red",
  data: [{
    x: "A",
    y: 1
  }, {
    x: "B",
    y: 2
  }, {
    x: "C",
    y: 6
  }, {
    x: "D",
    y: 3
  }]
}];

const options = [{
  label: "Histogram Chart",
  key: "histogram-chart"
}, {
  label: "Line Chart",
  key: "line-chart"
}];


export default {
  components: {
    VHistogramChart,
    VLineChart,
  },
  data() {
    return {
      histogramChartData: histogramChartData,
      lineChartData: lineChartData,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~sanitize.css';
@import '~sanitize.css/forms.css';
@import '~sanitize.css/typography.css';

.section {
  background-color: #ffffff;
  border-radius: 5px;
  border: solid 1px #dadada;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  padding: 30px;
  margin: 30px auto;
  max-width: 1200px;
  width: 100%;
}
</style>
