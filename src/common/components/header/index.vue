<template>
    <div class="tou">
        <div class="tou1">
        <ul>
            <li v-show="icon">· · ·</li>
            <li>{{title}}</li>
            <v-touch tag="li" v-on:tap="handleBack()" v-show="icon"><i class="iconfont">&#xe504;</i></v-touch>
        </ul>
    </div>
    </div>
</template>
<script>
export default {
    name:"Header",
    props:{
        title:{
            type:String,
            default:"剧院"
        },
        icon:{
            type:Boolean
        }
    },
    methods:{
        handleBack(){
            this.$router.back();
        }
    }
}
</script>
<style>
/*.tou1*/
.tou{
    z-index:1000;position:relative;
    background:#fff;
}
.tou1{
    height:0.367rem;border-bottom:0.008rem solid #ccc;
    z-index:1000;
}
.tou1 ul{
    display:flex;justify-content:center;
    align-items: center;height:0.367rem;
    position:relative;width:100%;
}
.tou1 ul li:nth-of-type(1){
    position:absolute;
    left:0.083rem;
}
.tou1 ul li:nth-of-type(1) i{
    font-size:0.167rem;
}
.tou1 ul li:nth-of-type(2){
    font-size:0.15rem;
}
.tou1 ul li:nth-of-type(3){
    position:absolute;
    right:0.083rem;
}
</style>