<template>
     <transition name="fade">
        <v-btn bottom right fixed fab dark small id="pagetop" v-show="scY > 300" @click="toTop">
        탑버튼
        </v-btn>
    </transition>
</template>
<script>
export default {
    name: 'TopBtn',
     data() {
      return {
        scTimer: 0,
        scY: 0,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll: function () {
        if (this.scTimer) return;
        this.scTimer = setTimeout(() => {
          this.scY = window.scrollY;
          clearTimeout(this.scTimer);
          this.scTimer = 0;
        }, 100);
      },
      toTop: function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
    },
}
</script>