// import http from "@utils/request";
import {cityApi,cityApiSort} from "@api/city";
let state={
    hotList:JSON.parse(sessionStorage.getItem("hotList"))||[],
    SortList:JSON.parse(sessionStorage.getItem("SortList"))||[],
    nm:sessionStorage.getItem("nm")||'北京',
    id:sessionStorage.getItem("cityId")||5
}

let actions={
    async handleGetCityList({commit}){
        let data=await cityApi();
        console.log(data);
        commit("handleCityList",data.data.hot_city_List);
    },
    async handleGetSortList({commit}){
        let data=await cityApiSort();
        console.log(data);
        commit("handleCitySortList",data.data);
    }
}

let mutations={
    handleCityList(state,cities){
        state.hotList=cities;
        sessionStorage.setItem("hotList",JSON.stringify(state.hotList));
        
    },
    handleCitySortList(state,Sort){
        state.SortList=Sort;
        sessionStorage.setItem("SortList",JSON.stringify(state.SortList));
    },
    handleUpdateCityInfo(state,params){
        state.id=params.id;
        state.nm=params.name;
        sessionStorage.setItem("cityId",params.id);
        sessionStorage.setItem("nm",params.name);
    }
}

let getters={

}

export default{
    state,
    actions,
    mutations,
    getters,
    namespaced:true
}