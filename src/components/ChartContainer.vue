<template lang="pug">
div(ref="container")
  slot(
    :width="width"
    :height="height"
    :chart_X_Width="chart_X_Width"
    :chart_Y_Height="chart_Y_Height"
  )
  div(
    v-if="isVisible"
    class="tooltip"
    :style="getPosition"
  )
    div
      | ownkowenfkjnwijnweifjnwekjfn
</template>

<script>
import tooltip from "../mixins/tooltip";
import measure from "../mixins/measure";

export default {
  name: "VContainer",
  props: ["padding"],
  mixins: [tooltip, measure],
  data() {
    return {
      height: 460,
    }
  },
  computed: {
    chart_X_Width() {
      return Math.max((this.width - this.padding * 2), 0);
    },
    chart_Y_Height() {
      return this.height - this.padding * 2;
    },
  }
};
</script>

<style lang="scss" scoped>
.tooltip {
  background-color: #fafbfd;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  display: block;
  padding: 10px 20px;
  pointer-events: none;
  position: absolute;
  z-index: 10;
}
</style>
