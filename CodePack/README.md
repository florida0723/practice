CodePack
========
用法：
1.安装svn命令行工具，安装nodejs
2.在Addversion.js 或者Addversion_web.js里边写入配置
var config={
    username:'svn用户名',
    password:'svn密码',
    svnPath:'http://svn.sogou-inc.com/svn/qadev/Venus/MobileCloud/MobileCloud',//项目地址
    projectName:'MobileCloud'//项目文件夹名称，用来读取文件以及拼接文件路径
};
3.运行 startup.bat  或者  startupByWeb.bat。后者需要访问一个地址，适合远程部署使用，可以通过访问远程ip的8080端口来运行。
4.在NodeServer\NodeServer 目录下，会生成添加好版本号的文件

支持处理的文件：
html、htm、jsp、aspx文件中，以相对路径载入的本站点下的js文件和css文件。标签、属性写法随意，符合浏览器规则就OK。
<script src='../../aaa/dd.js'></script>  会被替换为<script src='../../aaa/dd.js?v=svn版本号'></script>
<link rel='stylesheet' href='xxx/xxx.css'></link>  会被替换为 <link rel='stylesheet' href='xxx/xxx.css?v=svn版本号'></link>

不支持处理的文件：
1.跨站点加载的文件 <script src='http://xxx/xxx/xxx.js'></script>  没有svn版本号
2.绝对路径的方式加载的资源