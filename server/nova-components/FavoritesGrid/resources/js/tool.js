import {favoritesTable} from './components/tables/'
import linkInput from './components/linkInput/linkInput'

Nova.booting((Vue, router, store) => {

  Vue.component('favorites-table',favoritesTable)
  Vue.component('link-input',linkInput)

  router.addRoutes([
    {
      name: 'favorites-grid',
      path: '/favorites-grid',
      component: require('./components/Tool'),
    },
  ]) 
})
