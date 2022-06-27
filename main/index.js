// import { registerMicroApps, start } from 'qiankun';
import { registerMicroApps, start } from 'rubyliu-micro-front';
import './index.less';

/**
 * Step1 注册子应用
 */

registerMicroApps(
  [
    {
      name: 'react',
      entry: '//localhost:7100', // 子应用的 HTML 入口
      container: '#subapp-container',  // 渲染到哪里
      activeRule: '/react', // 路由匹配规则
    },
    {
      name: 'vue2',
      entry: '//localhost:7101',
      container: '#subapp-container',
      activeRule: '/vue2',
    },
    {
      name: 'vue3',
      entry: '//localhost:7105',
      container: '#subapp-container',
      activeRule: '/vue3',
    },
  ],
);

/**
 * Step2 启动应用
 */
start();

