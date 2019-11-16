<template>
    <div class="list">
        <Header title="演出" icon/>
         <div class="nav">
                <div class="left">
                    <ul>
                        <v-touch :class="flag==index?'btn':''" tag="li" v-for="(item,index) in navList" :key="index" v-on:tap="handleClick(index)">
                            <span>{{item.name}}</span>
                        </v-touch>
                    </ul>
                </div>
                <div class="right">
                    <span>全国</span>
                    <i class="iconfont">&#xe50c;</i>
                </div>
            </div>
            <!-- 列表 -->
        <section>
        <div class="box">
            <router-link tag="div" :to="{name:'detail',params:{id:item.schedular_id}}" class="zhao" v-for="(item,index) in list" :key="index">
                <div class="tu">
                    <img :src="item.pic">
                </div>
                <div class="zi">
                    <h6>{{item.show_time_top}}<span>{{item.end_show_time}}</span></h6>
                    <h5>{{item.name}}</h5>
                    <p><span>{{item.city_name}}</span> | {{item.venue_name}}</p>
                    <h4><span>￥{{item.min_price}}</span>起</h4>
                </div>
            </router-link>
        </div>
        </section>
    </div>
</template>
<script>
import {listApi,listNavApi} from "@api/shouye"
export default {
    name:"list",
    data(){
        return{
            id:'',
            name:'',
            list:[],
            navList:[],
            flag:''
        }
    },
    async created() {
        let {id,name,index}=this.$route.params;
        this.id=id;
        this.name=name;
        //列表
        let data=await listApi(this.id);
        this.list=data.data.list;
        //导航条列表
        let data1=await listNavApi();
        this.navList=data1.data.show_category_list;
    },
    async activated() {  
        let {id,name,index}=this.$route.params;
        this.id=id;
        this.name=name;
        let data=await listApi(this.id);
        this.list=data.data.list;
    },
    methods:{
      async  handleClick(index){
            this.flag=index;
            switch(index){
                case 0:this.id=35;
                break;
                case 1:this.id=36;
                break;
                case 2:this.id=37;
                break;
                case 3:this.id=38;
                break;
                case 4:this.id=79;
                break;
                case 5:this.id=91;
                break;
                case 6:this.id=99;
                break;
                case 7:this.id=86;
                break;
            }
        let dataa= await listApi(this.id);
        this.list=dataa.data.list;
        }
    }
}
</script>
<style>
.list{
    height:100%;
}
.btn{
    color:tomato;
}
   .nav{
        height:0.375rem;display:flex;
        justify-content:space-around;
        align-items:center;
    }
     .nav .left {
        width: 2.242rem;
        overflow: hidden;
    }
   .nav .left ul {
        display: flex;
        overflow-x: auto;
        width: 100%;
        align-items: center;
    }
    .nav .left ul li{
        border-bottom:1px solid transparent;
    }
  .nav .left ul li span {
        display: block;
        width: 0.667rem;
    }
     section {
         height: 100%;flex:1;overflow:auto;
     }
  
    section .zhao{
        height:1.208rem;width:2.875rem;
        margin:0 auto;display:flex;
        margin-top:0.125rem;margin-bottom:0.125rem;
    }
    section .zhao .tu{
        width:0.875rem;height:1.183rem;
    }
    section .zhao .tu img{
        width:0.875rem;height:1.183rem;
    }
    section .zhao .zi{
        margin-left:15px;
    }
    
    section .zhao .zi h6{
        font-size:0.142rem;
    }
    
    section .zhao .zi h6 span{
        font-size:0.1rem;font-size:#ccc;
        font-weight:normal;margin-left:0.042rem;
    }
    
    section .zhao .zi h5{
        font-size:0.133rem;margin-top:0.083rem;
    }
    
    section .zhao .zi p{
        font-size:0.1rem;margin-top:0.083rem;
    }
    
    section .zhao .zi h4{
        font-size:0.1rem;color:#aaa;
        font-weight:normal;margin-top:0.083rem;
    }
    
    section .zhao .zi h4 span{
        font-size:0.133rem;color:#ff7643;
        margin-right:0.042rem;
    }
</style>