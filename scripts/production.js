/**
 * 最终产品环境配置
 * Created by Administrator on 2017/6/19.
 */

/**
 *开发环境配置（webpack-dev-server）
 * Created by Administrator on 2017/6/19.
 */

const Path = require( 'path' );

const ROOT = Path.resolve( __dirname, '../' );
const SRC_DIR = Path.resolve( ROOT, 'src' );
const DIST_DIR = Path.resolve( ROOT, 'dist' );
const TPL_DIR = Path.resolve( SRC_DIR, 'tpl' );

const loader = { rules: [] };
const plugins = [];

//css内容提取成独立文件
const scssExtractor = require('./plugins/ExtractTextWebpackPlugin');


//组织加载器列表
// loader.rules.push(require('rules/scss'));
// loader.rules.push(require('rules/scss'));
// loader.rules.push(require('rules/scss'));
loader.rules.push(
	require( './rules/scss' )( scssExtractor ),
	require( './rules/fonts' ),
	require( './rules/image' ),
	require( './rules/html' ),
	require('./rules/typescript')
);

//组织插件列表
plugins.push(
	scssExtractor,
	require('./plugins/WebpackDelPlugin')(DIST_DIR),	//webpack-del-plugin
	require('./plugins/UglifyJsPlugin'),    //UglifyJsPlugin
	require('./plugins/CommonsChunkPlugin')
);

//模板页面列表
const pages = require( './plugins/HtmlWebpackPlugin' )( TPL_DIR );
Array.prototype.push.apply( plugins, pages );

module.exports = {
	entry: {
		// index:'./src/app.js'
		app: Path.resolve( SRC_DIR, 'app.tsx' ),
		 vendor:['react','react-dom']
	},
	output: {
		filename: "js/[name].js",
		path: DIST_DIR
		//publicPath: "dist/static/"
		//publicPath: "../"
	},
	externals:{
		'react':'React',
		'react-dom':'ReactDOM'
	},
	module: loader,
	plugins: plugins,
	resolve:{
		extensions:['.scss','.js','.ts','.tsx','.json']
	}
};