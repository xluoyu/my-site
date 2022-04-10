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
      {
        path: 'search',
        name: 'music-search',
        component: () => import('../views/search/index.vue'),
      },
      {
        path: 'artist',
        name: 'music-artist',
        component: () => import('../views/search/artist.vue'),
      },
    ],
  },
]

export default router
