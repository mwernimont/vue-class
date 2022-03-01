import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './views/coaches/CoachDetail';
import CoachesList from './views/coaches/CoachesList';
import CoachRegistration from './views/coaches/CoachRegistration';
import ContactCoach from './views/requests/ContactCoaches';
import RequestReceived from './views/requests/RequestReceived';
import NotFound from './views/NotFound';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches',
    },
    {
      path: '/coaches',
      component: CoachesList,
    },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        {
          path: 'contact',
          component: ContactCoach,
        },
      ],
    },
    {
      path: '/register',
      component: CoachRegistration,
    },
    {
      path: '/requests',
      component: RequestReceived,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});

export default router;
