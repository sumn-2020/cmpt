<template>
  <div id="app">
    <HeaderPage />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from './components/layout/Header.vue';
import FooterPage from './components/layout/FooterPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,FooterPage
  }
}
</script>