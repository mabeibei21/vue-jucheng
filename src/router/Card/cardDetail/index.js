export default {
    path: '/cardDetail/:id/:name',
    name: 'cardDetail',
    meta: {
        flag: true,
    },
    props: true,
    component: _ => import("@pages/Card/cardDetail")
}