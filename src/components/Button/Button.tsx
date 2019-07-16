import React from 'react';
import injectSheet from 'react-jss';
import { Classes } from '../../theme';
import style from './style';

interface IProps {
  classes: Classes;
  onClick: () => void;
}

class Button extends React.PureComponent<IProps> {
  render() {
    const { classes, onClick } = this.props;

    return (
      <button className={classes.root} onClick={onClick}>
        hello
      </button>
    )
  }
}

export default injectSheet(style as any)(Button);
