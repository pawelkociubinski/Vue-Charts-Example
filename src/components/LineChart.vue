<template lang="pug">
v-chart-container(:padding="padding")
  template(v-slot="{width, height, chart_X_Width, chart_Y_Height}")
    v-chart-svg(
      :height="height"
      :width="width"
    )
      v-chart-labels(
        :height="height"
        :width="width"
        :xAxisLabel="xAxisLabel"
        :yAxisLabel="yAxisLabel"
      )
      v-chart-grid(
        :chart_X_Width="chart_X_Width"
        :chart_Y_Height="chart_Y_Height"
        :height="height"
        :padding="padding"
        :xValues="xValues"
        :yValues="yValues"
      )
      v-chart-lines(
        :collection="collection"
        :height="height"
        :padding="padding"
        :width="width"
        :xValues="xValues"
        :xWidth="chart_X_Width"
        :yHeight="chart_Y_Height"
        :yValues="yValues"
      )
</template>

<script>
import VChartContainer from "./ChartContainer.vue";
import VChartGrid from "./ChartGrid.vue";
import VChartLabels from "./ChartLabels.vue";
import VChartLines from "./ChartLines.vue";
import VChartSvg from "./ChartSvg.vue";

import { union, range } from "lodash";


export default {
  name: "VLineChart",
  components: {
    VChartContainer,
    VChartGrid,
    VChartLabels,
    VChartLines,
    VChartSvg,
  },
  props: [
    "collection",
    "yAxisLabel",
    "xAxisLabel"
  ],
  data() {
    return {
      padding: 80,
    }
  },
  computed: {
    xValues() {
      return [
        ...new Set(
          union(...this.collection.map(obj => obj.data.map(value => value.x)))
        )
      ];
    },
    yValues() {
      return [
        ...new Set(
          union(...this.collection.map(obj => obj.data.map(value => value.y)))
        )
      ].sort();
    },
  }
};
</script>
