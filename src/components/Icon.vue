<template lang="pug">
svg(
  :height="height"
  :width="width"
  viewBox="0 0 32 32"
)
  template(v-for="d in paths")
    path(v-bind:d="d")
</template>

<script>
import icons from "../constants/icons";
export default {
  name: "Icon",
  props: {
    icon: String,
    height: {
      type: String,
      default: "32"
    },
    width: {
      type: String,
      default: "32"
    }
  },
  data() {
    return {
      paths: icons[this.icon]
    }
  }
}
</script>
