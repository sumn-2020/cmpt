<template>
  <div class="grab">
    <v-app id="inspire">
      <v-flex xs24>
        <v-row justify="center">
          <v-date-picker
            v-model="picker"
            :weekday-format="getDay"
            :month-format="getMonth"
            :title-date-format="getMonth"
            :header-date-format="getHeaderTitleMonth"
          />
        </v-row>
      </v-flex>
    </v-app>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      }
    },
    methods: {
      getDay(date) {
                        const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
                        
                        let i = new Date(date).getDay(date);
                        return daysOfWeek[i];
      },
      getMonth(date) {
                        const monthName = [
                            '1월',
                            '2월',
                            '3월',
                            '4월',
                            '5월',
                            '6월',
                            '7월',
                            '8월',
                            '9월',
                            '10월',
                            '11월',
                            '12월',
                        ];

                        let i = new Date(date).getMonth(date);
                        return monthName[i];             
      },
      getHeaderTitleMonth(year){ 
         const now  = new Date();                 
         return now.getFullYear(year); 
      }
    },
  }
</script> 