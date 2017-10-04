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
    placeholder: 'https://jsonplaceholder.typicode.com',
    development: 'todo-soon ...localhost...',
    production: 'todo-soon ...herokuapp.com'
  },
  github: 'https://github.com/zeusbaba/demo-using-reactjs'
};
