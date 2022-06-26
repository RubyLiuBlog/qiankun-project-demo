import { registerMicroApps, start } from 'qiankun';
import './index.less';

/**
 * Step2 注册子应用
 */

registerMicroApps(
  [
    {
      name: 'react',
      entry: '//localhost:7100',
      container: '#subapp-container',
      activeRule: '/react',
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
 * Step4 启动应用
 */
start();

