import React from 'react';
import injectSheet from 'react-jss';
import { Classes } from '../../../theme';
import Logo from '../../../components/Logo';
import Link from '../../../components/Link';
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
          <Link color="primary" to="#" className={classes.menuItem}>Purchase</Link>
          <Link color="primary" to="/favorites" className={classes.menuItem}>My&nbsp;Orders</Link>
          <Link color="primary" to="#" className={classes.menuItem}>Sell</Link>
        </div>
      </div>
    )
  }
}

export default injectSheet(style)(Header);
