import React from 'react';
import injectSheet from 'react-jss';
import style from './style';

class Logo extends React.PureComponent<ICommonProps> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} style={{ backgroundImage: `url(/images/logo.png)`}} />
    )
  }
}

export default injectSheet(style as any)(Logo);
