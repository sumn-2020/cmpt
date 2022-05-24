import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "./views/HomePage";
import CalendarPage from "./views/CalendarPage";
import CalendarFull from "./views/CalendarFull";
import modalPage from "./views/modalPage";
Vue.use(VueRouter);

const router = new VueRouter({ // eslint-disable-line no-unused-vars
    mode: "history",
    routes: [
        { path: '/',  component: HomePage},
        {path: '/calendar', component: CalendarPage},
        {path: '/calendarFull', component: CalendarFull},
        {path: '/modal', component: modalPage}
    ]
})

export default router;