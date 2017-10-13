// eslint-disable-next-line
export const isDev = process.env.NODE_ENV !== 'production' ? true : false;

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
      id: '_id',
    },
  },
  backend: {
    placeholder: 'https://jsonplaceholder.typicode.com',
    development: 'todo: api...localhost...',
    production: 'todo: api...herokuapp.com',
  },
  github: 'https://github.com/zeusbaba/demo-using-reactjs',
};
