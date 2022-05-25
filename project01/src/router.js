import Vue from "vue";
import VueRouter from "vue-router";

import TabPage from "./views/TabPage";
import MainPage from "./views/MainPage";
import CalendarPage from "./views/CalendarPage";
import CalendarFull from "./views/CalendarFull";
import modalPage from "./views/modalPage";
import sliderPage from "./views/sliderPage";
Vue.use(VueRouter);

const router = new VueRouter({ // eslint-disable-line no-unused-vars
    mode: "history",
    routes: [
        { path: '/',  component: MainPage},
        { path: '/tab',  component: TabPage},
        {path: '/calendar', component: CalendarPage},
        {path: '/calendarFull', component: CalendarFull},
        {path: '/modal', component: modalPage},
        {path: '/slider', component: sliderPage}
    ]
})

export default router;