module.exports = {
    module: {
      rules: [
        { 
          test: /\.(ts|tsx|jsx)$/, 
          exclude: /node_modules/,
          use: "js-loader" 
        },
        { 
          test: /\.css$/, 
          use: ["style-loader", "css-loader", "postcss-loader"] 
        },
      ],
    },
  };
  