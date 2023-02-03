<template>
  <div>
    <component-header />
    <router-view />
    <component-footer />
    <component-modal />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Modal from '../components/Modal.vue';

export default {
  components: {
    'component-header': Header,
    'component-footer': Footer,
    'component-modal': Modal,
  },
};
</script>

<style lang="sass">
@import '@/assets/sass/main.sass'
</style>
