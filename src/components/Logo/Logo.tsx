import React from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';
import style from './style';

class Logo extends React.PureComponent<ICommonProps> {
  render() {
    const { classes } = this.props;

    return (
      <Link to="/">
        <div className={classes.root} style={{ backgroundImage: `url(/images/logo.png)`}} />
      </Link>
    )
  }
}

export default injectSheet(style)(Logo);
