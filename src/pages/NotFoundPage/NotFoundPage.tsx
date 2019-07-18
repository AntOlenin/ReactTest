import React from 'react';
import injectSheet from 'react-jss';
import Layout from '../../containers/Layout';
import Text from '../../components/Text';
import Logo from '../../components/Logo';
import style from './style';

class NotFoundPage extends React.Component<ICommonProps> {
  render() {
    const { classes } = this.props;

    return (
      <Layout contentClassName={classes.root}>
        <Logo />
        <Text block bold size="xl" className={classes.text}>404 - Not Found</Text>
        <Text block size="l" className={classes.text}>Sorry, the page you are looking fore does not exist.</Text>
        <Text block size="l" className={classes.text}>You can always go back to the homepage</Text>
      </Layout>
    )
  }
}

export default injectSheet(style)(NotFoundPage);
