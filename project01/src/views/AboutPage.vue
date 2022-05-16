<template>
  <div>
    <calendarTool />
    <calendarKorean />
  </div>
</template>

<script>
import calendarTool from "../components/vutify/calendar/calendarTool.vue";
import calendarKorean from "../components/vutify/calendar/calendarKorean.vue";

export default {
  name: "AboutPage",
  components: {
    calendarTool,
    calendarKorean
  },
};
</script>
