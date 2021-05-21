// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following method:
// port = 9527 npm run dev OR npm run dev --port = 9527
const port = process.env.port || process.env.npm_config_port || 8888 // dev port
module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    pages: undefined,
    transpileDependencies: [],
    productionSourceMap: false,
    crossorigin: undefined,
    devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy:{
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: 'vue-base',
        
      },
}