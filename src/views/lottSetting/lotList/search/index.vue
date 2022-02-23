<template>
  <div class="main">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="Approved by">
        <el-input
          v-model="formInline.user"
          placeholder="Approved by"
        ></el-input>
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="formInline.region" placeholder="Activity zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Query</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { reactive } from "vue";

export default defineComponent({
  setup() {
    const formInline = reactive({
      user: "",
      region: "",
    });

    const onSubmit = () => {
      console.log("submit!");
    };
    return {
      formInline,
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
.main {
  padding: 20px;
  background: #f2f2f2;
  height: 100vh;
  width: 100%;
}
</style>
