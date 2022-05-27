<template>
  <div>
    드롭다운<br>
   
    <b-dropdown
      v-for="dropdownItem in dropdownItems"
      :key="dropdownItem"
    >
      <template #button-content>
        {{ dropdownItem.tit }}
      </template>
      <div
        v-for="dropdownlist in dropdownlists"
        :key="dropdownlist"
      >
        <b-dropdown-item href="javascript:void(0);">
          {{ dropdownlist.content }}
        </b-dropdown-item>
        <b-dropdown-item href="javascript:void(0);">
          {{ dropdownlist.content2 }}
        </b-dropdown-item>
      </div>
    </b-dropdown>
    
    <br><br><br>

    <!-- aselect  -->
    <div
      class="aselect"
      :data-value="value"
      :data-list="list"
    >
      <div
        class="selector"
        @click="toggle()"
      >
        <div class="label">
          <span>{{ value }}</span>
        </div>

        <!-- visible일때 expanded 클래스 붙여라 -->
        <div
          class="arrow"
          :class="{expanded : visible}" 
        />
        <div :class="{ hidden : !visible, visible}">
          <ul>
            <li
              v-for="item in list"
              :key="item"
              :class="{current : item === value}"
              @click="select(item)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- // aselect  -->
  </div>
</template>
<script>
export default {
  data: function() {
      return {
        dropdownItems: [
          {tit : "내용111"},
          {tit : "내용222"},
          {tit : "내용333"},
        ],
        dropdownlists: [
          {content: "An item", content2: "An item1222"}
        ],
        value: '전체',
        list: [
          "orange", "apple"
        ],
        visible: false,
        selectGroup : [

        ]
       
    };
  } ,
  methods: {
    toggle(){
      this.visible = !this.visible;
    },
    select(option) {
      this.value = option;
    }
  },
}
</script>