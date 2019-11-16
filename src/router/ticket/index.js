export default{
    path:"/ticket",
    component:_=>import("@pages/ticket"),
    name:"ticket",
    meta:{
        flag:true,
        requiredAuth:false
    }
}