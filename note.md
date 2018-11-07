## 安装并初始化 react 文件

```bash
npm install create-react-app -g
create-react-app myproject
```

## 支持 mobx

1. rewrite create-react-app

   ```bash
   npm install react-app-rewired --save-dev
   npm install mobx mobx-react react-app-rewire-mobx --save
   ```

2. 添加 `config-overrides.js`  至根目录下

   ```js
   const rewireMobX = require('react-app-rewire-mobx');
   
   /* config-overrides.js */
   module.exports = function override(config, env) {
     config = rewireMobX(config, env);
     return config;
   }
   ```

3. 重写 `package.json`  中的 `script` 

   ```jso
    "scripts": {
       "start": "react-app-rewired start",
       "build": "react-app-rewired build",
       "test": "react-app-rewired test --env=jsdom",
       "eject": "react-scripts eject"
     },
   ```

4. 