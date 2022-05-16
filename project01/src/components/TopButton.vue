<template>
    <f-fab-transition>
        <v-btn bottom right fixed fab dark small @click="$vuetify.goTo('#header')">버튼</v-btn>
    </f-fab-transition>
</template>
<script>
export default {
    name: 'TopBtn',
    methods: {
        handleScroll(){
            this.btnShow = window.scrollY > 400;
        }
    },
    beforeMount() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    
}
</script>