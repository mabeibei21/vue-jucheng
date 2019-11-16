import http from '@utils/request';

//performance接口/电影搜索

export const performanceApi = (group_id = 228, page = 1, km, ) => http({
    method: "get",
    url: "/card/index/getExchangeList",
    data: {
        group_id: group_id,
        page: page,
        show_name: km,
    }
})
//接口/电影详情页

export const movieDetailApi = (schedular_id = 107453) => http({
    method: "get",
    url: "/Schedule/Schedule/getScheduleInfo",
    data: {
        schedular_id: schedular_id,
    }
})