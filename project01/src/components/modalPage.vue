<template>
    <div @submit.prevent="onClickSignin">
        <MyModal />
     
    </div>
</template>
<script>
import MyModal from './modal/AlertModal'

export default {
   name: 'modalPage',
   components: {
       MyModal 
   },
   methods: {
       onClickSignin() {
           this.catch(() => {
                this.$alert("알림", "가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.");
            })

       }
   }
}
</script>