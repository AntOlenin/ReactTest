import React from 'react';
import injectSheet from 'react-jss';
import { Classes } from '../../theme';
import style from './style';

interface IProps {
  classes: Classes;
  text: string;
  onClick: () => void;
}

class Button extends React.PureComponent<IProps> {
  render() {
    const { classes, text, onClick } = this.props;

    return (
      <button className={classes.root} onClick={onClick}>
        {text}
      </button>
    )
  }
}

export default injectSheet(style as any)(Button);
