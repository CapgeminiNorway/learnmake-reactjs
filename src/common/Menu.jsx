import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { MenuItemLink, translate } from 'react-admin';

import IconInfo from '@material-ui/icons/Info';
import IconSettings from '@material-ui/icons/Settings';
import PostIcon from '@material-ui/icons/Book';
import CommentIcon from '@material-ui/icons/ChatBubble';
import IconCode from '@material-ui/icons/Code';
import Divider from '@material-ui/core/Divider';

//import { isDev } from './MyConfig';

const Menu = ({ resources, onMenuClick, translate }) => ( // eslint-disable-line
  <div>

    <MenuItemLink
      key="visnav"
      to="/visnav"
      leftIcon={<IconCode style={{ fontSize: 32 }} />}
      primaryText={translate(`pos.vis.nav`)}
      onClick={onMenuClick}
    />

    <MenuItemLink
      key="visexample"
      to="/visexample"
      leftIcon={<IconCode style={{ fontSize: 32 }} />}
      primaryText={translate(`pos.vis.example`)}
      onClick={onMenuClick}
    />

    <Divider />

    {/* <MenuItem
      key="gqlexample"
      containerElement={<Link to={`/gqlexample`} />}
      primaryText={translate(`pos.gql.example`)}
      leftIcon={<IconCode />}
      //onTouchTap={onMenuTap}
    /> */}

    <Divider />
    <MenuItemLink
      key="posts"
      to="/posts"
      leftIcon={<PostIcon style={{ fontSize: 32 }} />}
      primaryText={translate(`resources.posts.name`, { smart_count: 2 })}
      onClick={onMenuClick}
    />
    {/* <MenuItemLink
      key="comments"
      to="/comments"
      leftIcon={<CommentIcon style={{ fontSize: 32 }} />}
      primaryText={translate(`resources.comments.name`, { smart_count: 2 })}
      onClick={onMenuClick}
    /> */}

    <MenuItemLink
      key="config"
      to="/config"
      leftIcon={<IconSettings style={{ fontSize: 32 }} />}
      primaryText={translate(`pos.configuration`)}
      onClick={onMenuClick}
    />

    <Divider />
    <MenuItemLink
      key="tbd"
      to="/tbd"
      leftIcon={<IconInfo style={{ fontSize: 32 }} />}
      primaryText="TBD"
      onClick={onMenuClick}
    />

    {/*
          <Divider />
         {logout}
        */}
  </div>
);

const enhance = compose(
  connect(state => ({
    theme: state.theme,
    locale: state.locale,
  })),
  translate,
);

export default enhance(Menu);
