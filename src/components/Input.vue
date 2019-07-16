<template lang="pug">
input(
  class="input"
  :value="value"
  @input="onInput"
  :placeholder="placeholder"
)
</template>

<script>
export default {
  name: "Input",
  props: ["value", "placeholder"],
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.input {
  background-color: #f8f8f8;
  border-radius: 5px;
  border: 1px solid #b7b7b7;
  outline: none;
  padding: 16px 15px;
  width: 100%;
}
</style>
