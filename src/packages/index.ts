import type { IApp } from '@/types/app.type'
import { IAppType, IOpenType } from '@/types/app.type'
import { getAssetsImages } from '@/utils'

const appList: IApp[] = [
  {
    name: '音乐播放器',
    icon: getAssetsImages('apps/music163.svg'),
    key: 'music',
    type: IAppType.App,
    openType: IOpenType.Component,
    size: 'big',
    component: markRaw(defineAsyncComponent(() => import('./music/App.vue')))!,
    control: markRaw(defineAsyncComponent(() => import('./music/Control.vue')))!,
    medium: markRaw(defineAsyncComponent(() => import('./music/Medium.vue')))!,
    big: markRaw(defineAsyncComponent(() => import('./music/Big.vue')))!,
  },
  {
    name: '音乐播放器',
    icon: getAssetsImages('apps/music163.svg'),
    key: 'music1',
    type: IAppType.App,
    openType: IOpenType.Component,
    component: markRaw(defineAsyncComponent(() => import('./music/App.vue')))!,
  },
  {
    name: 'vueue文档',
    icon: getAssetsImages('apps/douyu.svg'),
    key: 'chat1',
    type: IAppType.App,
    openType: IOpenType.Iframe,
    pageUrl: 'https://vueuse.org/shared/useToggle/#usage',
  }, {
    name: 'vueue文档',
    icon: getAssetsImages('apps/music163.svg'),
    key: 'chat2',
    type: IAppType.App,
    openType: IOpenType.Iframe,
    pageUrl: 'https://vueuse.org/shared/useToggle/#usage',
  }, {
    name: 'vueue文档',
    icon: getAssetsImages('apps/music163.svg'),
    key: 'chat3',
    type: IAppType.App,
    size: 'medium',
    openType: IOpenType.Iframe,
    pageUrl: 'https://vueuse.org/shared/useToggle/#usage',
  }, {
    name: 'vueue文档',
    icon: getAssetsImages('apps/music163.svg'),
    key: 'chat4',
    type: IAppType.App,
    openType: IOpenType.Iframe,
    pageUrl: 'https://vueuse.org/shared/useToggle/#usage',
  }, {
    name: 'vueue文档',
    icon: getAssetsImages('apps/music163.svg'),
    key: 'chat5',
    type: IAppType.App,
    openType: IOpenType.Iframe,
    pageUrl: 'https://vueuse.org/shared/useToggle/#usage',
  },
  {
    name: 'app组',
    key: 'appGroup',
    type: IAppType.App,
    openType: IOpenType.Component,
    component: markRaw(defineAsyncComponent(() => import('./appGroup/index.vue')))!,
  },
]

export default appList
