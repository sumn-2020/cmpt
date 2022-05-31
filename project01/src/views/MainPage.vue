<template>
  <div class="grab">
    <br><br><br><br><br>

    <div
      class=""
      :style="styleVue"
    >
      스타일 바인딩
    </div>

    <br>
    <ul>
      <li>{{ products[0] }}</li>
      <li>{{ products[1] }}</li>
      <li>{{ products[3] }}</li>
    </ul>
    <br>

    <div
      v-for="item in 3"
      :key="item"
    >
      반복문 (작명 in 반복횟수 / :key => 반복문 돌린 요소를 컴퓨터가 구분하기 위해 씀)
    </div>
    <br>

    <ul>
      <li
        v-for="(item,index) in lists"
        :key="index"
      >
        <h4>{{ item.itemProducts }}</h4>
        <p>{{ item.price }}만원</p>
        <button
          type="button"
          @click="increase($event)"
        >
          신고버튼
        </button>
        <span>신고수 : {{ report }}</span>
      </li>
    </ul>
    <br>


   
    <div class="join-wrap layout">
      <ul class="form-group">
        <li>
          <div class="input-wrap">
            <input
              id="phoneNum"
              type="text"
              placeholder="휴대폰 번호를 입력해주세요"
              @input="typingPhone($event)"
            >
            <button
              id="btn_auth"
              type="button"
              data-bs-toggle="collapse"
              href="#collapse1"
              role="button"
              aria-expanded="false"
              aria-controls="collapse1"
              class="btn btn-green-line"
              :class="{ disabled: isDisabled }"
              @click="isShow = !isShow"
            >
              인증하기
            </button>
          </div>
          <transition
            name="slide"
          >
            <div
              v-if="isShow"
              class="child"
            >
              sdfsdfsdf
            </div>
          </transition>
        <!--  pwd-auth -->
        </li>
      </ul>
    </div>

    <!--  // join-wrap -->
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      styleVue: "color: red",
      products : ["항목1", "항목2", "항목3"],
      lists: [
        {itemProducts: "제목1", price: '50'},
        {itemProducts: "제목2", price: '500'},
        {itemProducts: "제목3", price: '5000'},
      ],
      report : 0,

      isDisabled: true,
      isShow:false,




    };
  },
  methods: {
    increase(event) {
      const targetId = event.currentTarget.id;
      console.log(targetId);
      this.report += 1; //data안에 있는 거 갖다 쓰고싶을 경우  this. 필수
    },
 
  },
};
</script>
<style lang="scss">

.slide-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
</style>
