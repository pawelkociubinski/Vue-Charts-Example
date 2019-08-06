<template lang="pug">
g(class="bars")
  g(
    v-for="chart in collection"
    :transform="`translate(${padding}, ${height - padding})`"
  )
    rect(
      v-for="bar in calculateDataPosition(chart.data)"
      :height="bar.y"
      :stroke-width="0"
      :style="`fill: ${chart.color}; opacity: 0.5;`"
      :width="barWidth"
      :x="bar.x"
      :y="-bar.y"
      class="bar"
    )
</template>

<script>
export default {
  name: "VChartBars",
  props: ["height", "padding", "collection", "xWidth", "yHeight", "xValues", "yValues"],
  computed: {
    barWidth() {
      return this.xWidth / (this.xValues.length - 1)
    },
  },
  methods: {
    negate(value) {
      return -Math.abs(value);
    },
    xposition(index) {
      return index * (this.xWidth / (this.xValues.length - 1));
    },
    yposition(index) {
      return index * (this.yHeight / (this.yValues.length - 1));
    },
    calculateDataPosition(data) {
      return data.map((obj, index) => {
        const indexX = this.xValues.findIndex((value) => value === obj.x[0])
        const indexY = this.yValues.findIndex((value) => value === obj.y);

        const x = this.xposition(indexX);
        const y = this.yposition(indexY);

        return { x, y };
      });
    }
  }
};
</script>
