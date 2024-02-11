// config-overrides.js
module.exports = function override(config, env) {
    // Add the @babel/plugin-proposal-class-properties plugin
    config.module.rules.forEach(rule => {
      if (rule.oneOf) {
        rule.oneOf.forEach(loader => {
          if (loader.loader && loader.loader.includes('babel-loader')) {
            loader.options.plugins.push('@babel/plugin-proposal-class-properties');
          }
        });
      }
    });
  
    return config;
  };
  