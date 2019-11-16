import Vue from "vue";
import Header from './header';
import BScroll from './Bscroll';
let componentCard = [
    Header,
    BScroll
]

componentCard.forEach((item) => {
    Vue.component(item.name, item)
})