import http from "@utils/request";
//首页上边--
export const shouyeApi =(city_id=0)=>http({
    method:"get",
    url:"/home/index/getClassifyHome",
    data:{
        city_id:city_id,
        abbreviation:'',
        version:'6.0.7',
        referer:2
    }
})
//热门演出
export const shouyeApire =(city_id=0)=>http({
    method:"get",
    url:"/home/index/getHotsRecommendList",
    data:{
        city_id:city_id,
        version:'6.0.7',
        referer:2
    }
})
//巡回演出
export const shouyeApixun =(city_id=0)=>http({
    method:"get",
    url:"/home/index/getTourRecommendList",
    data:{
        city_id:city_id,
        version:'6.0.8',
        referer:2
    }
})
//为你推荐
export const introApi =(city_id=0)=>http({
    method:"get",
    url:"/Show/Search/getShowList",
    data:{
        city_id:city_id,
        page:1,
        version:'6.0.8',
        referer:2
    }
})

//剧院
export const theatreApi =()=>http({
    method:"get",
    url:"/theatre/index/getTheatreList",
    data:{
        page:1,
        version:'6.0.8',
        referer:2
    }
})
//列表
export const listApi =(category=0)=>http({
    method:"get",
    url:"/Show/Search/getShowList",
    data:{
        category:category,
        city_id:0,
        page:1,
        keywords:'',
        version:'6.0.8',
        referer:2
    }
})

//列表的导航条
export const listNavApi =()=>http({
    method:"get",
    url:"/Search/getShowCategory",
    data:{
        version:'6.0.8',
        referer:2
    }
})
//详情页
export const detailApi =(schedular_id=103192)=>http({
    method:"get",
    url:"/Schedule/Schedule/getScheduleInfo",
    data:{
        schedular_id:schedular_id,
        version:'6.0.8',
        referer:2
    }
})
//搜索
export const searchApi =(keywords='')=>http({
    method:"get",
    url:"/Show/Search/getShowList",
    data:{
        keywords:keywords,
        page:1,
        sort_type:1,
        version:'6.0.8',
        referer:2
    }
})
//https://api.juooo.com/Show/Search/getShowList?keywords=ete&venue_id=&page=1&sort_type=1&version=6.0.8&referer=2