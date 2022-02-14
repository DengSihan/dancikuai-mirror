import Vue from 'vue';
import VueRouter from 'vue-router';
import { scrollBehavior } from '~/utils';

Vue.use(VueRouter);

const page = path => () => import(`~/pages/${path}.vue`).then(m => m.default || m);

const routes = [
    {
        path: '/about-us/privacy-policy',
        name: 'about-us/privacy-policy',
        component: page('about-us/privacy-policy')
    },
    {
        path: '/about-us/contact-us',
        name: 'about-us/contact-us',
        component: page('about-us/contact-us')
    },
    {
        path: '/vocabulary-library',
        name: 'vocabulary-library',
        component: page('vocabulary-library/index')
    },
    {
        path: '/vocabulary-library/:id',
        name: 'vocabulary-library/show',
        component: page('vocabulary-library/show')
    },
    {
        path: '/vocabulary-library/mine',
        name: 'vocabulary-library/mine',
        component: page('vocabulary-library/mine')
    },
    {
        path: '/exams/npee',
        name: 'exams/npee',
        component: page('exams/npee/index')
    },
    {
        path: '/exams/ielts',
        name: 'exams/ielts',
        component: page('exams/ielts/index')
    },
    {
        path: '/feedbacks/accessibility',
        name: 'feedbacks/accessibility',
        component: page('feedbacks/accessibility')
    },
    {
        path: '/feedbacks/bugs',
        name: 'feedbacks/bugs',
        component: page('feedbacks/bugs')
    },
    {
        path: '/about-us/open-sources',
        name: 'about-us/open-sources',
        component: page('about-us/open-sources')
    },
    {
        path: '/wordbooks',
        component: page('wordbooks/layout'),
        props: true,
        children: [
            {
                path: '',
                name: 'wordbooks',
                component: page('wordbooks/index'),
                props: true
            },
            {
                path: 'create',
                name: 'wordbooks/create',
                component: page('wordbooks/create'),
                props: true
            },
            {
                path: ':id',
                name: 'wordbooks/show',
                component: page('wordbooks/show'),
                props: true
            },
            {
                path: ':id/edit',
                name: 'wordbooks/edit',
                component: page('wordbooks/edit'),
                props: true
            }
        ]
    },
    {
        path: '/account',
        name: 'account',
        component: page('account/index')
    },
    {
        path: '/account/study-logs',
        name: 'account/study-logs',
        component: page('account/study-logs')
    },
    {
        path: '/account/profile',
        name: 'account/profile',
        component: page('account/profile')
    },
    {
        path: '/logout',
        name: 'logout',
        component: page('logout')
    },
    {
        path: '/login',
        name: 'login',
        component: page('login')
    },
    {
        path: '/social-certificate/:certificate',
        name: 'social-certificate/certificate',
        component: page('social-certificate')
    },
    {
        path: '/',
        name: 'index',
        component: page('index')
    }
];

const defaultMeta = {
    transitionName: 'slide'
};

routes.forEach(route => {
    route.meta = route.meta ? route.meta : defaultMeta;
    if (!route.path.startsWith(`/:locale?`) && !route.path.startsWith(`/admin`)) {
        route.path = `/:locale?${route.path}`;
        route.props = true;
    }
});

export function createRouter(){
    return new VueRouter({
        routes,
        scrollBehavior,
        mode: 'history'
    });
}
