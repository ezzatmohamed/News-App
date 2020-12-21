import { favoritesTable } from './components/tables'
import { linkInput, selectInput, formInput, buttonInput, multiselectInput, listItemInput, searchInput } from './components/inputs/'
import { favoriteForm } from './components/form'
import row from './components/row/row'
import pagination from './components/pagination/pagination'
import noResult from './components/noResult/noResult'
import { favoriteModule, createFavoriteModule, userModule } from './vuex/modules/'


Nova.booting((Vue, router, store) => {

  store.registerModule('favoriteModule', favoriteModule)
  store.registerModule('createFavoriteModule', createFavoriteModule)
  store.registerModule('userModule', userModule)

  Vue.component('favorites-table', favoritesTable)
  Vue.component('row', row)
  Vue.component('link-input', linkInput)
  Vue.component('select-input', selectInput)
  Vue.component('form-input', formInput)
  Vue.component('button-input', buttonInput)
  Vue.component('multiselect-input', multiselectInput)
  Vue.component('search-input', searchInput)
  Vue.component('favorite-form', favoriteForm)
  Vue.component('list-item-input', listItemInput)
  Vue.component('pagination', pagination)
  Vue.component('no-result', noResult)



  Vue.component('story-book', require('./components/Tool'))
})
