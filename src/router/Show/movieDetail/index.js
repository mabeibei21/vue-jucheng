export default {
    path: '/movieDetail/:id',
    name: 'movieDetail',
    meta: {
        flag: true
    },
    props: true,
    component: _ => import("@pages/Show/movieDetail")
}