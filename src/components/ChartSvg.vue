<template lang="pug">
svg(
  ref="chart"
  :width="width"
  :height="height"
  :viewBox="`0 0 ${width} ${height}`"
  xmlns="http://www.w3.org/2000/svg"
)
  slot
</template>

<script>
export default {
  name: "VChartSvg",
  props: ["width", "height"],
};
</script>
