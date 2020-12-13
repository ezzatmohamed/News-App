

Nova.booting((Vue, router, store) => {

  
  router.addRoutes([
    {
      name: 'create-favorite',
      path: '/create-favorite',
      component: require('./components/Tool'),
    },
  ])
})



