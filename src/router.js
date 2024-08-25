import { createRouter, createWebHistory } from 'vue-router';

import Main from './components/Main.vue';
import Detail from './pages/Detail.vue';
import Projects from './pages/ProjectList.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
{
    path: '/',
    name: 'home',
    component: Main
},
{
    path: '/projects',
    name: 'projects',
    component: Projects
},
{
    path: '/detail/:slug',
    name: 'detail',
    component: Detail
},
]
});
export { router };