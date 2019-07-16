<template functional lang="pug">
section(class="section")
  slot
</template>

<style lang="scss" scoped>
.section {
  background-color: #ffffff;
  border-radius: 5px;
  border: solid 1px #dadada;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  padding: 30px;
  margin: 30px auto;
  max-width: 1200px;
  width: 100%;
}
</style>
