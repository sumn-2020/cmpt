<template>
    <div>
        
        <ul>
            <li v-for="(item,index) in list" :key="index" v-bind:class="{ active: (index === activeIndex) }" v-on:click="selectLang(index)"> 
                <!-- list배열 속에 들어있는 item(각각의 항목들) / click하면 selectLang에 index가 들어가는데 / index가 activeIndex와 같을때 active클래스를 추가해라 -->
                {{item.status}}
            </li>
        </ul>
        <br><br><br>
    </div>
</template>
<script>
export default {
    name: 'ListPage',
    data:function() {
        return {
                list:[
                    { status: 'php'},
                    { status: 'python'},
                    { status: 'java'},
                    { status: 'java'},
                    { status: 'java'},
                ],
                activeIndex : 1,       
        };
    },
    methods: {
        selectLang: function(index){
            this.activeIndex = index;
        }
    }
     
}


</script>


<style>
.active {background: green;}

</style>