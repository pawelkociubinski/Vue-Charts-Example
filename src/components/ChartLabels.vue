<template lang="pug">
g(class="AxisLabels")
  text(
    class="text"
    alignment-baseline="central"
    text-anchor="middle"
    :transform="`translate(6, ${height / 2}) rotate(-90)`"
  )
    | {{ yAxisLabel }}
  text(
    class="text"
    alignment-baseline="central"
    text-anchor="middle"
    :transform="`translate(${width / 2}, ${height - 7})`"
  )
    | {{ xAxisLabel }}
</template>

<script>
export default {
  name: "VChartLabels",
  props: ["height", "width", "yAxisLabel", "xAxisLabel"],
};
</script>

<style lang="scss" scoped>
.text {
  fill: #333333;
  font-size: 12px;
}
</style>