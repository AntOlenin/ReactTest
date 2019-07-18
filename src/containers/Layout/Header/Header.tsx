import React from 'react';
import injectSheet from 'react-jss';
import { Classes } from '../../../theme';
import Text from '../../../components/Text';
import Logo from '../../../components/Logo';
import style from './style';

interface IProps {
  classes: Classes;
}

class Header extends React.PureComponent<IProps> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Logo />

        <div className={classes.menu}>
          <Text className={classes.menuItem}>Purchase</Text>
          <Text className={classes.menuItem}>My Orders</Text>
          <Text className={classes.menuItem}>Sell</Text>
        </div>
      </div>
    )
  }
}

export default injectSheet(style)(Header);
