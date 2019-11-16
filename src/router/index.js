import Vue from "vue";
import VueRouter from "vue-router";
import home from "./home";
import theatre from "./theatre";
import ticket from "./ticket";
import mine from "./mine";
import search from "./search";
import city from "./city";
import list from "./list";
import vip from "./vip";
import detail from "./detail";
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    routes: [{
            path: "/",
            redirect: "/home"
        }, {
            path: "/login",
            name: "login",
            meta: {
                flag: false,
                requiredAuth: false
            },
            component: _ => import("@pages/login")
        }, 
        {
            path: "/vvv",
            name: "vvv",
            meta: {
                flag: false,
                requiredAuth: false
            },
            component: _ => import("@pages/vvv")
        }, 
    home,
    theatre,
    ticket,
    mine,
    search,
    city,
    list,
    vip,
    detail

]
})

router.beforeEach((to, from, next) => {
    if (to.path != "/login" && to.meta.requiredAuth) {
        if (localStorage.getItem("token")) {
            next();
        } else {
            next({
                name: "login",
                params: {
                    to: to.path
                }
            })
        }
    } else {
        next();
    }
})
export default router;