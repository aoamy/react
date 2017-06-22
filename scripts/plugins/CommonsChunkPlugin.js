/**
 * Created by Administrator on 2017/6/20.
 */
const Webpack=require("webpack");

module.exports = new Webpack.optimize.CommonsChunkPlugin( {
	names: [ 'vendor' ],
	minChunks: 2
} );