<template>
  <div>
    <div class="modalContainer alertModal row6">
      <header class="modalHeader">
        <p>
          {{ title }}
        </p>
      </header>
      <div class="modalBody alignL">
        <p v-html="contents"></p>
      </div>
      <div class="modalFooter">
          <button @click="onClickClose(false)" class="cancleBtn">{{cancelText}}</button>
          <button @click="onClickClose(true)">{{confirmText}}</button>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'ConfirmModal',
  props:[
    'title', 
    'contents',
    'confirmText',
    'cancelText',
    'response'
  ],
  methods:{
    onClickClose(){
      //this.response.result = result
      this.$emit('close')
    }
  }
}
</script>
