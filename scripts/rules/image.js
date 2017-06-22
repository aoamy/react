/**
 * Created by Administrator on 2017/6/19.
 */

//图片、svg文件使用url-loader来处理，小于10kb的直接转为base64
module.exports={
	test:/\.(png|jpe?g|gif|svg)$/i,
	use:[{
		loader:"url-loader",
		options:{limit:10240,name:"assets/[name].[ext]"}
}]
};