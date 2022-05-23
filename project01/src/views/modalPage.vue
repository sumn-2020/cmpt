<template>
    <div>
        <!-- <button type="button" @click="onClickSignin()">alert</button> -->
        <button class="btn" @click="smsVerify()"> 모달type02 </button>
        <sms-verify-modal v-if="isShowSmsVerifyModal" @modal-closed='handleModalClosed'/>
    </div>
</template>

<script>
import SmsVerifyModal from '@/components/modal/SmsVerifyModal.vue'

export default {
    name: 'modalPage',
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
        smsVerify() {
            this.isShowSmsVerifyModal = true
        },
        handleModalClosed(value) {
            if(value === SmsVerifyModal.name){
                this.isShowSmsVerifyModal = false
            }
        }
      // onClickSignin() {
      //           this.$alert("알림", "가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.");
      //       }
      //   },


    }
}

</script>