import Form from './components/form/form.vue'


Nova.booting((Vue, router, store) => {

  Vue.component('Form',Form)
  
  router.addRoutes([
    {
      name: 'create-favorite',
      path: '/create-favorite',
      component: require('./components/Tool'),
    },
  ])
})



