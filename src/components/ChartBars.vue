<template lang="pug">
g(class="bars")
  g(
    v-for="chart in collection"
    :transform="`translate(${padding}, ${height - padding})`"
  )
    rect(
      v-for="bar in calculateDataPosition(chart)"
      :height="bar.y"
      :stroke-width="0"
      :width="barWidth"
      class="bar"
      :x="bar.x"
      :y="-bar.y"
    )
</template>

<script>
export default {
  name: "VChartBars",
  props: ["height", "padding", "collection", "xWidth", "yHeight", "xValues", "yValues"],
  computed: {
    barWidth() {
      // let a = this.xWidth / (this.xValues.length - 1);
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
    calculateDataPosition(chart) {
      return chart.data.map((obj, index) => {
        const indexY = this.yValues.findIndex((value) => value === obj.y);

        const x = this.xposition(index);
        const y = this.yposition(indexY);


        return { x, y };
      });
    }
  }
};
</script>
