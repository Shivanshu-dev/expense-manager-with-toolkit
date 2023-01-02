const path = require('path');


module.exports = {
    entry: './src/app.js', // entry value to webpacke
    output : {
        path:path.join(__dirname , 'public'), // absolute path given to the directory and folder
        filename:'bundle.js' // output the result as this final file
    },
    // module to specify set of rules to apply with certain loader for certain files
    module : {
        rules: [{
            loader:'babel-loader', // loader to use
            test: /.js$/,  // test files with this extension
            exclude:/node_modules/ // exclude this folder to test
        },
    {
        test: /.s?css$/,
        use : ['style-loader' , 'css-loader' , 'sass-loader'], // array of loaders
    }]
    },
    devtool:'eval-cheap-source-map' // brings the error to the exact file in console rather than main file
}

// loaders are used to transform a file and do something with it like transform scss to css and
// jsx to javascript