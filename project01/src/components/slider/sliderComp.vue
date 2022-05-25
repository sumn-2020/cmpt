<template>
  <div>
    <vueSlickCarousel v-bind="slickOptions">
      <div
        v-for="(d,index) in data1"
        :key="index"
      >
        <a :href="d.image">
          <img
            :src="d.image"
            alt=""
          >{{ d.text }}
        </a>
      </div>
    </vueSlickCarousel>
  </div>
</template>

<script>
import vueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'SlickSlider',
    components: { vueSlickCarousel },
    data: function() {
        return {
            data1: [
                { image:  require('../../assets/logo.png'), text: 'Config1' }, 
                { text: 'Config2'}, 
                { text: 'Config3'}, 
                { text: 'Config4'} 
            ],
            slickOptions: {
                dots: true,
                infinite: true,
                autoplay: false,
                arrows : false,                    
                draggable:true,
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        };
    },
}
</script>