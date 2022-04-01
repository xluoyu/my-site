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
    component: markRaw(defineAsyncComponent(() => import('./music/index')))!,
  }, {
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
]

export default appList
