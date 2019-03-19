module.exports = {
    entry:["./Home.js","./style.scss"], 
    output: {
      filename: "Bundle.js"
    },
    watch: true,
    module: {
      rules: [{
          test: /\.scss$/,
          use: [{
              loader: "style-loader"
          }, {
              loader: "css-loader"
          }, {
              loader: "sass-loader",
              options: {
                  includePaths: ["absolute/path/a", "absolute/path/b"]
              }
          }]
      },
      {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
    ]
  }
};
  