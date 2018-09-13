import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: '首页',
			component: () => import('../pages/layout/Layout.vue'),
			redirect: '/page1',
			children: [
				{
					path: 'page1',
					name: 'page1',
					component: () => import('../pages/page1/Page1.vue'),
				},
				{
					path: 'page2',
					name: 'page2',
					component: () => import('../pages/page2/Page2.vue'),
				},
				{
					path: 'page3',
					name: 'page3',
					component: () => import('../pages/page3/Page3.vue'),
				}
			]
		}
	]
})