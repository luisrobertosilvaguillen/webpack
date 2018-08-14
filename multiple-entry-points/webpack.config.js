const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        home: path.resolve(__dirname, "src/js/index.js"),
        prices: path.resolve(__dirname, "src/js/prices.js"),
        contact: path.resolve(__dirname, "src/js/contact.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            //Aqui van los loaders
            {
                //test: que tipo de archivo quiero reconocer
                //use: que laoder se va a encargar del archivo
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use:"css-loader"
                }),
            }
        ]
    },
    plugins:[
        //Aqui van los plugins
        new ExtractTextPlugin("css/[name].css")
    ]
}
