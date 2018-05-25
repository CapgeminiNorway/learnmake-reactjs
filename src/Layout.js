import { connect } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { Layout } from 'react-admin';

export default connect(state => ({
  theme: state.theme === 'dark' ? createMuiTheme({
    palette: {
      type: 'dark',
    },
  }) : createMuiTheme({
    palette: {
      type: 'light',
    },
  }),
}))(Layout);
