<template>
    <div>

        <ListPage /> <br>
        <slickSlider /> <br>
        <TabTool /> <br>
        <modalPage />
        
    </div>
</template>


<script>
import ListPage from '../components/ListPage.vue';
import slickSlider from '../components/slickSlider.vue';
import TabTool from '../components/TabTool.vue';
import modalPage from '../components/modalPage.vue';

export default {
    name: 'HomePage',
    components: {
        ListPage,
        slickSlider,
        TabTool,
        modalPage
    },
    data: function() {
        return {
        };
    }
}
</script>

<style>
@import '../assets/scss/common.scss';
</style>

