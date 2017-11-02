import businessList from './business-list.vue'

const routes = [
  {
    path: 'list',
    name: 'businessList',
    component: businessList,
    meta: {
      title: '商家列表',
      sidebarLink: '/business/list'
    },
  },
  {
    path: 'add',
    name: 'businessAdd',
    component: businessList,
    meta: {
      title: '添加商家',
      sidebarLink: '/business/list'
    },
  },
  {
    path: 'edit/:id',
    name: 'businessAdd',
    component: businessList,
    meta: {
      title: '修改商家',
      sidebarLink: '/business/list'
    },
  },
  {
    path: 'detail/:id',
    name: 'businessAdd',
    component: businessList,
    meta: {
      title: '商家详情',
      sidebarLink: '/business/list'
    },
  },
  {
    path: 'type',
    name: 'businessAdd',
    component: businessList,
    meta: {
      title: '商家详情',
      sidebarLink: '/business/list'
    },
  },
]

export default routes
