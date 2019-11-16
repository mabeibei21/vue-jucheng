export default {
    path: '/myCard',
    name: "myCard",
    meta: {
        flag: true,
        requiredAuth: true
    },
    component: () => import("@pages/Card/myCard"),
}