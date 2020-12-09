import {favoriteForm} from './components/form/'


Nova.booting((Vue, router, store) => {

  Vue.component('favorite-form',favoriteForm)
  
  router.addRoutes([
    {
      name: 'create-favorite',
      path: '/create-favorite',
      component: require('./components/Tool'),
    },
  ])
})



