import {favoritesTable} from './components/tables'
import {linkInput} from './components/inputs/'
import {favoriteForm} from './components/form'

import {favoriteModule,createFavoriteModule} from './vuex/modules/'
 

Nova.booting((Vue, router, store) => {

  store.registerModule('favoriteModule', favoriteModule) 
  store.registerModule('createFavoriteModule', createFavoriteModule)  

  Vue.component('favorites-table',favoritesTable) 
  Vue.component('link-input',linkInput)
  Vue.component('favorite-form',favoriteForm)

  Vue.component('story-book', require('./components/Tool'))
})
  