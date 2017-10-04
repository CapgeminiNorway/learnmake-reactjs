import React, { Component, PropTypes } from 'react';
import './App.css';

import {
  Admin, Resource, //Delete,
  jsonServerRestClient,
  translate
} from 'admin-on-rest';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import GithubCorner from 'react-github-corner';

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

import VisualizeNAV from './pages/VisualizeNAV';

import createHistory from 'history/createBrowserHistory';
const history = createHistory();


//const App = () => (
class App extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    // FIXME const { translate } = this.context;
    return (
      <div>

        <GithubCorner
          href={myConfig.github}
          bannerColor="#70B7FD"
          octoColor="#fff"
          width={128}
          height={128}
          direction="right"
        />

        <Admin
          title={'Learn -> Make -> Share!'}
          // TODO title={translate('pos.main.title')}
          restClient={jsonServerRestClient(myConfig.backend.placeholder)}
          theme={getMuiTheme(lightBaseTheme)}
          locale="nb" messages={translations}
          history={history}
          customRoutes={customRoutes}
          customReducers={{ theme: themeReducer }}
          menu={Menu}
          dashboard={VisualizeNAV}
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

      </div>
    );
  }
}

/*App.contextTypes = {
    translate: PropTypes.func,
};*/

export default App;
