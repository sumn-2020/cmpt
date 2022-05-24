<template>
  <modal
    name="sms-verify-modal"
    height="auto"
    width="600px"
    :scrollable="true"
    :adaptive="true"
  >
    <div class="modal_head">
      <div class="title">
        달력
      </div>
    </div>
    <div class="modal_body" />
  </modal>
</template>

<script>
export default {
    name: 'CalendarModal',
    mounted(){
        this.show()
    },
  
}
</script>

