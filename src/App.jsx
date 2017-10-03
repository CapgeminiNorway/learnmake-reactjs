import React, { Component } from 'react';
import './App.css';

import {
  Admin, Resource, //Delete,
  jsonServerRestClient,
} from 'admin-on-rest';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import PostIcon from 'material-ui/svg-icons/action/book';
import CommentIcon from 'material-ui/svg-icons/communication/chat-bubble';
import {
  PostList, PostCreate, PostEdit, PostShow
} from './pages/PlaceholderPosts';
import {
  CommentList, CommentEdit, CommentCreate, CommentShow
} from './pages/PlaceholderComments';

import translations from './i18n';
import customRoutes from './common/customRoutes';
import Menu from './common/Menu';
import themeReducer from './common/themeReducer';
import { myConfig } from './common/MyConfig';

import createHistory from 'history/createBrowserHistory';
const history = createHistory();

const App = () => (
    <Admin
      title={'Learning by Doing...'}
      restClient={jsonServerRestClient(myConfig.backend.placeholder)}
      theme={getMuiTheme(lightBaseTheme)}
      locale="en" messages={translations}
      history={history}
      customRoutes={customRoutes}
      customReducers={{ theme: themeReducer }}
      menu={Menu}
      >

    <Resource name="posts"
      list={PostList} show={PostShow}
      //create={PostCreate} edit={PostEdit}  remove={Delete}
      icon={PostIcon} />
    <Resource name="comments"
      list={CommentList} show={CommentShow}
      //create={CommentCreate}  edit={CommentEdit} remove={Delete}
      icon={CommentIcon} />
    <Resource name="tags" />

    </Admin>
);

export default App;
