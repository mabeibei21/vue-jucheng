export default {
    path: '/performance',
    name: 'performance',
    meta: {
        flag: true,
    },
    props: true,
    component: _ => import("@pages/Show/performance")
}