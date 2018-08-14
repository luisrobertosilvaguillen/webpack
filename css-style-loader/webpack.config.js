const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            //Aqui van los loaders
            {
                //test: que tipo de archivo quiero reconocer
                //use: que laoder se va a encargar del archivo
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ]
    }
}
