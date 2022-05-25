<template>
  <div>
    <!-- alertBtn -->
    <button
      type="button"
      class="btn"
      @click="alertShow()"
    >
      alertBtn(확인버튼)
    </button> 
    <!--  //alertBtn -->

    <!-- confirmBtn -->
    <button
      type="button"
      class="btn"
      @click="confirmShow()"
    >
      confirmBtn(취소,확인버튼)
    </button> 
    <!--  //confirmBtn -->

    <!--  이중모달 -->
    <button
      class="btn"
      type="button"
      @click="smsVerify()"
    >
      이중모달
    </button>
    <sms-verify-modal
      v-if="isShowSmsVerifyModal"
      @modal-closed="handleModalClosed"
    /> 
    <!--  // 이중모달 -->

    <!-- calendar Modal Btn -->
    <button
      type="button"
      class="btn"
      @click="calendarShow()"
    >
      달력모달
    </button>  
    <!--  //calendar Modal Btn  -->

    <br><br><br><br>
    <!-- dropdown -->
    <dropdownComp />
  </div>
</template>

<script>
import SmsVerifyModal from '@/components/modal/SmsVerifyModal.vue'
import dropdownComp from '@/components/dropdownComp.vue'

export default {
    name: 'ModalPage',
    components: {
      SmsVerifyModal,
      dropdownComp
    },
    data () {
      return {
        isShowSmsVerifyModal: false,
      }
    },
    methods: {
        //이중모달 
        smsVerify() {
            this.isShowSmsVerifyModal = true
        },
        handleModalClosed() {
            this.isShowSmsVerifyModal = false
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
        //달력모달
        calendarShow(){
          
        }
    }
}

</script>