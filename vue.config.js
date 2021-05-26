module.exports = {
    devServer: {
        // host: '192.168.10.10',
        port: 8081,
    },
    // 浏览器报错 :You are using the runtime-only build of Vue where the template compiler is not available.
    // Either pre-compile the templates into render functions, or use the compiler-included build.
    runtimeCompiler: true,
    publicPath: ''
}