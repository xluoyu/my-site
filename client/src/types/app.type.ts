import { DefineComponent } from 'vue'

export enum IOpenType {
  Component = 'Component', // 内部组件
  Iframe = 'Iframe', // Iframe
  Qiankun = 'Qiankun', // Qiankun
  Blank = 'Blank', // 新页面
}

export enum IAppType {
  App = 'App', // 普通应用
  Tool = 'Tool', // 窗口工具
  AppArray = 'AppArray' // 应用组
}

export interface IApp {
  name: string; // app名称
  icon?: string; // 图标
  key: string,
  openType: IOpenType; // 打开方式
  type: IAppType; // 应用类型
  /**
   * 占据位置
   * [宽， 高]
   */
  size?: [number, number];
  status?: boolean; // 开发状态
  children?: IApp[]; // 应用组
  pageUrl?: string; // 外部链接
  component?: DefineComponent<{}, {}, any>
}
