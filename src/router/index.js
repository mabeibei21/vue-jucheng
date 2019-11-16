import Vue from "vue"
import VueRouter from "vue-router"
import gatherCard from "./Card/gatherCard"
import myCard from "./Card/myCard"
import inVip from './Card/inVip'
import cardDetail from "./Card/cardDetail"
import performance from "./Show/performance"
import movieDetail from "./Show/movieDetail"
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    routes: [{
            path: '/',
            redirect: '/gatherCard'
        }, {
            path: '/login',
            name: "login",
            meta: {
                flag: true,
            },
            component: _ => import("@pages/login"),

        },
        gatherCard,
        myCard,
        cardDetail,
        inVip,
        performance,
        movieDetail
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path != "/login" && to.meta.requiredAuth) {
        if (localStorage.getItem("token")) {
            next();
        } else {
            next({
                name: 'login',
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