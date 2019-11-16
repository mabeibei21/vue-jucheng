import http from "@utils/request";
export const cityApi=()=>http({
    method:"get",
    url:"/city/city/getHotCityList",
    data:{
        version:'6.0.8',
        referer:2
    }
})
export const cityApiSort=()=>http({
    method:"get",
    url:"/city/city/getSortedCityList",
    data:{
        version:'6.0.8',
        referer:2
    }
})
/////city/city/getSortedCityList?version=6.0.8&referer=2