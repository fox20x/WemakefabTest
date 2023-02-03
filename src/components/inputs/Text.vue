<template>
  <div class="input-wrapper">
    <label class="label">{{ label }}</label>
    <input type="text" class="input" v-model="component_value" />
    <i class="icon close" @click="clear"></i>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, default: "Label" },
    value: { type: String, default: "" },
  },
  data() {
    return {
      component_value: this.value,
    };
  },
  watch: {
    component_value() {
      this.$emit("input", this.component_value);
    },
  },
  methods: {
    clear() {
      this.component_value = "";
    },
  },
};
</script>

<style></style>
