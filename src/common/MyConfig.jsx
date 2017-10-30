export const isDev = process.env.NODE_ENV !== 'production' ? true : false; // eslint-disable-line

export const isLocalHost = hostname => {
  // call like this; isLocalHost(window.location.hostname)
  return !!(
    hostname === 'localhost' ||
    hostname === '[::1]' ||
    hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
  );
};

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
  github: 'https://github.com/CapgeminiNorway/using-reactjs',
  heroku: 'https://using-reactjs.herokuapp.com',
};
