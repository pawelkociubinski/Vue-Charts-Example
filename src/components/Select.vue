<template lang="pug">
div(
	ref="select"
  class="container"
)
  div(
    @click="handleSwitch"
    :class="['select', isOpen && 'isOpen', disabled && 'disabled']"
  )
    div
      | {{value && value.label }}
    v-icon(
      v-if="!disabled"
      :class="['icon', isOpen && 'isOpen']"
      icon="DART_DOWN"
      height="10"
      width="10"
    )
  ul(
    v-if="isOpen"
    :class="['options', isOpen && 'isOpen']"
  )
    li(
      v-if="searchable"
      class="element"
    )
      v-input(
        :placeholder="placeholder"
        v-model="searchedPhrase"
      )
    li(
      v-for="option in filteredOptions"
      :class="['element', 'option', isSelected(option) && 'selected']"
      @click="handleClick(option)"
    )
      | {{ option.label }}
</template>

<script>
import { isEqual } from "lodash";
import VIcon from "./Icon";
import VInput from "./Input";

export default {
  name: "Select",
  props: {
    searchable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "Search phrase..."
    },
    value: Object,
    options: Array,
  },
  components: {
    VIcon,
    VInput
  },
  data() {
    return {
      searchedPhrase: "",
      isOpen: false
    };
  },
  created() {
    document.addEventListener("click", this.handleOffClick);
  },
  destroyed() {
    document.removeEventListener("click", this.handleOffClick);
  },
  computed: {
    filteredOptions() {
      return this.options.filter ((option) =>
        option.label.toLowerCase().includes(this.searchedPhrase.toLowerCase())
      );
    }
  },
  methods: {
    isSelected(option) {
      return this.value && this.value.key === option.key;
    },
    handleOffClick(event) {
      if (this.$refs.select.contains(event.target)) return;

      this.isOpen = false;
    },
    handleSwitch() {
      if (this.disabled) return;

      this.isOpen = !this.isOpen;
    },
    handleClick(option) {
      this.$emit("input", !isEqual(option, this.value) ? option : null);

      this.isOpen = false;
    },
    handleInput(event) {
      this.searchedPhrase = event.target.value;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
}
.select {
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #b7b7b7;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  height: 54px;
  padding: 0 40px 0 15px;
  position: relative;

  & .isOpen {
    border-bottom: 1px solid transparent;
    border-radius: 5px 5px 0 0;
  }
}

.disabled {
  cursor: inherit;
}

.icon {
  position: absolute;
  right: 15px;
  transition: all 0.15s linear;
}

.icon.isOpen {
  transform: rotate(180deg);
}

.options {
  background-color: #ffffff;
  border-radius: 0 0 5px 5px;
  border: 1px solid #b7b7b7;
  left: 0;
  list-style: none;
  margin: -1px 0 0 0;
  max-height: 300px;
  overflow-y: scroll;
  padding: 0;
  position: absolute;
  right: 0;
  z-index: 2;

  &::-webkit-scrollbar {
    display: none;
  }

  & .isOpen {
    border-top: none;
  }
}

.element {
  padding: 15px;
}

.option {
  cursor: pointer;
  font-size: 16px;

  &:hover:not(.selected) {
    background-color: #f5f5f5;
  }
}

.selected {
  cursor: inherit;
  background-color: rgba(221, 187, 123, 0.7);
}
</style>
