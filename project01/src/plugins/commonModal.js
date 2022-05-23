import Vue from 'vue'
import VModal from 'vue-js-modal'
import Alert from '@/components/modal/AlertModal'
import Confirm from '@/components/modal/ConfirmModal'

Vue.use(VModal, {
  dynamicDefaults:{
    height: 'auto',
    adaptive: true
  }
})

export default {
  install(Vue) {
    Vue.prototype.$createConfirmResponse = function(){
      return {
        result: false,
        data: null
      }
    }

    Vue.prototype.$confirm = function(title, contents, confirmText, cancelText, response, events, width){
      if(!confirmText){
        confirmText = '확인';
      }
      if(!cancelText){
        cancelText = '취소';
      }
      this.$modal.show(
        Confirm,
        {
          title: title,
          contents: contents,
          confirmText: confirmText,
          cancelText: cancelText,
          response: response
        },
        {
          width: width
        },
        events
      )
    }

    Vue.prototype.$alert = function(title, contents, confirmText, events, width){
      if(!confirmText){
        confirmText = '확인';
      }
      if(!width){
        width = '380px';
      }
      
      this.$modal.show(
        Alert,
        {
          title: title,
          contents: contents,
          confirmText: confirmText,
        },
        {
          width: width
        },
        events,
      )
    }
  }
}