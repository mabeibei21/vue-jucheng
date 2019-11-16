<template>
    <div class="page">
        <Header title="剧院"/>
        <bei-scroll ref="scroll">
        <section>
            <div class="scroll">
        <div class="container1">
            <div class="kuai" v-for="(item,index) in theatre_list" :key="index">
                <div class="content" >
                    <div class="title">
                        <ul>
                            <li>
                                <img :src="item.pic">
                                <span>{{item.name}}<br>
                                <i>{{item.count}}场在售</i></span>
                            </li>
                           <li>···</li>
                           </ul>
                    </div>
                    <div class="add">
                        <ul>
                            <li v-for="item1 in item.showList" :key="item1.id">
                                <p>{{item1.show_time}}</p>
                                <h6><span></span></h6>
                                <img :src="item1.pic">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            </div>
    </section>
        </bei-scroll>
    </div>
</template>
<script>

// 注释

import {theatreApi} from "@api/shouye";
export default {
    name:"Theatre",
    data(){
        return{
            theatre_list:[],
            page:''
        }
    },
    created(){
        
        this.handleGetTheatreList(2)
    },
    mounted(){
        this.$refs.scroll.handleScroll();
        //下拉加载更多
        this.$refs.scroll.handlepullingDown(()=>{
            // var arr=[10,20,30,40];
            // var index=parseInt(Math.random()*6);
            this.id=this.theatre_list[0].id;
            let id1=this.id;
            console.log(id1)
            this.handleGetTheatreList(id1)
        });
        //上拉加载更多
        this.$refs.scroll.handlepullingDown(()=>{
            // console.log(111)
        })
    },
    methods:{
        async handleGetTheatreList(id1){
            // id=id?id:2;
            let data=await theatreApi(id1);
            console.log(data,46);
            this.theatre_list=data.data.theatre_list;
            
        }
    },
    watch:{
        theatre_list(){
            //console.log("更新了")
            this.$refs.scroll.handleRefreshDown();
        }
    }

}
</script>
<style>
    section{
    flex:1;overflow:auto;/* height:100%; */
}
section .container1{
    width:2.875rem;margin:0.1rem auto;
    background:#fff;
}
section .container1 .kuai{
    width:2.875rem;height:2.483rem;
    margin-bottom:0.167rem;
    border:1px solid rgb(238, 234, 234);
}
section .container1 .kuai .content{
    width:2.583rem;margin:0 auto;
}
section .container1 .kuai .content .title{
    margin-top:0.167rem;
}
section .container1 .kuai .content .title ul{
    display:flex;justify-content:space-between;
    align-items: center;
}
section .container1 .kuai .content .title ul li{
    display:flex;
}
section .container1 .kuai .content .title ul li img{
    width:0.408rem;height:0.408rem;
    margin-right:0.042rem;
}
section .container1 .kuai .content .title ul li span{
    font-size:0.133rem;font-weight:bold;
}
section .container1 .kuai .content .title ul li span i{
    font-size:0.1rem;font-style:normal;
    font-weight:normal;
}
section .container1 .kuai .content .add{
    height:1.6rem;margin-top:0.083rem;
    overflow:hidden;
}
section .container1 .kuai .content .add ul{
    height:1.6rem;display:flex;
    overflow-x:auto;
}
section .container1 .kuai .content .add ul li{
    margin-right:0.042rem;width:0.883rem;text-align:center;
}
section .container1 .kuai .content .add ul li p{
    font-size:0.1rem;color:#ccc;width:0.883rem;
    margin-bottom:0.042rem;
}
section .container1 .kuai .content .add ul li img{
    width:0.883rem;height:1.242rem;
    margin-top:0.042rem;
}
section .container1 .kuai .content .add ul li h6{
    border-bottom:1px solid #ccc;
    margin-bottom:0.083rem;
}
section .container1 .kuai .content .add ul li h6 span{
    width:0.033rem;height:0.033rem;
    background:#ccc;display:block;
    margin:0 auto;
}

</style>