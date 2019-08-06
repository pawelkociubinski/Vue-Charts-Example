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
      v-chart-bars(
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
import VChartBars  from "./ChartBars.vue";
import VChartContainer from "./ChartContainer.vue";
import VChartGrid from "./ChartGrid.vue";
import VChartLabels from "./ChartLabels.vue";
import VChartSvg from "./ChartSvg.vue";

import { union } from "lodash";
import { pipe, map, flatten, uniq, sort} from "ramda";

const getXvalues = (chart) => map((obj) => obj.x)(chart.data);
const ascendingValue = (a, b) => a - b;

export default {
  name: "VHistogramChart",
  components: {
    VChartBars,
    VChartContainer,
    VChartGrid,
    VChartLabels,
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
      return pipe(
        map(getXvalues),
        flatten,
        uniq,
        sort(ascendingValue)
      )(this.collection);
    },
    yValues() {
      return [
        0,
        ...new Set(
          union(...this.collection.map((chart) => chart.data.map((obj) => obj.y)))
        )
      ].sort();
    }
  }
};
</script>

<style lang="scss" scoped>
.chartContainer {
  height: 100%;
  position: relative;
  width: 100%;
}
</style>
