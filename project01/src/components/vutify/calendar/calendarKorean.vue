<template>
    <div>

        <ValidationProvider>
            <h2 class="mb-2 font-weight-bold">
                세금계산서 발행 요청일
            </h2>

            <v-date-picker
            v-if="taxInvoiceDateMenu"
            v-model="taxInvoiceDate"
            :min="today"
            :max="allowMaxDate"
            color="green"
            class="custom-picker"
            :weekday-format="getDay"
            :month-format="getMonth"
            :title-date-format="getMonth"
            :header-date-format="getHeaderTitleMonth">
            <v-spacer />
            <v-btn
                text
                class="font-weight-bold"
                color="gray"
                @click="taxInvoiceDateMenu = false">
                취소
            </v-btn>
            <v-btn
                text
                class="font-weight-bold"
                color="green "
                @click="$refs.taxInvoiceDateMenu.save(taxInvoiceDate)">
                확인
            </v-btn>
            </v-date-picker>
        </ValidationProvider>

    </div>
</template>

<script>
export default {
    name: 'ValidationProvider',
    data:function() {
        return {
            taxInvoiceDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            taxInvoiceDateMenu: true
            };
    },
    methods: {
        getDay(date) {
                        const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
                        let i = new Date(date).getDay(date);
                        return daysOfWeek[i];
        },
        getMonth(date) {
                        const monthName = [
                            '1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월', '12월',
                        ];

                        let i = new Date(date).getMonth(date);
                        return monthName[i];
        },
        getHeaderTitleMonth(date){
            const monthName = [
                            '1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월', '12월',
            ];
            let i = new Date(date).getMonth(date);
            return monthName[i];
           
        }

    },

        
        
    
}
</script>

<style>
.custom-picker {
  border-radius: 10px !important;
}
.custom-picker .v-btn--active.green {
  background-color: #edffff !important;
}
.custom-picker .v-btn--active.green .v-btn__content {
  color: #00b1bb !important;
  font-weight: bold !important;
}
.custom-picker .v-picker__title {
  display: none !important;
}
.custom-picker .v-date-picker-header {
  padding-top: 10px !important;
}

.v-date-picker-table thead tr th {
  color: #1c1c1c !important;
  font-weight: 400 !important;
}
.v-date-picker-table thead tr th:nth-child(1) {
  color: #ff7451 !important;
}
.v-date-picker-table thead tr th:nth-child(7) {
  color: #ff7451 !important;
}

.v-date-picker-table tbody tr td:nth-child(1) .v-btn--disabled .v-btn__content {
  color: #ffcbbe;
}
.v-date-picker-table tbody tr td:nth-child(1) .v-btn__content {
  color: #ff7451;
}
.v-date-picker-table tbody tr td:nth-child(7) .v-btn--disabled .v-btn__content {
  color: #ffcbbe;
}
.v-date-picker-table tbody tr td:nth-child(7) .v-btn__content {
  color: #ff7451;
}

</style>