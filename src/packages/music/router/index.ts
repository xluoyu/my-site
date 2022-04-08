const router = [
  {
    path: '/music',
    name: 'music',
    component: () => import('../components/Layout.vue'),
    redirect: '/music/home',
    children: [
      {
        path: 'home',
        name: 'music-home',
        component: () => import('../views/home/index.vue'),
      },
    ],
  },
]

export default router
