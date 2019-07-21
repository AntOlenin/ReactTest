import React from 'react';
import injectSheet from 'react-jss';
import Layout from '../../containers/Layout';
import Link from '../../components/Link';
import Text from '../../components/Text';
import Logo from '../../components/Logo';
import style from './style';

class NotFoundPage extends React.Component<ICommonProps> {
  render() {
    const { classes } = this.props;

    return (
      <Layout contentClassName={classes.root}>
        <Logo />
        <Text block bold size="xl" className={classes.text} testId="notFoundText">404 - Not Found</Text>
        <Text block size="l" className={classes.text}>Sorry, the page you are looking fore does not exist.</Text>
        <Text block size="l" className={classes.text}>
          You can always go back to the <Link to="/" textProps={{ size: 'l' }}>homepage</Link>
        </Text>
      </Layout>
    )
  }
}

export default injectSheet(style)(NotFoundPage);
