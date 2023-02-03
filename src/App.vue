<template>
  <div id="app">
    <main-layout>
      <router-view />
    </main-layout>
  </div>
</template>

<script>
import MainLayout from "./layouts/MainLayout";

export default {
  components: {
    MainLayout,
  },
};
</script>

<style></style>
