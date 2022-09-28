
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/about', component: () => import('pages/about.vue') },
      { path: '/practice', component: () => import('pages/practice.vue') },
      { path: '/Wow', component: () => import('pages/Wow.vue') },
      { path: '/News', component: () => import('pages/News.vue') },
      { path: '/Pages', component: () => import('pages/Pages.vue') },
      { path: '/Contact', component: () => import('pages/Contact.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
