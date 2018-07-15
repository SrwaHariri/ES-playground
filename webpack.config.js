var path = require('path');
module.exports={
    mode: 'development',
    entry:['./App/index.js'],
    output:{
        path: path.resolve(__dirname, "./build"),
        filename: 'bundle.js'
    }
}