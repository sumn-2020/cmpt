<template>
  <div>
    <calendarTool />
    <calendarKorean />
  </div>
</template>

<script>
import calendarTool from "../components/calendar/calendarTool.vue";
import calendarKorean from "../components/calendar/calendarKorean.vue";

export default {
  name: "AboutPage",
  components: {
    calendarTool,
    calendarKorean
  },
};
</script>
