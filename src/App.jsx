import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

import Layout from './Layout';
import translations from './i18n';
import customRoutes from './common/customRoutes';
import Menu from './common/Menu';
import themeReducer from './common/themeReducer';
import { myConfig } from './common/MyConfig';

import VisualizeNAV from './pages/VisualizeNAV';

import BrowserDetection from 'react-browser-detection';

import createHistory from 'history/createBrowserHistory';
const history = createHistory();

/* // TODO create custom theme
import {
  cyan500, cyan700, orangeA500, orangeA700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
const myTheme = {
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
      primary1Color: orangeA500, //cyan500,
      primary2Color: orangeA700, //cyan700,
      primary3Color: grey400,
      accent1Color: pinkA200,
      accent2Color: grey100,
      accent3Color: grey500,
      textColor: darkBlack,
      alternateTextColor: white,
      canvasColor: white,
      borderColor: grey300,
      disabledColor: fade(darkBlack, 0.3),
      pickerHeaderColor: cyan500,
      clockCircleColor: fade(darkBlack, 0.07),
      shadowColor: fullBlack,
    },
};*/


const browserHandler = {
  ie: (browser) => (
    <div>
      Unfortunately you are still using <em>{browser}</em> which we dont support... <br/>
      Please use <em>a decent browser</em> like Chrome, Firefox, Safari.
    </div>
  ),
  default: () => (
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
        //theme={getMuiTheme(myTheme)}
        locale="nb" messages={translations}
        history={history}
        appLayout={Layout}
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
  ),
};

//const App = () => (
class App extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    // FIXME const { translate } = this.context;
    return (
      <BrowserDetection>
        {browserHandler}
      </BrowserDetection>
    );
  }
}

/*App.contextTypes = {
    translate: PropTypes.func,
};*/

export default App;
