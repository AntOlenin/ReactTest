import React from 'react';
import injectSheet from 'react-jss';
import style from './style';

interface IProps extends ICommonProps {
  text: string;
  onClick?: () => void;
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

export default injectSheet(style)(Button);
