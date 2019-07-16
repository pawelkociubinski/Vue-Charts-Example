<template lang="pug">
g(class="lines")
  g(
    v-for="chart in collection"
    class="paths"
    :transform="`translate(${padding}, ${height - padding})`"
  )
    path(
      fill="none"
      :d="CalculatePathPosition(chart)"
      :stroke="chart.color"
      stroke-width="2"
    )
    circle(
      v-for="(circle, index) in calculateDataPosition(chart)"
      :cx="circle.x"
      :cy="circle.y"
      r="5"
      fill="#ffffff"
      :stroke="chart.color"
      stroke-width="2"
    )
</template>

<script>
// @mousemove="onMouseMove($event, circle)"
// @mouseleave="hideTooltip"

export default {
  name: "VChartLines",
  props: ["height", "padding", "collection", "xWidth", "yHeight", "xValues", "yValues"],
  computed: {
    maxY() {
      return Math.max(...this.yValues, 0);
    },
    entity_X_Width() {
      return this.xWidth / this.xValues.length;
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
      return this.negate(index * (this.yHeight / (this.yValues.length - 1)));
    },
    calculateDataPosition(chart) {
      return chart.data.map((obj) => {
        const indexX = this.xValues.findIndex((value) => value === obj.x);
        const indexY = this.yValues.findIndex((value) => value === obj.y);

        const x = this.xposition(indexX);
        const y = this.yposition(indexY);
        return { x, y };
      });
    },
    CalculatePathPosition(chart) {
      const t = this.calculateDataPosition(chart);

      return t.reduce((acc, obj, index) => {
        if (index === 0) {
          return `M ${obj.x},${obj.y}`;
        }
        return `${acc} L ${obj.x} ${obj.y}`;
      }, "");
    }
  }
};
</script>
