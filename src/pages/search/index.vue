<template>
    <div class="sousuo">
        <header>
            <div class="kuang">
                <i class="iconfont">&#xe744;</i>
                <input type="text" v-model="value" placeholder="搜索热门演出">
            </div>
            <v-touch tag="span" v-on:tap="handlefan()">取消</v-touch>
        </header>
        <section>
            <div class="zhao" v-for="(item,index) in list" :key="index">
                <div class="tu">
                    <img :src="item.pic">
                </div>
                <div class="zi">
                    <h6>{{item.show_time_top}}</h6>
                    <h5>{{item.name}}</h5>
                    <p>{{item.city_name}} <span>| {{item.venue_name}}</span></p>
                    <h4><span>￥{{item.min_price}}</span>起</h4>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import {searchApi} from "@api/shouye"
export default {
    name:"Search",
    methods:{
        handlefan(){
            this.$router.back();
        }
    },
    data(){
        return{
            value:"",
            list:[]
        }
    },
    watch:{
        async value(newVal){
            let data=await searchApi(newVal,this.$store.state.city.id);
            this.list=data.data?data.data.list:[];
        }
    }
}
</script>
<style>
.sousuo{
    height: 100%;
}
    .sousuo header{
        display:flex;
        height:0.367rem;
        align-items: center;
        justify-content: space-around;
    }
    .sousuo header .kuang{
        width:2.508rem;height:0.25rem;
        background:rgb(245, 241, 241);
        border-radius:0.167rem;position:relative;
        display:flex;align-items: center;
    }
    .sousuo header .kuang i{
        position:absolute;left:0.042rem;
        font-size:0.167rem;
    }
    .sousuo header .kuang input{
        width:1.958rem;height:0.167rem;
        position:absolute;left:0.25rem;
        background:rgb(245, 241, 241);
        border:none;outline:none;
    }
    .sousuo header span{
        font-size:0.125rem;
    }
    section{
        flex:1;overflow:auto;
        height:100%;
    }
    .sousuo section .zhao{
        height:1.208rem;width:2.875rem;
        margin:0 auto;display:flex;
        margin-top:0.125rem;margin-bottom:0.125rem;
    }
    .sousuo section .zhao .tu{
        width:0.875rem;height:1.183rem;
    }
    .sousuo section .zhao .tu img{
        width:0.875rem;height:1.183rem;
    }
    .sousuo section .zhao .zi{
        margin-left:15px;
    }
    .sousuo section .zhao .zi h6{
        font-size:0.142rem;
    }
    .sousuo section .zhao .zi h6 span{
        font-size:0.1rem;font-size:#ccc;
        font-weight:normal;margin-left:0.042rem;
    }
    .sousuo section .zhao .zi h5{
        font-size:0.15rem;margin-top:0.083rem;
        width:1.875rem;white-space: nowrap;
        overflow:hidden;text-overflow: ellipsis;
    }
    .sousuo section .zhao .zi p{
        font-size:0.1rem;margin-top:0.083rem;
    }
    .sousuo section .zhao .zi h4{
        font-size:0.1rem;color:#aaa;
        font-weight:normal;margin-top:0.083rem;
    }
    .sousuo section .zhao .zi h4 span{
        font-size:0.133rem;color:#ff7643;
        margin-right:0.042rem;
    }
</style>