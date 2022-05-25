<template>
  <div>
    드롭다운<br>
   
    <b-dropdown
      v-for="dropdownItem in dropdownItems"
      :key="dropdownItem"
    >
      <template #button-content>
        <span>{{ dropdownItem.tit }}</span>
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
        ]
    };
  }  
}
</script>