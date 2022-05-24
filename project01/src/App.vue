<template>
  <div id="app">
    <HeaderPage />
    <div
      id="content"
      class="content grab"
    >
      <router-view />
    </div>
    <FooterPage />
    <TopBtn />
  </div>
</template>

<script>
import HeaderPage from './components/layout/HeaderPage.vue';
import FooterPage from './components/layout/FooterPage.vue';
import TopBtn from './components/TopButton.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    FooterPage,
    TopBtn
  }
}
</script>