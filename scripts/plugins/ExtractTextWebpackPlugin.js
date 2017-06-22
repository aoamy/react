/**
 * Created by Administrator on 2017/6/20.
 */

const ExractTextPlugin = require( 'extract-text-webpack-plugin' );
module.exports = new ExractTextPlugin(
	{
		filename: "css/[name].css?[contenthash:5]",
		allChunks: true
	}
);
