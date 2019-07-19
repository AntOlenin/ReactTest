import React from 'react';
import injectSheet from 'react-jss';
import { Classes } from '../../theme';
import style from './style';

interface IProps {
  classes: Classes;
}

class CarItemPlaceholder extends React.PureComponent<IProps> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.picture} />
        <div className={classes.content}>
          <div className={classes.title} />
          <div className={classes.info} />
          <div className={classes.link} />
        </div>
      </div>
    )
  }
}

export default injectSheet(style)(CarItemPlaceholder);
