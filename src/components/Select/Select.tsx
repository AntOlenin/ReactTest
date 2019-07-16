import React from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import { Classes } from '../../theme';
import Text from '../../components/Text';
import style from './style';

interface Option {
  value: string;
  text: string;
}

interface IProps {
  classes: Classes;
  label: string;
  value: string;
  options: Array<Option>;
  onChange: (option: Option) => void;
}

interface IState {
  expanded: boolean;
}

class Select extends React.PureComponent<IProps, IState> {
  state: IState = {
    expanded: false,
  };

  handleClick = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  renderLabel() {
    const { label } = this.props;

    return (
      <label>
        <Text size="s">{label}</Text>
      </label>
    )
  }

  renderSelect() {
    const { classes, options, value } = this.props;
    const { expanded } = this.state;
    const currentOption = options.find(option => option.value === value);

    const selectClassName = classnames(classes.select, {
      [classes.expanded]: expanded,
      [classes.collapsed]: !expanded,
    });

    return (
      <div className={selectClassName} onClick={this.handleClick}>
        {currentOption.text}
      </div>
    );
  }

  renderOptions() {
    const { classes, options } = this.props;
    const { expanded } = this.state;

    if (!expanded) {
      return null;
    }

    return (
      <div className={classes.options}>
        {options.map((option) => {
          return (
            <div key={option.value} className={classes.option}>{option.text}</div>
          )
        })}
      </div>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        {this.renderLabel()}
        <div className={classes.root}>
          {this.renderSelect()}
          {this.renderOptions()}
        </div>
      </>
    )
  }
}

export default injectSheet(style as any)(Select);
