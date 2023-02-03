<template>
  <div class="select-wrapper open">
    <label class="label">{{ label }}</label>
    <div class="input">
      <span class="input__value">{{ component_value }}</span>
      <ul class="input__options" @click="select">
        <li class="input__option">Sneakers</li>
        <li class="input__option">Sneakers</li>
        <li class="input__option">Sneakers</li>
      </ul>
    </div>
    <i class="icon arrow-down"></i>
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
      console.log(this.component_value);
    },
  },
  methods: {
    select(e) {
      const el = e.target.closest(".input__option");
      if (!el) return;

      const value = el.innerHTML;
      console.log(value);
      if (!value) return;

      this.component_value = value;
    }
  },
};
</script>

<style></style>
