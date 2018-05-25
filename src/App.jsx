import React, { Component } from 'react';
import './App.css';

import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import GitHubForkRibbon from 'react-github-fork-ribbon';

import PostIcon from '@material-ui/icons/Book';
import CommentIcon from '@material-ui/icons/ChatBubble';
import { PostList, PostShow } from './pages/PlaceholderPosts';
import { CommentList, CommentShow } from './pages/PlaceholderComments';

import Layout from './Layout';
import translations from './i18n';
import customRoutes from './common/customRoutes';
import Menu from './common/Menu';
import themeReducer from './common/themeReducer';
import { myConfig } from './common/MyConfig';

import Dashboard from './common/Dashboard';

import BrowserDetection from 'react-browser-detection';

import { createMuiTheme } from '@material-ui/core/styles';

import createHistory from 'history/createBrowserHistory';
const history = createHistory();

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

const i18nProvider = locale => translations[locale];

function ShowMainApp(props) {// eslint-disable-line
  return (
    <div>
      <div>
        <Admin
          title={'Learn -> Make -> Share!'}
          dataProvider={jsonServerProvider(myConfig.backend.placeholder)}
          theme={theme}
          locale="nb"
          i18nProvider={i18nProvider}
          history={history}
          appLayout={Layout}
          customRoutes={customRoutes}
          customReducers={{ theme: themeReducer }}
          menu={Menu}
          dashboard={Dashboard}
        >
          <Resource
            name="posts"
            list={PostList}
            show={PostShow}
            //create={PostCreate} edit={PostEdit}  remove={Delete}
            icon={PostIcon}
          />
          <Resource
            name="comments"
            list={CommentList}
            show={CommentShow}
            //create={CommentCreate}  edit={CommentEdit} remove={Delete}
            icon={CommentIcon}
          />
          <Resource name="tags" />
        </Admin>
      </div>

      <div>
        <GitHubForkRibbon
          href={myConfig.github}
          target="_blank"
          //position="left-bottom"
          position="right"
          color="black"
        >
          Source on GitHub!
        </GitHubForkRibbon>
      </div>
    </div>
  );
}

/* eslint-disable */
function BadBrowser(props) {
  return (
    <div>
      Unfortunately you are still using <em>{props.browser}?!</em> which we dont
      support... <br />
      Please use <em>a decent browser</em> like Chrome, Firefox, Safari.
    </div>
  );
}
const browserHandler = {
  ie: browser => <BadBrowser browser={browser} />,
  default: (browser) => <ShowMainApp browser={browser} />,
};

class App extends Component {
  render() {
    return <BrowserDetection>{browserHandler}</BrowserDetection>;
  }
}
export default App;
