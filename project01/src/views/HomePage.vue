<template>
  <div>
    <ListPage /> <br>
    <slickSlider /> <br>
    <TabTool /> <br>
  </div>
</template>


<script>
import ListPage from '../components/ListPage.vue';
import slickSlider from '../components/slickSlider.vue';
import TabTool from '../components/TabTool.vue';

export default {
    name: 'HomePage',
    components: {
        ListPage,
        slickSlider,
        TabTool,
    },
    data: function() {
        return {
        };
    }
}
</script>



