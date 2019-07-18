import React from 'react';
import injectSheet from 'react-jss';
import style from './style';

export interface IOption {
  value: string;
  text: string;
}

interface IProps extends ICommonProps {
  option: IOption;
  onClick: (value: string) => void;
}

class Option extends React.PureComponent<IProps> {
  handleClick = () => {
    const { option, onClick } = this.props;
    onClick(option.value);
  };

  render() {
    const { classes, option: { text } } = this.props;

    return (
      <div className={classes.root} onClick={this.handleClick}>
        {text}
      </div>
    )
  }
}

export default injectSheet(style)(Option);
