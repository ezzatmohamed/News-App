import {favoritesTable} from './components/tables/'


Nova.booting((Vue, router, store) => {

  Vue.component('favorites-table',favoritesTable)

  router.addRoutes([
    {
      name: 'favorites-grid',
      path: '/favorites-grid',
      component: require('./components/Tool'),
    },
  ])
})
