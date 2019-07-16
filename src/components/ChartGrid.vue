<template lang="pug">
g(class="grid")
  g(
    class="y axis"
    :transform="`translate(${padding}, ${padding})`"
  )
    template(v-for="(line, index) in xValues")
      line(
        class="line"
        :x1="xposition(index)"
        :x2="xposition(index)"
        :y1="0"
        :y2="chart_Y_Height"
        stroke-width="1"
      )
      text(
        alignment-baseline="central"
        font-size="12"
        text-anchor="middle"
        :x="xposition(index)"
        :y="chart_Y_Height + 15"
      )
        | {{ line }}
  g(
    class="x axis"
    :transform="`translate(${padding}, ${height - padding})`"
  )
    template(v-for="(line, index) in yValues")
      line(
        class="line"
        x1="0"
        :x2="chart_X_Width"
        :y1="yposition(index)"
        :y2="yposition(index)"
        stroke-width="1"
      )
      text(
        alignment-baseline="central"
        font-size="12"
        text-anchor="end"
        x="-15"
        :y="yposition(index)"
      )
        | {{ line }}
</template>

<script>
export default {
  name: "VChartGrid",
  props: ["padding", "height", "chart_X_Width", "chart_Y_Height", "xValues", "yValues", "type"],
  computed: {
    rowHeight() {
      return this.chart_Y_Height / (this.yValues.length - 1);
    },
    entity_X_Width() {
      return this.chart_X_Width / (this.xValues.length - 1);
    },
  },
  methods: {
    yposition(index) {
      return -Math.abs(index * this.rowHeight);
    },
    xposition(index) {
      return index * this.entity_X_Width;
    }
  }
};
</script>

<style lang="scss" scoped>
.line {
  stroke: #cecece;
}
</style>
