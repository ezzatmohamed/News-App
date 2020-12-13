import {favoritesTable} from './components/tables'
import {linkInput} from './components/inputs/'
import {favoriteForm} from './components/form'


Nova.booting((Vue, router, store) => {

  Vue.component('favorites-table',favoritesTable) 
  Vue.component('link-input',linkInput)
  Vue.component('favorite-form',favoriteForm)

  Vue.component('story-book', require('./components/Tool'))
})
