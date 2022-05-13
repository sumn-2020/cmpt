<template>
    <div>
        <ul class="tab_menu">
            <li v-for="(tab, index) in tabs" :key="tab" :class="{active: currentTab === index}" @click="currentTab = index"> <!-- -->
                {{ tab }}
            </li>
        </ul>

        <div class="tab_body">
            <div v-show="currentTab==0">tabbody1</div> <!-- currentTab 이 0일때만 보여라-->
            <div v-show="currentTab==1">
                <ul>
                    <li v-for="tabItem in tabItems" :key="tabItem">
                        {{tabItem.title}}
                        <p v-html="tabItem.infoTxt.replace(/(?:\r\n|\r|\n)/g, '<br />')"></p> <!-- /(?:\r\n|\r|\n)/g를 br태그로 대체-->
                        <!-- {{tabItem.infoTxt}} -->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TabTool',
    data() {
        return {
            currentTab: 0,
            tabs: ['tabMenu1', 'tabMenu2'],
            tabItems:[
                {title: '사업명', infoTxt: '힐링케어제품및 서비스에 대한 데이터 기반 실증지원 플랫폼 구축' },
                {title: '사업개요', infoTxt: '산업자원통상부 산하 한국산업기술진흥원에서 지원 받아 2020년\r 구축된 경희대학교 건강노화 힐링케어 실증거점센터는 고령친화산업 분야의\r 제품 및 서비스에 대한 실증을 실시하고자함' }
            ]
        }
    },


    
}
</script>