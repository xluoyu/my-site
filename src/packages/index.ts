import type { IApp } from '@/types/app.type'
import { IAppType, IOpenType } from '@/types/app.type'

const appList: IApp[] = [
  {
    name: '音乐聊天室',
    icon: '/apps/music163.svg',
    key: 'chat',
    type: IAppType.App,
    openType: IOpenType.Component,
    component: markRaw(defineAsyncComponent(() => import('./music/index.vue')))!,
  }, {
    name: 'vueue文档',
    icon: '/apps/douyu.svg',
    key: 'chat1',
    type: IAppType.App,
    openType: IOpenType.Iframe,
    pageUrl: 'https://vueuse.org/shared/useToggle/#usage',
  }, {
    name: 'vueue文档',
    icon: '/apps/bilibili2.svg',
    key: 'chat2',
    type: IAppType.App,
    openType: IOpenType.Iframe,
    pageUrl: 'https://vueuse.org/shared/useToggle/#usage',
  }, {
    name: 'vueue文档',
    icon: '/apps/fliggy.svg',
    key: 'chat3',
    type: IAppType.App,
    openType: IOpenType.Iframe,
    pageUrl: 'https://vueuse.org/shared/useToggle/#usage',
  }, {
    name: 'vueue文档',
    icon: '/apps/jd.svg',
    key: 'chat4',
    type: IAppType.App,
    openType: IOpenType.Iframe,
    pageUrl: 'https://vueuse.org/shared/useToggle/#usage',
  }, {
    name: 'vueue文档',
    icon: '/apps/taobao.svg',
    key: 'chat5',
    type: IAppType.App,
    openType: IOpenType.Iframe,
    pageUrl: 'https://vueuse.org/shared/useToggle/#usage',
  }, {
    name: 'vueue文档',
    icon: '/apps/tmall.svg',
    key: 'chat6',
    type: IAppType.App,
    openType: IOpenType.Iframe,
    pageUrl: 'https://vueuse.org/shared/useToggle/#usage',
  }, {
    name: 'vueue文档',
    icon: '/apps/zhihu.svg',
    key: 'chat7',
    type: IAppType.App,
    openType: IOpenType.Iframe,
    pageUrl: 'https://vueuse.org/shared/useToggle/#usage',
  },
]

export default appList
