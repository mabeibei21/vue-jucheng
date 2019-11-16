export default {
    path: '/gatherCard',
    name: "gatherCard",
    meta: {
        flag: true,
    },
    component: _ => import("@pages/Card/gatherCard"),
}