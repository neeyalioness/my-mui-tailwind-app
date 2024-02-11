// craco.config.js
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    webpack: {
      configure: (webpackConfig) => {
        // Add the following rule to handle chart.js file
        webpackConfig.module.rules.push({
          test: /\.js$/,
          include: /node_modules\/chart\.js/,
          type: 'javascript/auto',
        });
  
        return webpackConfig;
      },
    },
  }