<template>
    
 
    <div class="modalContainer alertModal">

      <header class="modalHeader">
        <p>
          {{ title }}
        </p>
      </header>


      <div class="modalBody">
        <p class="alignC" v-html="contents"></p>
      </div>


      <div class="modalFooter">
        <button @click="$emit('close')">{{confirmText}}</button>
      </div>


  </div>



</template>

<script>
export default {
    name: 'AlertModal',
    props: [
        'title',
        'contents',
        'confirmText'
    ]
}
</script>