import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
Vue.use(VueRouter);

const router = new VueRouter({ // eslint-disable-line no-unused-vars
    mode: "history",
    routes: [
        {
            path: '/', 
            component: HomePage
        },
        {path: '/about', component: AboutPage}
    ]
})

export default router;