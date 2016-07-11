/**
 * Created by czzou on 2016/1/18.
 */
var webpack=require('webpack');
module.exports={
    //定义入口文件，多个时value是一个对象
    // key 入口文件name
    // value 对应的文件路径
    // value [] 对应的模块，抽取公共模块时，用于配置模块范围
    entry:{
        main:"./src/js/main.jsx",
        react:["react","react-dom"]
    },
    output:{
        path:"dist/js",
        filename:"[name].js"
    },
    module:{
       loaders:[
           {test:/\.js[x]?$/,exclude:/node_modules/,loader: 'babel-loader?presets[]=es2015&presets[]=react'}
       ]
    },
    // 提取公共模块的中间件
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'react', /* filename= */'react.js')
    ]
}