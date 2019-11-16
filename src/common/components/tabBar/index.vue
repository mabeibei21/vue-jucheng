<template>
    <div id="footer">
        <ul>
            <router-link tag="li" v-for="item in tabbars" :key="item.id" :to="item.path">
                <i class="iconfont" v-html="item.icon"></i>
                <span>{{item.text}}</span>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:"TabBar",
    data(){
        return{
            tabbars:[
                {
                    id:0,
                    text:"首页",
                    icon:"&#xe68a;",
                    path:"/home"
                },
                {
                    id:1,
                    text:"剧院",
                    icon:"&#xe64b;",
                    path:"/theatre"
                },
                {
                    id:2,
                    text:"票夹",
                    icon:"&#xe61d;",
                    path:"/ticket"
                },
                {
                    id:3,
                    text:"我的",
                    icon:"&#xe611;",
                    path:"/mine"
                },
            ]
        }
    }
}
</script>
<style >
    #footer{
        width:100%;height:0.383rem;
        position:fixed;left:0;
        bottom:0;background:#fff;
        border-top:1px solid rgb(240, 239, 239);
    }
    #footer ul{
        width:100%;height:100%;
        display:flex;justify-content:space-between;
        align-items: center;
    }
    #footer ul li{
        width:100%;height:100%;
        display:flex;flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    #footer ul li span{
        font-size:0.1rem;
    }
    #footer ul li i{
        font-size:0.167rem;
    }
    #footer ul .router-link-active i{
        color:#ff7643;
    }
</style>