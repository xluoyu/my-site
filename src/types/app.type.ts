import type { DefineComponent } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

export enum IOpenType {
  Component = 'Component', // 内部组件
  Iframe = 'Iframe', // Iframe
  Qiankun = 'Qiankun', // Qiankun
  Blank = 'Blank', // 新页面
  Router = 'Router', // 子路由
}

export enum IAppType {
  App = 'App', // 普通应用
  Tool = 'Tool', // 窗口工具
  AppArray = 'AppArray', // 应用组
}

interface _IApp {
  name: string // app名称
  icon?: string // 图标
  key: string
  type: IAppType // 应用类型
  size?: 'big' | 'medium' | 'small' // 尺寸
  status?: boolean // 开发状态
  children?: IApp[] // 应用组
}

// 当 openType == 组件时，component 必填
interface _IApp_Component extends _IApp {
  openType: IOpenType.Component
  component: DefineComponent<{}, {}, any>
  control?: DefineComponent<{}, {}, any>
  medium?: DefineComponent<{}, {}, any>
  big?: DefineComponent<{}, {}, any>
  small?: DefineComponent<{}, {}, any>
}

// 当 openType == 其余时，pageUrl 必填
interface _IApp_Url extends _IApp {
  openType: IOpenType.Iframe | IOpenType.Blank | IOpenType.Qiankun
  pageUrl: string
}

interface _IApp_Router extends _IApp {
  openType: IOpenType.Router
  router: any
}

export type IApp = _IApp_Component | _IApp_Url
