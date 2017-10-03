export const myConfig = {
  authentication: {
    path: '/authentication',
    header: 'Authorization',
    service: 'users',
    storageKey: 'demo-jwt',
    clientOptions: {
      storageKey: 'demo-jwt',
      cookie: 'demo-jwt',
      authenticate: { strategy: 'local' },
    },
    restClientOptions: {
      id: '_id'
    }
  },
  backend: {
    development: 'todo-soon ...localhost...',
    production: 'todo-soon ...herokuapp.com'
  }
};
