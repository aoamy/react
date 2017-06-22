/**
 * Created by Administrator on 2017/6/20.
 */
const Webpack=require("webpack");
module.exports=new Webpack.optimize.UglifyJsPlugin({
	compress:true,//是否压缩和混淆
	beautify:true,//是否美化输出代码
	mangle:{
		//跳过这些
		except:['$super','$','exports','require']
	}
});