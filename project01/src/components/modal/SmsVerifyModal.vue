<template>
  <modal
    name="sms-verify-modal"
    height="auto"
    width="600px"
    :scrollable="true"
    :adaptive="true"
   
    @closed="closed"
  >
    <div class="modal_head">
      <div class="title">
        <p>연구참여자 휴대폰 인증</p>
      </div>
    </div>
    <div class="modal_body">
      <div class="varDataAddBox">
        <div class="modal_footer nomargin">
          <button
            type="button"
            class="cancleBtn"
            @click="cancel"
          >
            취 소
          </button>
          <button
            type="button"
            class="saveBtn"
            @click="onClickSendVerifyNum()"
          >
            인증번호<br>전송
          </button>
          <button
            type="button"
            class="saveBtn"
          >
            인 증
          </button>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
    name: 'SmsVerifyModal',  
    mounted(){
        this.show()
    },
    methods:{

        show(){
            this.$modal.show('sms-verify-modal')
        },
        hide(){
            this.$modal.hide('sms-verify-modal')
        },
        closed(){
            this.$emit('modal-closed', this.$options.name, {result: this.modalResult})
        },
        cancel(){
            this.hide()
        },
        onClickSendVerifyNum(){
                this.$alert('알림', '휴대폰 번호를 입력해주세요.')
                return
        },


     
    }
}
</script>
<style>
#verifyBox {
    display: none;
}
</style>

