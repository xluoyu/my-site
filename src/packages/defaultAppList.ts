import type { IAppSize } from '@/types/app.type'

export interface userAppOptions {
  id: string
  name: string
  key: string
  size?: IAppSize
  w?: Number
  h?: number
  children?: {
    id: string
    name: string
    key: string
  }[]
}

export const defaultApps: userAppOptions[] = [
  {
    id: '1',
    name: '音乐播放器',
    key: 'music',
    size: 'big',
  },
  {
    id: '2',
    name: 'vueue文档',
    key: 'chat1',
  },
  {
    id: '3',
    name: 'app组',
    key: 'appGroup',
    size: 'big',
    children: [
      {
        id: '12',
        name: 'vueue文档12',
        key: 'chat4',
      },
      {
        id: '14',
        name: 'vueue文档14',
        key: 'chat5',
      },
    ],
  },
]
