<template>
  <div>
    <div>
      <svg-icon iconClass="system"></svg-icon>
    </div>
    <div class="  title">广州市市本级人才公寓摇号系统</div>
    <div>
      <el-button type="primary" @click="toLottsetting">点击进入摇号></el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const toLottsetting = () => {
      router.push({ path: "/lotseting" });
    };
    return {
      toLottsetting,
    };
  },
});
</script>

<style lang="scss" scoped>
.title {
  font-size: 32px;
}
</style>
