<template>
  <div class="select-wrapper">
    <label class="label">{{ label }}</label>
    <div class="input">
      <span class="input__value">{{ component_value }}</span>
      <ul class="input__options" @click="select">
        <li
          v-for="(option, i) in options"
          :key="i"
          :data-value="option"
          class="input__option"
        >
          {{ option }}
        </li>
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
    options: { type: Array, default: () => [] },
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
    select(e) {
      const el = e.target.closest(".input__option");
      if (!el) return;

      const value = el.dataset.value;
      if (!value) return;

      this.component_value = value;
    },
  },
};
</script>

<style></style>
