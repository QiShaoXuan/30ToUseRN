const rewireMobX = require('react-app-rewire-mobx');

/* config-overrides.js */
module.exports = function override(config, env) {
  console.log(config,env)
  config = rewireMobX(config, env);
  return config;
}




const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {

  config = injectBabelPlugin(["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }], config);

  config = rewireMobX(config, env);

  return config;
};