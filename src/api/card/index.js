import http from '@utils/request';

// 轮播图接口
export const cardList1Api = _ => http({
    method: "get",
    url: "/Card/index/hotBanner",
})
//  CardList接口
export const cardList2Api = (version = "6.0.7", referer = 2) => http({
    method: "get",
    url: "/Card/index/getCardGroupList",
    data: {
        version: version,
        referer: referer
    }
})
// Vip+接口
export const cardList3Api = (version = "6.0.7", referer = 2) => http({
    method: "get",
    url: "/vip/index/getVipRule",
    data: {
        version: version,
        referer: referer
    }
})
// 详情页详情接口
export const detailCardApi = (group_id = 260) => http({
    method: "get",
    url: "/Card/index/cardInfo",
    data: {
        group_id: group_id,
    }
})
// 详情页接口
export const detailCardListApi = (group_id = 228) => http({
    method: "get",
    url: "/Card/index/getCardExchangeList",
    data: {
        group_id: group_id,
    }
})
// 剧院
export const getCinema = () => http({
    method: "get",
    url: "/theatre/index/getTheatreList",
})