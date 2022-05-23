<template>
    <modal
        name="sms-verify-modal"
        height="auto"
        width="600px"
        :scrollable="true"
        :adaptive="true"
        @before-open="beforeOpen"
        @closed="closed">
        <div class="modal_head">
            <div class="title">
                <p>연구참여자 휴대폰 인증</p>
            </div>
        </div>
        <div class="modal_body">
            <div class="varDataAddBox">
                <!-- <ValidationObserver tag="form" class="loginFormBox" v-slot="{errors}"> -->
                    <!-- <ValidationProvider class="inputBox inputBorderBox" name="mobile" rules="required|mobileTel" mode="eager">
                        <label for="">휴대폰 번호</label>
                        <input v-model="mobile" type="text" placeholder="'-' 없이 숫자만 입력" @keypress="eventUtil.onKeyPressForOnlyDigit($event)" maxlength="20">
                    </ValidationProvider> -->

                    <!-- <ValidationProvider id="verifyBox" class="inputBox inputBorderBox" name="인증번호" rules="required|verifyNum" v-slot="{errors, valid}">
                        <label>인증번호 6자리 입력 </label>
                        <input v-model="verifyNumber" maxlength="6" @keypress="eventUtil.onKeyPressForOnlyDigit($event)" :placeholder="counterPlaceHolder">
                        <span class="notValidationTxt">{{errors[0]}}</span>
                        <input type="button" value="확인" @click="onClickConfirmVerifyNumber(valid)" :disabled="counter == 0">
                        <vac ref="verifyNumberCounter" :autoStart="false" :end-time="new Date().getTime() + 180000">
                            <template v-slot:process="{ timeObj }">
                                {{onProcesssVerifyNumberCounter(timeObj)}}
                            </template>
                            <template v-slot:finish>
                                {{onFinishVerifyNumberCounter()}}
                            </template>
                        </vac>
                    </ValidationProvider> -->
                    <div class="modal_footer nomargin">
                        <button type="button" @click="cancel" class="cancleBtn">취 소</button>
                        <button type="button" class="saveBtn" v-if="!isVerified" @click="onClickSendVerifyNum()">인증번호<br>전송</button>
                        <!-- <button type="button" class="saveBtn" v-if="isVerified" @click="onClickVerifyJoin()">인 증</button> -->
                    </div>
                <!-- </ValidationObserver> -->
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
        // onClickSendVerifyNum(isValidPhoneNumber, errors){
        //     if(!isValidPhoneNumber){
        //         this.$alert('알림', '휴대폰 번호를 입력해주세요.')
        //         return
        //     }

        //     if(errors.mobile.length > 0){
        //         this.$alert('알림', '휴대폰 번호 형식이 맞지 않습니다.')
        //         return
        //     }

        //     document.querySelector('#verifyBox').style.display = 'block';

         
        // },
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
