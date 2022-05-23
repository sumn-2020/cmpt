<template>
  <div>
    <!-- alertBtn -->
    <button
      type="button"
      @click="alertShow()"
    >
      alertBtn
    </button> 
    <!--  //alertBtn -->

    <!-- confirmBtn -->
    <button
      type="button"
      @click="confirmShow()"
    >
      confirmBtn
    </button> 
    <!--  //confirmBtn -->

    <!--  모달type02 -->
    <button
      class="btn"
      @click="smsVerify()"
    >
      모달type02
    </button>
    <sms-verify-modal
      v-if="isShowSmsVerifyModal"
      @modal-closed="handleModalClosed"
    />
    <!--  // 모달type02 -->
  </div>
</template>

<script>
import SmsVerifyModal from '@/components/modal/SmsVerifyModal.vue'

export default {
    name: 'ModalPage',
    components: {
      SmsVerifyModal
    },
    data () {
      return {
        //isModalViewed: false,
        isShowSmsVerifyModal: false,
      }
    },
    methods: {
        //일반modal 
        smsVerify() {
            this.isShowSmsVerifyModal = true
        },
        handleModalClosed(value) {
            if(value === SmsVerifyModal.name){
                this.isShowSmsVerifyModal = false
            }
        },
        //alert창
        alertShow(){
                this.$alert('알림창', '알림창입니다.')
                return
        },
        // confirm창
        confirmShow(){
              this.$confirm('컨펀창', '컨펌알림창입니다.')
                return
        },
    }
}

</script>