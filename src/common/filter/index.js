import Vue from 'vue';
Vue.filter('filterTime', function (value) {
    const date = new Date(value)
    const y = date.getFullYear()
    let MM = date.getMonth() + 1
    MM = MM < 10 ? ('0' + MM) : MM
    let d = date.getDate()
    d = d < 10 ? ('0' + d) : d
    let h = date.getHours()
    h = h < 10 ? ('0' + h) : h
    let m = date.getMinutes()
    m = m < 10 ? ('0' + m) : m
    let s = date.getSeconds()
    s = s < 10 ? ('0' + s) : s
    return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
})
Vue.filter('filterMD', function (value) {
    const date = new Date(value)
    const y = date.getFullYear()
    let MM = date.getMonth() + 1
    MM = MM < 10 ? ('0' + MM) : MM
    let d = date.getDate()
    d = d < 10 ? ('0' + d) : d

    return MM + '-' + d
})

Vue.filter('filterD', function (value) {
    const date = new Date(value)
    const y = date.getFullYear()
    let MM = date.getMonth() + 1
    MM = MM < 10 ? ('0' + MM) : MM
    let d = date.getDate()
    d = d % 7;
    return "周" + d
})
Vue.filter('filterFan', (val1, val2) => {
    val2 = val2 ? val2 : '';
    return val1 + '到' + val2;
})