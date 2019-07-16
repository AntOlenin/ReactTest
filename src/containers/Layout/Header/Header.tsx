import React from 'react';
import injectSheet from 'react-jss';
import { Classes } from '../../../theme';
import Text from '../../../components/Text';
import style from './style';

interface IProps {
  classes: Classes;
}

class Header extends React.PureComponent<IProps> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.logo} style={{ backgroundImage: `url(/images/logo.png)`}} />

        <div className={classes.menu}>
          <Text className={classes.menuItem}>Purchase</Text>
          <Text className={classes.menuItem}>My Orders</Text>
          <Text className={classes.menuItem}>Sell</Text>
        </div>
      </div>
    )
  }
}

export default injectSheet(style as any)(Header);
