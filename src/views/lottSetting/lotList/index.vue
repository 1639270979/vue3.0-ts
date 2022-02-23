<template>
  <div>
    <search></search>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Search from "./search/index.vue";

export default defineComponent({
  components: {
    Search,
  },
  setup() {},
});
</script>

<style lang="scss" scoped></style>
