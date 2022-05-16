<template>
  <div id="app">
    <HeaderPage />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
    <FooterPage />
    <TopBtn />
  </div>
</template>

<script>
import HeaderPage from './components/layout/Header.vue';
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