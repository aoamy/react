/**
 * Created by Administrator on 2017/6/19.
 */
//.htm、.html文件使用 html-url-loader 来处理静态文件中的图片等资源地址
//处理具体方案以url-loader、file-loader设置为准
module.exports={
	test:/\.html?$/i,
	use: "html-url-loader"
};