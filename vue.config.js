//设置配置(此文件)
const path = require("path");

module.exports = {
    devServer: {
        //相关配置
        proxy: {
            //设置代理
            "/home": {
                target: "https://api.juooo.com",
                changeOrigin: true
            },
            "/theatre": {
                target: "https://api.juooo.com",
                changeOrigin: true
            },
            "/city": {
                target: "https://api.juooo.com",
                changeOrigin: true
            },
            "/Show": {
                target: "https://api.juooo.com",
                changeOrigin: true
            },
            "/Search": {
                target: "https://m.juooo.com",
                changeOrigin: true
            },
            "/Schedule": {
                target: "https://api.juooo.com",
                changeOrigin: true
            },
            //https://api.juooo.com/Show/Search/getShowList?keywords=ete&venue_id=&page=1&sort_type=1&version=6.0.8&referer=2
        },
    },
    //https://api.juooo.com/Schedule/Schedule/getScheduleInfo?schedular_id=103192&version=6.0.8&referer=2
    configureWebpack: {
        resolve: {
            alias: {
                //别名
                "@": path.join(__dirname, "./src"),
                "@api": path.join(__dirname, "./src/api"),
                "@assets": path.join(__dirname, "./src/assets"),
                "@common": path.join(__dirname, "./src/common"),
                "@components": path.join(__dirname, "./src/components"),
                "@pages": path.join(__dirname, "./src/pages"),
                "@router": path.join(__dirname, "./src/router"),
                "@store": path.join(__dirname, "./src/store"),
                "@utils": path.join(__dirname, "./src/utils"),
            }
        }
    }
}