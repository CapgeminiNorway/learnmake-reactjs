import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {
  translate,
  changeLocale,
  ViewTitle,
} from 'react-admin';

import { changeTheme } from './customActions';
import withStyles from '@material-ui/core/styles/withStyles';
import compose from 'recompose/compose';

const styles = {
  label: { width: '10em', display: 'inline-block' },
  button: { margin: '1em' },
};

/* eslint-disable */
const Configuration = ({
  theme,
  locale,
  changeTheme,
  changeLocale,
  translate,
}) => (
  <Card>
    <ViewTitle title={translate('pos.configuration')} />
    <CardContent>
      <div style={styles.label}>{translate('pos.theme.name')}</div>
      <Button variant="raised"
        className={styles.button}
              color={theme === 'light' ? 'primary' : 'default'}
        onClick={() => changeTheme('light')}
      >
        {translate('pos.theme.light')}
      </Button>
      <Button variant="raised"
        className={styles.button}
              color={theme === 'dark' ? 'primary' : 'default'}
        onClick={() => changeTheme('dark')}
      >
        {translate('pos.theme.dark')}
      </Button>
    </CardContent>
    <CardContent>
      <div style={styles.label}>{translate('pos.language')}</div>
      <Button variant="raised"
              className={styles.button}
              color={locale === 'en' ? 'primary' : 'default'}
        onClick={() => changeLocale('en')}
      >
        {"English"}
      </Button>
      <Button variant="raised"
              className={styles.button}
              color={locale === 'nb' ? 'primary' : 'default'}
        onClick={() => changeLocale('nb')}
      >
        {"Norsk"}
      </Button>
    </CardContent>
  </Card>
);

/*const mapStateToProps = state => ({
  theme: state.theme,
  locale: state.locale,
});*/
const mapStateToProps = state => ({
  theme: state.theme,
  locale: state.i18n.locale,
});

/*export default connect(mapStateToProps, {
  changeLocale: changeLocaleAction,
  changeTheme: changeThemeAction,
})(translate(Configuration)); */
export default compose(
  connect(mapStateToProps, {
    changeLocale,
    changeTheme,
  }),
  translate,
  withStyles(styles)
)(Configuration);
