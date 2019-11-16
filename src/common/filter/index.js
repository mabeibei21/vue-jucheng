import Vue from "vue";
Vue.filter("toImg",(url,offset)=>{
    return url.replace(/w\.h/,offset)
})

Vue.filter(
   " goToNextPage",(url,id)=>{
        if(id<=5){
          return 'list'
        }else if(id==17){
          return 'gatherCard'
        }else if(id==19){
          return 'vvv'
        }
  } )