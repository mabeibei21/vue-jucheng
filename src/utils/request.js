import axios from "axios";

const server=axios.create({
    timeout:5000,
    //baseUrl:"",
    withCredentials:true
    //跨域请求的时候是否需要凭证
})

//请求的拦截

server.interceptors.request.use((config)=>{
    //请求成功的时候
    if(config.method=="get"){
        config.params={...config.data};
    }
    return config;
    //config.headers["content-type"]="application/json"
},(err)=>{
    return Promise.reject(err);
})

//响应的拦截
server.interceptors.response.use((res)=>{
    if(res.status==200){
        return res.data;
    }
},(err)=>{
    return Promise.reject(err)
})

export default server;