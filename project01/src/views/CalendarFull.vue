<template>
  <div>
    <input
      id="phoneNum"
      v-model="initial"
      type="text"
      placeholder="휴대폰 번호를 입력해주세요"
      @input="inputChanged"
    > 
 
    <b-button
      v-b-toggle.collapse1
      class="btn btn-green-line"
      :class="{disabled : isDisabled}"
    >
      <!-- isDisabled가 true일때 disabled 클래스 추가 -->
      인증하기
    </b-button> 

    <!--  pwd-auth -->
    <b-collapse id="collapse1">
      <div class="pwd-auth">
        <strong>인증번호를 입력해주세요. </strong>
        <div class="input-wrap">
          <label for="authNum"><span class="sr-only">인증번호입력</span></label>
          <input
            id="authNum"
            type="text"
          >
          <button
            id="btn_confirm"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse1"
            aria-expanded="false"
            aria-controls="collapse1"
          >
            확인
          </button>
        </div>
        <span class="txt"><i
          class="ico iconify"
          data-icon="eva:info-outline"
        />문자를 받지 못하셨나요?<a href="javascript:void(0);">문자 재전송하기</a></span>
      </div>
    </b-collapse>
    <!-- // pwd-auth -->
  </div>
</template>

  <script>
    export default {
      data: function() {
        return {
             isDisabled : true,
             show: false
          };
      },
      methods: {
        // input에 내용물 있을 경우 인증하기 버튼 disabled 삭제 / input에 내용문 없을 경우 버튼 disabled 추가  
        inputChanged(e) {
          if(e.target.value.length > 0) { 
            this.isDisabled = false
          }else {
            this.isDisabled = true;
            this.show = false
          }
        }
      
      },
    };
  
  </script>

