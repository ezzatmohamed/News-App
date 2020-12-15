import {favoritesTable} from './components/tables'
import {linkInput,selectInput,formInput,buttonInput} from './components/inputs/'
import {favoriteForm} from './components/form'

import {favoriteModule,createFavoriteModule,userModule} from './vuex/modules/'
 

Nova.booting((Vue, router, store) => {

  store.registerModule('favoriteModule', favoriteModule) 
  store.registerModule('createFavoriteModule', createFavoriteModule)  
  store.registerModule('userModule', userModule)  

  Vue.component('favorites-table',favoritesTable) 
  Vue.component('link-input',linkInput)
  Vue.component('select-input',selectInput)
  Vue.component('form-input',formInput)
  Vue.component('button-input',buttonInput)
  Vue.component('favorite-form',favoriteForm)

  Vue.component('story-book', require('./components/Tool'))
})
  