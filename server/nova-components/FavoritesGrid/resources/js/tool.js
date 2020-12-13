import {favoritesTable} from './../../../StoryBook/resources/js/components/tables'
import {linkInput} from './../../../StoryBook/resources/js/components/inputs/'
 
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
