import { lazy } from 'react';

interface IRoute {
  name: string;
  icon?: string;
  path?: string;
  component?: React.LazyExoticComponent<() => JSX.Element> | (() => JSX.Element)
  children?: IRoute[]
}

const routes:IRoute[] = [
  {path: 'index', icon: 'FundOutlined', name: '仪表盘', component: lazy(() => import('../views/Index'))},
  {
    name: '系统管理',
    icon: 'SettingOutlined',
    children: [
      { name: '权限配置' },
      { name: '账号管理' },
      { name: '数据统计' },
    ]
  },
  {
    name: '文章管理',
    icon: 'ReadOutlined',
    children: [
      { name: '线上文章' },
      { name: '草稿箱' },
      { name: '标签管理' },
    ]
  },
];

export default routes