<template>
  <div>
    <ListPage /> <br>
    <TabTool /> <br>
  </div>
</template>


<script>
import ListPage from '../components/ListPage.vue';
import TabTool from '../components/TabTool.vue';

export default {
    name: 'HomePage',
    components: {
        ListPage,
        TabTool,
    },
    data: function() {
        return {
        };
    }
}
</script>



