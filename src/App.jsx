import React, { Component } from 'react';
import './App.css';

import {
  Admin, Resource, //Delete,
  jsonServerRestClient,
} from 'admin-on-rest';

import PostIcon from 'material-ui/svg-icons/action/book';
import CommentIcon from 'material-ui/svg-icons/communication/chat-bubble';
import { PostList, PostCreate, PostEdit, PostShow } from './PlaceholderPosts';
import { CommentList, CommentEdit, CommentCreate, CommentShow } from './PlaceholderComments';

import translations from './i18n';

const App = () => (
    <Admin
      title={'Learning-by-Doing'}
      restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}
      locale="en" messages={translations}
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
